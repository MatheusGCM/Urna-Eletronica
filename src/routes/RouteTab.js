import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Urna from '../Telas/Urna';
import Inicial from '../Telas/Inicial';
import Sobre from '../Telas/Sobre';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Teste from '../Telas/teste'

function RouteTab() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Inicial"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#478F0F',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarActiveTintColor:'#BDCEBE'
        ,
        tabBarStyle: {
          backgroundColor: '#478F0F',
        },
        tabBarLabelStyle: { fontSize: 12, fontWeight: '800'},
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="home" color={focused?'#FFFFFF': '#BDCEBE'} size={20} />
          ),
        }}
        name="Inicial"
        component={Inicial}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Icon size={20} color={focused?'#FFFFFF': '#BDCEBE'} name="cash-register" />
          ),
        }}
        name="Urna"
        component={Urna}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Icon size={20} color={focused?'#FFFFFF': '#BDCEBE'} name="info-circle" />
          ),
        }}
        name="Sobre"
        component={Sobre}
      />
    </Tab.Navigator>
  );
}
export default RouteTab;
