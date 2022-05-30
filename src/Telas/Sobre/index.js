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
          <Text style={style.textCriador}>
            Kleber Andrade - Codificação/Estilização
          </Text>
          <Text style={style.textCriador}>
            Matheus Guilherme - Codificação/Estilização
          </Text>
          <Text style={style.textCriador}>Maria Luiza - Estilização</Text>
          <Text style={style.textCriador}>Antonio Faustino - Estilização</Text>
          <Text style={style.textCriador}>Fabio Araújo - Codificação</Text>
        </View>
        
      </View>
    </View>
  );
}

export default Sobre;
