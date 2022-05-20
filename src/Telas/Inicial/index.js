import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import style from './style';
function Inicial() {
  return (
    <View style={style.background}>
       
        <View style={style.boxImage}>
          <Image  style={style.image} source={require('../../assets/Urna.png')} />
        </View>

        <View style={style.boxTitulo}>
          <Text style={style.titulo}>Bem-Vindo a Urna Eletronica</Text>
      
          <Text style={style.subtitulo}>Eleição 2022</Text>
          
        </View>

        <View style={style.boxTexto}>
          <Text style={style.textoDescricao}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            faucibus massa id augue egestas, non rhoncus risus fringilla. Sed
            convallis laoreet ante non porttitor. Sed mattis, nunc feugiat
            consequat feugiat, urna nulla faucibus ipsum, et blandit neque diam
            vitae augue. Suspendisse quis pulvinar tortor. Vestibulum ex orci,
            scelerisque vitae justo at, cursus sollicitudin tortor. Sed ut
            feugiat mauris. Vivamus blandit orci nec felis accumsan, quis
            interdum .
          </Text>
          <View style={{ width: '100%',flexDirection:'row',justifyContent:'space-evenly'}}>
          <Image style={{width:120, height:50,resizeMode:'contain'}} source={require('../../assets/GovernoF.png')} />
          <Image style={{width:120, height:40}} source={require('../../assets/Brasil.png')} />
          </View>

        </View>
     
    </View>
  );
}


export default Inicial;
