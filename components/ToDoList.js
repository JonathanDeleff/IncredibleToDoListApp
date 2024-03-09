import { StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';

export default function TodoList({tasks}) {

    return (
        <FlatList
 
        keyExtractor={(item) => item.task_id}
        data={tasks}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Text style={styles.list}>{item.task_name}</Text>
          </TouchableOpacity>
        )}
      />
    )
}

const styles = StyleSheet.create({
    list: {
      marginHorizontal: 10,
      marginTop: 24,
      padding: 10,
      backgroundColor: 'cyan',
      fontSize: 24,
    },
});