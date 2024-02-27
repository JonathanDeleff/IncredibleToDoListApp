/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import ToDoForm from './components/ToDoForm';
import TodoList from './components/ToDoList';


function App() {
    return (
      <View style={styles.container}>
        <ToDoForm/>
        <TodoList/>
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