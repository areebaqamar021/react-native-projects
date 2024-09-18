import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';

const NotesApp = () => {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState<{ id: number; text: string }[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);

  const addNote = () => {
    if (note.trim()) {
      if (editingId !== null) {
        setNotes(prevNotes =>
          prevNotes.map(n => (n.id === editingId ? { id: editingId, text: note } : n))
        );
        setEditingId(null);
      } else {
        setNotes(prevNotes => [...prevNotes, { id: Date.now(), text: note }]);
      }
      setNote('');
    }
  };

  const editNote = (id: number) => {
    const noteToEdit = notes.find(n => n.id === id);
    if (noteToEdit) {
      setNote(noteToEdit.text);
      setEditingId(id);
    }
  };

  const deleteNote = (id: number) => {
    setNotes(prevNotes => prevNotes.filter(n => n.id !== id));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a note"
        value={note}
        onChangeText={setNote}
      />
      <Button title={editingId !== null ? "Update Note" : "Add Note"} onPress={addNote} />
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.noteItem}>
            <Text style={styles.noteText}>{item.text}</Text>
            <TouchableOpacity onPress={() => editNote(item.id)}>
              <Text style={styles.editButton}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => deleteNote(item.id)}
              disabled={editingId !== null}
              style={[ editingId !== null && styles.disabledButton]}
            >
              <Text style={editingId !== null ? styles.disabledButtonText : styles.deleteButtonText}>
                Delete
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  noteItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  noteText: {
    flex: 1,
  },
  editButton: {
    color: 'blue',
    marginRight: 10,
  },
  deleteButton: {
    color: '#f589fff',
  },
  deleteButtonText: {
    color: 'red',
  },
  disabledButton: {
    opacity: 0.4,
  },
  disabledButtonText: {
    color: 'red',
  },
});

export default NotesApp;
