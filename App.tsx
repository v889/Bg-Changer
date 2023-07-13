/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

      
     
function App(): JSX.Element {
 const [BackgroundColor,setBackgroundColor]=useState("#ffffff")
 const generator=()=>{
  const hexrange="0123456789ABCDEF"
  let color="#"
  for(let i=0;i<6;i++){
    color += hexrange[Math.floor(Math.random() * 16)]
  }
  setBackgroundColor(color)
 }

  return (
    <>
    <StatusBar backgroundColor={BackgroundColor}/>
    <View style={[styles.container, {backgroundColor: BackgroundColor}] }>
      <TouchableOpacity onPress={generator}>
        <View style={styles.actionBtn}>
          <Text style={styles.actionBtnText}>Press Me</Text>
        </View>
      </TouchableOpacity>
    </View>
    </>
    
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  actionBtn:{
    borderRadius:12,
    backgroundColor:"#6A1b4D",
    paddingVertical:10,
    paddingHorizontal:40
  },
  actionBtnText:{
    fontSize:24,
    color:"#FFFFFF",
    textTransform:"uppercase"
  }
});

export default App;
