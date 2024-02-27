import { StyleSheet, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function ToDoForm(){
 
      //State variable handling text entered in Text box
      const [text, setText] = useState("");
      //Text written by end user
      const changeHandler = (val) => {
        setText(val)
      }
      //Handle the 'task' button Event
      const submitHandler = (text) => {
        console.log(text);
        setTask((prevTask) => {
          return [{ task_name: text, task_id: Math.random().toString() }, ...prevTask]
        })
    }
    
    return(
      <View>
        <TextInput placeholder='Add new task here' onChangeText={changeHandler} />
        <Button title='Add Task' onPress={() => submitHandler(text)} />
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