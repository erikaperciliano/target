import { View } from "react-native"
import { TransactionTypes } from "../utils/TransactionTypes"
import { styles } from "./styles"
import { Option } from "./option"
import { colors } from "@/theme"

type TransactionTypeProps = {
    selected: TransactionTypes
    onChange: (type: TransactionTypes) => void
}

export function TransactionType({selected, onChange}: TransactionTypeProps) {
    return (
        <View style={styles.container}>
            <Option
                icon="arrow-upward"
                title="Guardar"
                isSeleted={selected === TransactionTypes.Input}
                selectedColor={colors.blue[500]}
                onPress={() => onChange(TransactionTypes.Input)}
            />

            <Option
                icon="arrow-downward"
                title="Resgatar"
                isSeleted={selected === TransactionTypes.Output}
                selectedColor={colors.red[400]}
                onPress={() => onChange(TransactionTypes.Output)}
            />
        </View>
    )
}