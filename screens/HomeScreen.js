import { StyleSheet, View, Button } from 'react-native'
import React from 'react'
import { useState } from 'react'
import ToDoForm from '../components/ToDoForm'
import TodoList from '../components/ToDoList'
import MainLayout from '../layouts/MainLayout'

export default function HomeScreen({navigation}) {

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
    <MainLayout>
        <ToDoForm addTask={addTask}/>
        <TodoList tasks={tasks}/>
        <Button
            title="Go to About"
            onPress={() => navigation.navigate('About')}
        />
    </MainLayout>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
      },
})