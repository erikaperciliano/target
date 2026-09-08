import { View, StatusBar, Alert } from "react-native";
import { useCallback, useState } from "react";
import { router, useFocusEffect } from "expo-router";

import { Button } from "@/components/Button";
import { HomeHeader, HomeHeaderProps } from "@/components/HomeHeader";
import { List } from "@/components/List";
import { Target, TargetProps } from "@/components/Target";

import { colors } from "@/theme";

import { useTargetDatabase } from '@/database/useTargetDatabase'
import { Loading } from "@/components/Loading";
import { numberToCurrency } from "@/components/utils/numberToCurrency";
import { useTransactionsDatabase } from "@/database/useTransactionsDatabase";

export default function Index() {
  const [summary, setSummary] = useState<HomeHeaderProps>()
  const [isFetching, setIsFetching] = useState(true)
  const [targets, setTargets] = useState<TargetProps[]>([])

  const targetDatabase = useTargetDatabase()
  const transactionsDatabase = useTransactionsDatabase()

  async function fetchTargets(): Promise<TargetProps[]> {
    try {
      const response = await targetDatabase.listByClosesTarget()

      return response.map((item) => ({
        id: String(item.id),
        name: item.name,
        current: numberToCurrency(item.current),
        percentage: item.percentage.toFixed(0) + '%',
        target: numberToCurrency(item.amount),
      }))
      
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar as metas.')
      console.log(error)
      return []
    }
  }

  async function fetchSummary(): Promise<HomeHeaderProps> {
    try {
      const response = await transactionsDatabase.summary()

      if (!response) {
        throw new Error('Resumo não encontrado.')
      }

      return {
        total: numberToCurrency(response.input + response?.output),
        input: {
          label: 'Entradas',
          value: numberToCurrency(response.input)
        },
         output: {
          label: 'Saídas',
          value: numberToCurrency(response.output)
        },
      }

    } catch (error) {
      Alert.alert('Error', 'Não foi possível carregar o resumo.')
      console.log(error)
      throw error
    }
  }

  async function fetchData() {
    const targetDataPromise = fetchTargets()
    const dataSummaryPromise = fetchSummary()

    const [targetData, dataSummary] = await Promise.all([targetDataPromise, dataSummaryPromise,])

    setTargets(targetData)
    setSummary(dataSummary)

    setIsFetching(false)
  }

  useFocusEffect(
    useCallback(() => {
      fetchData()
    },[])
  )

  if (isFetching) {
    return <Loading />
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle='light-content' translucent backgroundColor={colors.blue[500]} />
      {summary && <HomeHeader data={summary} />}

      <List
        title="Metas"
        data={targets}
        keyExtractor={(item, index) => item.id ?? String(index)}
        renderItem={({ item }) => (
          <Target
            data={item}
            onPress={() => router.navigate(`/in-progress/${item.id}`)}
          />
        )}
        emptyMessage="Nenhuma meta. Clique em nova meta para criar."
        containerStyle={{ paddingHorizontal: 24 }}
      />

      <View style={{ padding: 24, paddingBottom: 32}}>
        <Button title="Nova meta" onPress={() => router.navigate('/target')} />
      </View>
    </View>
  );
}