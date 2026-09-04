import { Button } from "@/components/Button";
import { CurrencyInput } from "@/components/CurrencyInput";
import { Input } from "@/components/Input";
import { PageHeader } from "@/components/PageHeader";
import { TransactionType } from "@/components/TransactionType";
import { TransactionTypes } from "@/components/utils/TransactionTypes";
import { useTransactionsDatabase } from "@/database/useTransactionsDatabase";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Alert, Text, View } from "react-native";

export default function Transaction() {
    const [amount, setAmount] = useState(0)
    const [type, setType] = useState(TransactionTypes.Input)
    const [isCreating, setIsCreating] = useState(false)
    const [observation, setObservation] = useState('')
    
    const params = useLocalSearchParams<{ id: string }>()

    const transactionsDatabase = useTransactionsDatabase()

    async function handleCreate() {
        try {
            if (amount <= 0) {
                return Alert.alert('Atenção!', "Preencha o valor. A transação deve ser maior que zero.")
            }

            setIsCreating(true)

            await transactionsDatabase.create({
                target_id: Number(params.id),
                amount: type === TransactionTypes.Output ? amount * -1 : amount,
                observation
            })

            Alert.alert('Sucesso', 'Transação salva com sucesso!', [
                {
                    text: 'OK',
                    onPress: () => router.back()
                }
            ])

        } catch (erro) {
            Alert.alert('Erro', 'Não foi possível salvar a transação.')
            console.log(erro)
            setIsCreating(false)
        }
    }

    return (
        <View style={{ flex: 1, padding: 24 }}>
            <PageHeader
                title="Nova transação"
                subtitle="A cada valor guardado você fica mais próximo de sua meta. Se esforce para guardar e evitar retirar."
            />

            <View style={{ marginTop: 32, gap: 24 }}>
                <TransactionType selected={type} onChange={setType} />
                <CurrencyInput
                    label="Valor (R$)"
                    value={amount}
                    onChangeValue={(value) => setAmount(value ?? 0)}
                />
                <Input
                    label="Motivo (opcional)"
                    placeholder="Ex: Investir em CDB de 110% no banco XPTO"
                    onChangeText={setObservation}
                />

                <Button title="Salvar" onPress={handleCreate} isProcessing={isCreating} />
            </View>
        </View>
    )
}