import { ColorValue, Pressable, PressableProps, Text } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'
import { styles } from "./styles";
import { colors } from "@/theme";


type OptionProps = PressableProps & {
    isSeleted: boolean
    title: string
    icon: keyof typeof MaterialIcons.glyphMap
    selectedColor: ColorValue
}

export function Option({
    isSeleted, 
    title,
    icon,
    selectedColor,
    ...rest
}: OptionProps) {
    return (
        <Pressable
            style={[styles.option, isSeleted && { backgroundColor: selectedColor }]}
            {...rest}
        >
            <MaterialIcons
                name={icon}
                size={24}
                color={isSeleted ? colors.white : colors.gray[500]}
            />

            <Text style={[styles.title, isSeleted && { color: colors.white }]}>
                {title}
            </Text>
        </Pressable>
    )
}