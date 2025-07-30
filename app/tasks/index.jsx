import { FlatList, StyleSheet, Text, View } from "react-native";
import TaskItem from "../../components/TaskItem";
import { FokusButton } from "../../components/FokusButton";
import { IconPlus } from "../../components/Icons";
import { router } from "expo-router";
import useTaskContext from "../../components/context/useTaskContext";

export default function Tasks() {
  const { tasks, deleteTask } = useTaskContext();

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.inner}>
          {/* tasks.map(t => {
            return (
              <TaskItem
                completed={t.completed}
                text={t.description}
                key={t.id}
              />
            );
          })*/}
          <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <TaskItem
                completed={item.completed}
                text={item.description}
                onPressDelete={() => deleteTask(item.id)}
              />
            )}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
            ListHeaderComponent={
              <Text style={styles.text}>Lista de tarefas:</Text>
            }
            ListFooterComponent={
              <View style={{ marginTop: 16 }}>
                <FokusButton
                  title="Adicionar nova tarefa"
                  icon={<IconPlus />}
                  outline
                  onPress={() => router.navigate("/add-task")}
                />
              </View>
            }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#021123",
    alignItems: "center",
  },
  wrapper: {
    gap: 40,
    width: "90%",
  },
  text: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 26,
    marginBottom: 16,
  },
  inner: {
    gap: 8,
  },
});
