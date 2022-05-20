import React from 'react'
import {View,Text} from 'react-native'
import RouteTab from './routes/RouteTab';
import { NavigationContainer } from '@react-navigation/native';

function App(){
  return(
    <NavigationContainer>
      <RouteTab />
    </NavigationContainer>
  )
}
export default App;