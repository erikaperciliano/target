import { Button } from "@/components/Button";
import { CurrencyInput } from "@/components/CurrencyInput";
import { Input } from "@/components/Input";
import { PageHeader } from "@/components/PageHeader";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Alert, View } from "react-native";

export default function Target() {
    const [isProcessing, setIsProcessing] = useState(false)
    const [name, setName] = useState('')
    const [amount, setAmount] = useState(0)

    const params = useLocalSearchParams<{ id?: string }>()

    function handleSave() {
        if (!name.trim() || amount <= 0) {
            return Alert.alert('Atenção', 'Preencha nome e o valor. Precisa ser maior que zero.')
        }

        setIsProcessing(true)

        if (params.id) {
            // update
        } else {
            create()
        }
    }

    async function create() {
        try {
            Alert.alert('Nova Meta', 'Meta criada com sucesso!', [
                {
                    text: 'OK',
                    onPress: () => router.back()
                }
            ])
        } catch (error) {
            Alert.alert('Erro', 'Não foi possível criar a meta.')
            console.log(error)
            setIsProcessing(false)
        }
    }

    return (
        <View style={{ flex: 1, padding: 24 }}>
            <PageHeader
                title='Meta'
                subtitle="Economizar para alcançar sua meta financeira."
            />
            
            <View style={{ marginTop: 32, gap: 24 }}>
                <Input
                    label="Nome da meta"
                    placeholder="Ex: Viagem para praia, Apple Watch"
                    onChangeText={setName}
                    value={name}
                />

                <CurrencyInput
                    label="Valor alvo (R$)"
                    value={amount}
                    onChangeValue={(value) => setAmount(value ?? 0)}
                />

                <Button title="Salvar" onPress={handleSave} isProcessing={isProcessing} />
            </View>

        </View>
    )
}