import { useState } from "react";
import { StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';

export default function TodoList(){
    const [task, setTask] = useState([
        { task_name: 'Wake up', task_id: '1' },
        { task_name: 'Have coffee', task_id: '2' },
        { task_name: 'Take shower', task_id: '3' },
        { task_name: 'Drive to school', task_id: '4' },
        { task_name: 'Attend class', task_id: '5' },
        { task_name: 'Return home', task_id: '6' },
        { task_name: 'Go for run', task_id: '7' },
        { task_name: 'Do Homework', task_id: '8' },
      ]);

    const clickHandler = (task_id) => {
        console.log(task_id);
        setTask((prevTask) => {
          return prevTask.filter(task => task.task_id != task_id);
        })
      }

    return (
        <FlatList
 
        keyExtractor={(item) => item.task_id}
        data={task}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => clickHandler(item.task_id)}>
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