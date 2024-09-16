import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet, Alert, SafeAreaView } from 'react-native';

// Utility function to generate unique IDs
const generateId = () => Math.random().toString(36).slice(2, 11);

const App = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [editingId, setEditingId] = useState(null);

  // Handle text input changes
  const handleInputChange = (text) => {
    setInput(text);
  };

  // Add or update a todo item
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
    setInput(''); // Clear input field after action
  };

  // Add a new todo
  const addNewTodo = () => {
    const newTodo = {
      id: generateId(), // Use the manual ID generator
      text: input,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  // Update an existing todo
  const updateTodo = () => {
    const updatedTodos = todos.map((todo) =>
      todo.id === editingId ? { ...todo, text: input } : todo
    );
    setTodos(updatedTodos);
    setEditingId(null); // Clear editing ID
  };

  // Delete a todo item
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  // Start editing a todo item
  const startEditing = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    if (todoToEdit) {
      setInput(todoToEdit.text);
      setEditingId(id);
    }
  };

  // Render each todo item
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
        style={[styles.deleteButton, { opacity: editingId ? 0.5 : 1 }]} // Disable button if editing
        disabled={!!editingId} // Disable button if editing
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
        keyExtractor={(item) => item.id} // Use ID as key extractor
      />
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure 'flex' is used correctly here
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

export default App;
