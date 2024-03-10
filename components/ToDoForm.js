import { StyleSheet, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function ToDoForm({addTask}){
 
      //State variable handling text entered in Text box
      const [taskText, setTaskText] = useState("");
      //Text written by end user


    
    return(
      <View>
        <TextInput placeholder='Add new task here' onChangeText={(text) => setTaskText(text)} value={taskText} />
        <Button title='Add Task' onPress={() => addTask(taskText)} />
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 40,
      paddingHorizontal: 20,
      backgroundColor: '#fff',
    },
});