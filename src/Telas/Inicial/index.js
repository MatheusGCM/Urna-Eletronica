import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import style from './style';
function Inicial() {
  return (
    <View style={style.background}>
      <View style={style.boxImage}>
        <Image style={style.image} source={require('../../assets/Urna.png')} />
      </View>

      <View style={style.boxTitulo}>
        <Text style={style.titulo}>Bem-Vindo a Urna Eletronica</Text>

        <Text style={style.subtitulo}>Eleições 2022</Text>
      </View>

      <View style={style.boxTexto}>
        <Text style={style.textoDescricao}>
          Numa democracia, como ocorre no Brasil, as eleições são de fundamental
          importância, além de representar um ato de cidadania. Possibilitam a
          escolha de representantes e governantes que fazem e executam leis que
          interferem diretamente em nossas vidas.
        </Text>
        <View>
          <View style={style.logos}>
            <View>
              <Image
                style={{width: 170, height: 70, resizeMode: 'contain'}}
                source={require('../../assets/GovernoF.png')}
              />
            </View>
            <View>
              <Image
                style={{width: 170, height: 70, resizeMode: 'contain'}}
                source={require('../../assets/Brasil.png')}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Inicial;
