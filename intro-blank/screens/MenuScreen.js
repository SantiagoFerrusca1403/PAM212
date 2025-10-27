import { Text, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen';
import BotonesScreen from './Botones/BotonesScreen';
import { Button } from "react-native-web";
import ActivityIndicatorScreen from './ActivityIndicatorScreen';
import TextInputScreen from './TextInputScreen';
import ImageBackgroungScreen from './ImageBackgroungScreen';
import ScrollViewScreen from './ScrollViewScreen';
import FlatListScreen from './FlatListScreen';
import ModalScreen from './ModalScreen';
import BottomSheetScreen from './BottomSheetScreen';
import RepasoScreen from './RepasoScreen';



export default function MenuScreen() {
    const [screen,setScreen]= useState('menu');
    switch(screen){
        case'contador': 
        return <ContadorScreen/>;
        case'botones':
        return <BotonesScreen/>;
        case'textInput':
        return <TextInputScreen/>;
        case'imageBackgroung':
        return <ImageBackgroungScreen/>;
        case'scrollView':
        return <ScrollViewScreen/>;
        case'activity':
        return <ActivityIndicatorScreen/>;
        case'flatlist':
        return <FlatListScreen/>;
        case'modal':
        return <ModalScreen/>;
        case'bottom Sheet':
        return <BottomSheetScreen/>;
        case'repaso':
        return <RepasoScreen/>;
        case 'menu':
            default: 
            return (
             <View style={styles.container}> 
              <Text>MenuScreen</Text>
              <View style={styles.contenedorBotones}> 
              <Button onPress={() => setScreen('contador')} title='Pract:Contador'/>
              <Button onPress={() => setScreen('botones')} title='Pract:Botones'/>
              <Button onPress={() => setScreen('textInput')} title='Pract:TextInput'/>
              <Button onPress={() => setScreen('imageBackgroung')} title='Pract:ImageBackgroung'/>
              <Button onPress={() => setScreen('scrollView')} title='Pract:ScrollView'/>
              <Button onPress={() => setScreen('activity')} title='Pract:ActivityIndicatorScreen'/>
              <Button onPress={() => setScreen('flatlist')} title='Pract:FlatList'/>
              <Button onPress={() => setScreen('modal')} title='Pract:Modal '/>
              <Button onPress={() => setScreen('bottom Sheet')} title='Pract:Bottom Sheet'/>
                <Button onPress={() => setScreen('repaso')} title='Pract:Repaso '/>

              
              </View>
              </View>
            )
         
    }
    
  
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#10092eff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    contenedorBotones:{
        marginTop:15,
        flexDirection:'line',
        gap:20,
    },

});

