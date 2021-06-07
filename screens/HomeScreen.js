import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity, TextInput } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from 'firebase';
import db from '../config'

export default class HomeScreen extends Component{
    constructor(){
        super();
        this.state={
         grade: ''
        }
      }

      userGrade = (grade)=>{
        
      }

    render(){
        return(
            <View>
            <TextInput
            placeholder="Grade"
            onChangeText={(text)=>{
                this.setState({
                  grade: text
                })
              }}
            />
            <TouchableOpacity
           onPress = {()=>{
             this.userGrade(this.state.grade)
           }}
           >
           <Text>Enter</Text>
         </TouchableOpacity>
            </View>
        )
    }
}