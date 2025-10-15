import { Text, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen';
import BotonesScreen from './BotonesScreen';
import { Button } from "react-native-web";

export default function MenuScreen() {
    const [screen,setScreen]= useState('menu');
    switch(screen){
        case 'contador': 
        return <ContadorScreen/>;
        case 'botones':
        return <BotonesScreen/>;
        case 'menu':
            default: 
            return (
             <View>
              <Text>MenuScreen</Text>
              <Button onPress={() => setScreen('contador')} title='Pract:Contador'/>
              <Button onPress={() => setScreen('contador')} title='Pract:Botones'/>
              <Button onPress={() => setScreen('contador')} title='Pract:Text Input & Aler'/>
              <Button onPress={() => setScreen('contador')} title='Pract:ImageBackgroung & SlapshScreen'/>
              <Button onPress={() => setScreen('contador')} title='Pract:ScrollView'/>
              <Button onPress={() => setScreen('contador')} title='Pract:ActivityIndicator'/>
              <Button onPress={() => setScreen('contador')} title='Pract:FlatList y Section List'/>
              <Button onPress={() => setScreen('contador')} title='Pract:Modal '/>
                <Button onPress={() => setScreen('contador')} title='Pract:Bottom Sheet'/>   
              </View>
            )
         
    }
    
  
}

