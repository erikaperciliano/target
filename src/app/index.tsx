import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>Expo Router</Text>

      <Pressable onPress={() => router.navigate('/target')}>
        <Text style={{ color: "#007AFF", fontSize: 16 }}>Nova Meta</Text>
      </Pressable>

      <Pressable onPress={() => router.navigate('/transaction/132')}>
        <Text style={{ color: "#007AFF", fontSize: 16 }}>Transação</Text>
      </Pressable>

      <Pressable onPress={() => router.navigate('/in-progress/12')}>
        <Text style={{ color: "#007AFF", fontSize: 16 }}>Progresso</Text>
      </Pressable>
    </View>
  );
}