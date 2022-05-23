import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import style from './style';
import Candidato from '../../mocks/Candidato';

function Urna() {
  const [modalVisible, setModalVisible] = useState(false);
  const lista = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const [numero, setNumero] = useState([]);
  const [candidato, setCandidato] = useState(Candidato);
  const [nome, setNome] = useState('');
  const [partido, setPartido] = useState('');
  const [slogan, setSlogan] = useState('');
  const [perfil,setPerfil] = useState()

  useEffect(() => {
    if (numero.length === 2) {
      candidato.map(item => {
        if (numero === item.numero) {
          setNome(item.nome);
          setPartido(item.partido);
          setSlogan(item.slogan);
          setPerfil(item.img)
          console.log(item);
        } 
      });
    } else {
      setNome('');
      setPartido('');
      setSlogan('');
      setPerfil()
    }
  }, [numero]);

  function guardar(dados) {
    if (numero.length < 2) setNumero(numero + dados);
  }

  

  return (
    <View style={style.background}>
      <View style={style.Cima}>
        <View style={style.container}>
          <View style={style.boxImage}>
            <Image
              style={style.candidato}
              source={require('../../assets/Candidato.jpg')}
            />
            <Text style={style.numeroCandidato}>Numero 123</Text>
          </View>
          <View style={style.boxTexto}>
            <Text style={style.texto}>Candidato: Franciscinho</Text>
            <Text style={style.texto}>Partido: Partido dos despartidos</Text>
          </View>
        </View>
      </View>

      <View style={style.meio}>
        <TouchableOpacity
          style={style.botaoVotar}
          onPress={() => setModalVisible(true)}>
          <Text style={{color: 'white', fontSize: 50}}>Votar</Text>
        </TouchableOpacity>
      </View>

      <View style={style.baixo}>
        <View style={style.boxText}>
          <Text style={style.textoDados}>
            Total de votos válidos apurados: 100
          </Text>
          <Text style={style.textoDados}>
            {' '}
            .Candidato 97: 53 votos, 53% do total
          </Text>
          <Text style={style.textoDados}>
            {' '}
            .Candidato 17: 7 votos, 7% do total
          </Text>
          <Text style={style.textoDados}>
            {' '}
            .Candidato 13: 40 votos, 40% do total
          </Text>
        </View>

        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <Image
            style={{width: 120, height: 50, resizeMode: 'contain'}}
            source={require('../../assets/TRPE.png')}
          />
          <Image
            style={{width: 120, height: 40}}
            source={require('../../assets/GovernoF.png')}
          />
        </View>
      </View>
      <Modal
        transparent={false}
        visible={modalVisible}
        animationType={'slide'}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={style.background}>
          <TouchableOpacity
            style={style.botaoVoltar}
            onPress={() => setModalVisible(false)}>
            <Icon size={40} color={'black'} name="close" />
          </TouchableOpacity>
          <View style={style.containerView}>
            <View style={{width: '100%', height: '30%', flexDirection: 'row'}}>
              <View style={style.boxTextoVoto}>
                <Text style={style.textoVoto}>Seu voto para:</Text>
                <Text style={style.textoVoto}>Presidente</Text>
              </View>
              <View style={style.logo}>
                <Image
                  style={{width: '100%', height: '100%', resizeMode: 'contain'}}
                  source={require('../../assets/Brasil.png')}
                />
              </View>
            </View>
            <View style={{width: '90%', height: '35%',backgroundColor:"#F3F3F3",alignSelf:'center'}}>
              <Image
                style={{width: '100%', height: '100%', resizeMode: 'contain'}}
                source={perfil}
              />
            </View>
            <View
              style={{
                width: '100%',
                height: '35%',
                paddingHorizontal: 20,
                paddingVertical: 15,
              }}>
              <Text style={style.textoCandidato}>
                Candidato: {nome ? nome : null}
              </Text>
              <Text style={style.textoCandidato}>
                Número: {numero ? numero : null}
              </Text>
              <Text style={style.textoCandidato}>
                Partido: {partido ? partido : null}
              </Text>
            </View>
          </View>
          <View style={style.teclado}>
            <View style={style.numeroTeclado}>
              {lista.map((item, index) => (
                <TouchableOpacity
                  onPress={() => guardar(item)}
                  key={index}
                  style={style.botaoN}>
                  <Text style={{color: '#FFFFFF'}}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={style.textoTeclado}>
              <TouchableOpacity
                onPress={() => guardar('branco')}
                style={style.botaoBranco}>
                <Text style={{color: 'black', fontWeight: '800'}}>Branco</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setNumero([]);
                }}
                style={style.botaoCorrige}>
                <Text style={{color: 'black', fontWeight: '800'}}>Corrige</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => guardar('Confirma')}
                style={style.botaoConfirma}>
                <Text style={{color: 'black', fontWeight: '800'}}>
                  Confirma{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default Urna;
