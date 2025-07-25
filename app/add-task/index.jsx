import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { IconSave } from "../../components/Icons";

export default function AddTask() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Adicionar uma tarefa:</Text>
      <View style={styles.inner}>
        <Text style={styles.label}>Em que você está trabalhando?</Text>
        <TextInput style={styles.input} numberOfLines={10} />
        <Pressable style={styles.button}>
          <IconSave /> <Text>Salvar</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#021123",
    gap: 16,
    alignItems: "center",
  },
  text: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 26,
  },

  inner: {
    backgroundColor: "#98A0A8",
    width: "90%",
    borderRadius: 8,
    padding: 16,
    gap: 32,
  },

  label: {
    fontSize: 18,
    fontWeight: 600,
  },

  input: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 24,
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,

  },
});
