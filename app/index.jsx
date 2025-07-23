import { useRef, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FokusButton } from "../components/FokusButton";
import { ActionButton } from "../components/ActionButton";
import { Timer } from "../components/Timer";

const pomodoro = [
  {
    id: "focus",
    initialValue: 25,
    image: require("./pomodoro.png"),
    display: "Foco",
  },
  {
    id: "short",
    initialValue: 5,
    image: require("./short.png"),
    display: "Pausa curta ",
  },
  {
    id: "long",
    initialValue: 15,
    image: require("./long.png"),
    display: "Pausa longa ",
  },
];

export default function Index() {
  const [timerType, setTimerType] = useState(pomodoro[0]);

  const timerRef = useRef(null)

  const toggleTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      return
    }
    const id = setInterval(() => {
      console.log("Timer rolando")
    }, 1000)
    timerRef.current = id
  }

  return (
    <View style={styles.container}>
      <Image source={timerType.image} />
      <View style={styles.actions}>
        <View style={styles.context}>
          {pomodoro.map((p) => (
            <ActionButton 
              key={p.id}
              active={ timerType.id === p.id}
              onPress={() => setTimerType(p)}
              display={p.display}
            />
          ))}
        </View>
        <Timer totalSeconds={timerType.initialValue}/>
        <FokusButton
          title={timerRef.current ? "Pausar" : "Começar"}
          onPress={toggleTimer}/>
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
  actions: {
    padding: 24,
    backgroundColor: "#14448080",
    borderRadius: 32,
    borderWidth: 2,
    width: "80%",
    borderColor: "#144480",
    gap: 32,
  },
  context: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
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
