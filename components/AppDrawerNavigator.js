import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import CustomSideBarMenu  from './CustomSideBarMenu';
import HomeScreen from '../screens/HomeScreen';
import AddQuestionsScreen from '../screens/AddQuestionsScreen';

export const AppDrawerNavigator = createDrawerNavigator({
    Home : {
        screen : HomeScreen
        },
    AddQuestions : {
        screen : AddQuestionsScreen
    }
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })
