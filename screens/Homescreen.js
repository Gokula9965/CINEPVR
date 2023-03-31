import { StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import React from 'react'
import Header from'../components/Header'
import MovieCards from '../components/MovieCards'
const Homescreen = () => {
  return (
    <SafeAreaView style={{backgroundColor:"#F0F0F0",flex:1}}>
      
      <MovieCards/>
    </SafeAreaView>
  )
}

export default Homescreen

const styles = StyleSheet.create({})