import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import wallpaper from './images/wallpaper.jpg';

const image = 'https://chensio.com/wallpaper/sunset-retro/Wallpaper-sunset-retro-gradient-lock-screen-designed-by-Carlos-Asencio-CHENSIO-dot-COM.jpg'

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
    <ImageBackground source={wallpaper} style={styles.image}>
      <View style={styles.timer}>
        <Text style={styles.date}>{date.format("dddd MMMM D ")}</Text>
        <Text style={styles.time}>{date.format('hh:mm A')}</Text>
      </View>
    </ImageBackground>
  )
}

export default DateTime

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  timer: {
    alignItems: 'center',
    margin: 30,
    marginTop: 130,
    flexDirection: 'column',
  },
  time: {
    color: 'white',
    fontSize: 60,
  },
  date: {
    marginTop: 5,
    color: 'white',
    fontSize: 17,
  }
})