import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet, Alert, SafeAreaView } from 'react-native';

const generateId = () => Math.random().toString(36).slice(2, 11);

const TodoList = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [editingId, setEditingId] = useState(null);


  const handleInputChange = (text) => {
    setInput(text);
  };

  const handleTodoAction = () => {
    if (input.trim().length === 0) {
      Alert.alert('Error', 'Todo cannot be empty');
      return;
    }

    if (editingId) {
      updateTodo();
    } else {
      addNewTodo();
    }
    setInput(''); 
  };

  const addNewTodo = () => {
    const newTodo = {
      id: generateId(),
      text: input,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const updateTodo = () => {
    const updatedTodos = todos.map((todo) =>
      todo.id === editingId ? { ...todo, text: input } : todo
    );
    setTodos(updatedTodos);
    setEditingId(null); 
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const startEditing = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    if (todoToEdit) {
      setInput(todoToEdit.text);
      setEditingId(id);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.todoItem}>
      <Text>{item.text}</Text>
      <TouchableOpacity
        onPress={() => startEditing(item.id)}
        style={styles.editButton}
      >
        <Text>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => deleteTodo(item.id)}
        style={[styles.deleteButton, { opacity: editingId ? 0.5 : 1 }]}
        disabled={!!editingId}
      >
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style = {{flex: 1}}>
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={handleInputChange}
        placeholder="Enter todo"
      />
      <Button
        title={editingId ? 'Update Todo' : 'Add Todo'}
        onPress={handleTodoAction}
      />
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id} 
      />
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  editButton: {
    marginLeft: 10,
  },
  deleteButton: {
    marginLeft: 10,
  },
});

export default TodoList;
