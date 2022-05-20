import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import style from './style';

function Sobre() {
  return (
    <View style={style.background}>
      <View style={style.containerCima}>
        <View style={style.boxImage}>
          <Image
            style={{width: '100%', height: '100%', resizeMode: 'cover'}}
            source={require('../../assets/Voto.png')}
          />
        </View>

        <View style={style.boxTitulos}>
          <View style={style.linha}>
            <Text style={style.Titulo}>Urna Eletrônica</Text>
          </View>
          <View style={style.linha}>
            <Text style={style.Titulo}>Eleições 2022</Text>
          </View>
        </View>
      </View>
      <View style={style.containerBaixo}>
        <View style={style.boxCriadores}>
          <Text style={style.textoDescricao}>
            Este Aplicativo foi desenvolvido por:
          </Text>
          <Text style={style.textCriador}>Nome e SobreNome</Text>
          <Text style={style.textCriador}>Nome e SobreNome</Text>
          <Text style={style.textCriador}>Nome e SobreNome</Text>
          <Text style={style.textCriador}>Nome e SobreNome</Text>
          <Text style={style.textCriador}>Nome e SobreNome</Text>
        </View>
        <View style={style.logo}>
          <View style={{width:120,height:55,alignItems:'center',justifyContent:'center'}}>
            <Image
              style={{width: '100%', height: '100%', resizeMode: 'contain'}}
              source={require('../../assets/TRPE.png')}
            />
          </View>
          <View style={{width:120,height:55, alignItems:'center',justifyContent:'center'}}>
            <Image
              style={{width: '100%', height: '100%', resizeMode: 'contain'}}
              source={require('../../assets/Brasil.png')}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

export default Sobre;
