import { Link } from "expo-router";
import { Image, View, Text, StyleSheet } from "react-native";
import { FokusButton } from "../components/FokusButton";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/Logo.png")} />
      <View style={styles.inner}>
        <Text style={styles.title}>
          Otimize sua {"\n"}produtividade,{"\n"}{" "}
          <Text style={styles.bold}>mergulhe no que {"\n"}importa</Text>
        </Text>
        <Image source={require("../assets/images/home.png")} />
        <FokusButton title="Quero iniciar!" onPress={() => console.log("navegar")}/>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto de estudo feito por Lenon Merlo
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40,
  },

  inner: {
    gap: 16,
  },

  title: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 26,
  },

  bold: {
    fontWeight: "bold",
  },

  footer: {
    width: "80%",
  },

  footerText: {
    textAlign: "center",
    color: "#98a0a8",
    fontSize: 12.5,
    marginBottom: 16,
  },
});
