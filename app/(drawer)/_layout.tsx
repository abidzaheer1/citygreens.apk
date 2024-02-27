import React from 'react'
import Drawer from 'expo-router/drawer'
import { colorTokens, size } from '@tamagui/themes'
import { Ionicons } from '@expo/vector-icons'
function layout() {
  return (
    <Drawer 
    screenOptions={{
      headerShown: false,
      drawerActiveBackgroundColor: colorTokens.dark.green.green3, // Ensure colorTokens path is correct
      drawerActiveTintColor: '#fff',
    }}
  >
    <Drawer.Screen 
      name='Landing' 
      // component={LandingScreen} 
      options={{ title: 'Welcome',
      headerShown: true,
      drawerIcon: ({ color, size }) => <Ionicons name='menu' size={size} color={color} />,

     
    }} 
    />
    <Drawer.Screen 
      name='Home' 
      // component={HomeScreen} 
      options={{
        title: 'Home',
        headerShown: true,
        drawerIcon: ({ color, size }) => <Ionicons name='home' size={size} color={color} />,
      }} 
    />
    <Drawer.Screen 
      name='Office' 
      // component={OfficeScreen} 
      options={{ title: 'Office',
      headerShown: true,
      drawerIcon: ({ color, size }) => <Ionicons name='home' size={size} color={color} />,
    }} 
    />             
  </Drawer>
  )
}

export default layout
