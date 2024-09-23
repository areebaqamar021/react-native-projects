import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import moment from 'moment';
import React, { useEffect, useState } from 'react';

const DateTime = () => {
  const [date, setDate] = useState(moment());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(moment())
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  })

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.timer}>
        <Text style={styles.time}>{date.format('hh:mm A')}</Text>
        <Text style={styles.date}>{date.format("dddd MMMM D, YYYY")}</Text>
      </View>
    </SafeAreaView>
  )
}

export default DateTime

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  timer: {
    backgroundColor: "black",
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
    padding: 30,
  },
  time: {
    color: 'white',
    fontSize: 40,
  },
  date: {
    marginTop: 5,
    color: 'white',
    fontSize: 17,
  }
})