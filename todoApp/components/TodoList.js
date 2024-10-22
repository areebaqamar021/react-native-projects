import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const addTask = () => {
    if (input.trim() === '') {
      return;
    }
    setTasks([...tasks, input])
    console.log('Task added', input);

    setInput('');
  }
  
  const updateTask = () => {
    if (input.trim() === '' || editIndex === null) return;
    const updatedTasks = tasks.map((item, index) =>
      index === editIndex ? input : item
    )
    setTasks(updatedTasks);
    setInput('')
    setEditIndex(null);
  }

  const startEdit = (index) => {
    setInput(tasks[index]);
    setEditIndex(index);
  }

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index)
    setTasks(updatedTasks);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter a task"
          value={input}
          onChangeText={setInput}
          style={styles.input}
        />
        {editIndex !== null ? (
          <TouchableOpacity onPress={updateTask} style={styles.button}>
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={addTask} style={styles.button}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        )}
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.taskContainer}>
            <View style={styles.editDeleteContainer}>
              <TouchableOpacity onPress={() => startEdit(index)} style={styles.editButton}>
                <Text style={styles.editDeleteText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteTask(index)}>
                <Text style={styles.editDeleteText}>Delete</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.taskText}>{item}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

export default TodoList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    padding: 10,
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    backgroundColor: '#fafafa',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  taskContainer: {
    flexDirection: 'row-reverse', 
    alignItems: 'center', 
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  editDeleteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10, 
  },
  taskText: {
    fontSize: 16,
    color: '#333',
    flex: 1, 
    overflow: 'hidden', 
    textOverflow: 'ellipsis', 
  },
  editDeleteText: {
    color: '#007BFF',
    fontWeight: '600',
    marginRight: 10, 
  },
  editButton: {
    marginRight: 10,
  },
  editDeleteText: {
    color: '#007BFF',
    fontWeight: '600',
  },
});










// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet, Alert, SafeAreaView } from 'react-native';

// const generateId = () => Math.random().toString(36).slice(2, 11);

// const TodoList = () => {
//   const [input, setInput] = useState('');
//   const [todos, setTodos] = useState([]);
//   const [editingId, setEditingId] = useState(null);


//   const handleInputChange = (text) => {
//     setInput(text);
//   };

//   const handleTodoAction = () => {
//     if (input.trim().length === 0) {
//       Alert.alert('Error', 'Todo cannot be empty');
//       return;
//     }

//     if (editingId) {
//       updateTodo();
//     } else {
//       addNewTodo();
//     }
//     setInput(''); 
//   };

//   const addNewTodo = () => {
//     const newTodo = {
//       id: generateId(),
//       text: input,
//     };
//     setTodos((prevTodos) => [...prevTodos, newTodo]);
//   };

//   const updateTodo = () => {
//     const updatedTodos = todos.map((todo) =>
//       todo.id === editingId ? { ...todo, text: input } : todo
//     );
//     setTodos(updatedTodos);
//     setEditingId(null); 
//   };

//   const deleteTodo = (id) => {
//     const updatedTodos = todos.filter((todo) => todo.id !== id);
//     setTodos(updatedTodos);
//   };

//   const startEditing = (id) => {
//     const todoToEdit = todos.find((todo) => todo.id === id);
//     if (todoToEdit) {
//       setInput(todoToEdit.text);
//       setEditingId(id);
//     }
//   };

//   const renderItem = ({ item }) => (
//     <View style={styles.todoItem}>
//       <Text>{item.text}</Text>
//       <TouchableOpacity
//         onPress={() => startEditing(item.id)}
//         style={styles.editButton}
//       >
//         <Text>Edit</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         onPress={() => deleteTodo(item.id)}
//         style={[styles.deleteButton, { opacity: editingId ? 0.5 : 1 }]}
//         disabled={!!editingId}
//       >
//         <Text>Delete</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <SafeAreaView style = {{flex: 1}}>
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         value={input}
//         onChangeText={handleInputChange}
//         placeholder="Enter todo"
//       />
//       <Button
//         title={editingId ? 'Update Todo' : 'Add Todo'}
//         onPress={handleTodoAction}
//       />
//       <FlatList
//         data={todos}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id} 
//       />
//     </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#fff',
//   },
//   input: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     marginBottom: 16,
//     paddingHorizontal: 8,
//   },
//   todoItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   editButton: {
//     marginLeft: 10,
//   },
//   deleteButton: {
//     marginLeft: 10,
//   },
// });

// export default TodoList;
