import { Text, View } from "react-native";
import TaskItem from "../../components/TaskItem";

export default function Tasks() {
  return (
    <View>
      <Text>Página para listar tarefas</Text>
      <TaskItem completed text={"Estudar React"} />
      <TaskItem text={"Estudar React Native"} />
    </View>
  );
}
