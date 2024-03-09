/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ToDoForm from './components/ToDoForm';
import TodoList from './components/ToDoList';


function App() {
    const [tasks, setTask] = useState([
        { task_name: 'Do Laundry', task_id: '1' },
        { task_name: 'Go to gym', task_id: '2' },
        { task_name: 'Walk dog', task_id: '3' },
    ]);

    const addTask = (taskName) => {
      const newTask = { task_name: taskName, task_id: Math.random().toString() };
      setTask([...tasks, newTask]);
    }

    return (
      <View style={styles.container}>
        <ToDoForm addTask={addTask}/>
        <TodoList tasks={tasks}/>
      </View> 

    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 40,
      paddingHorizontal: 20,
      backgroundColor: '#fff',
    },
});

export default App;