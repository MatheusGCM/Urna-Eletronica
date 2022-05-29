import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import style from './style';
import Candidato from '../../mocks/Candidato';
import ModalInfo from '../../components/ModalInfo';

function Urna() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalInfo, setModalInfo] = useState(false);
  const lista = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const [numero, setNumero] = useState([]);
  const [candidato, setCandidato] = useState(Candidato);
  const [nome, setNome] = useState('');
  const [partido, setPartido] = useState('');
  const [slogan, setSlogan] = useState('');
  const [perfil, setPerfil] = useState();
  const [totalVotos, setTotalVotos] = useState(0);

  const [nomeL, setNomeL] = useState('');
  const [partidoL, setPartidoL] = useState('');
  const [sloganL, setSloganL] = useState('');
  const [perfilL, setPerfilL] = useState();
  const [numeroL, setNumeroL] = useState([]);

  useEffect(() => {
    if (numero.length === 2) {
      candidato.map(item => {
        if (numero === item.numero) {
          setNome(item.nome);
          setPartido(item.partido);
          setSlogan(item.slogan);
          setPerfil(item.img);
          console.log(item);
        }
      });
    } else {
      setNome('');
      setPartido('');
      setSlogan('');
      setPerfil();
    }
  }, [numero]);

  function guardar(dados) {
    if (numero.length < 2) setNumero(numero + dados);
  }

  function confirmar() {
    if (numero.length === 2) {
      candidato.map(item => {
        if (numero === item.numero) {
          item.votacao += 1;
          setTotalVotos(totalVotos + 1);
          setModalVisible(false);
          setNomeL(item.nome);
          setPartidoL(item.partido);
          setSloganL(item.slogan);
          setPerfilL(item.img);
          setNumeroL(numero);
          setNome('');
          setPartido('');
          setSlogan('');
          setPerfil();
          setNumero([]);
        }
      });
    }
  }

  function branco(){
    setModalVisible(false);
          setNomeL('----');
          setPartidoL('----');
          setSloganL('----');
          setPerfilL(require('../../assets/PerfilVazio.png'));
          setNumeroL([]);
          setNome('');
          setPartido('');
          setSlogan('');
          setPerfil();
          setNumero([]);
  }

  return (
    <View style={style.background}>
      <View style={style.Cima}>
        <View style={style.container}>
          <View style={style.boxImage}>
            <Image
              style={style.candidato}
              source={
                perfilL ? perfilL : require('../../assets/PerfilVazio.png')
              }
            />
            <Text style={style.numeroCandidato}>
              Numero {numeroL ? numeroL : null}
            </Text>
          </View>
          <View style={style.boxTexto}>
            <Text style={style.texto}>Candidato: {nomeL ? nomeL : '----'}</Text>
            <Text style={style.texto}>
              Partido: {partidoL ? partidoL : '----'}
            </Text>
            <Text style={style.texto}>
              Slogan: {sloganL ? sloganL : '----'}
            </Text>
          </View>
        </View>
      </View>

      <View style={style.meio}>
        <TouchableOpacity
          onPress={() => {
            setModalInfo(true);
          }}
          style={style.botaoInfo}>
          <Text style={{color: 'white'}}>Informação</Text>
        </TouchableOpacity>
        <ModalInfo modalInfo={modalInfo} setModalInfo={setModalInfo} />
        <TouchableOpacity
          style={style.botaoVotar}
          onPress={() => setModalVisible(true)}>
          <Text style={{color: 'white', fontSize: 50}}>Votar</Text>
        </TouchableOpacity>
      </View>

      <View style={style.baixo}>
        <FlatList
          data={Candidato}
          keyExtractor={item => item.numero}
          ListHeaderComponent={
            <Text style={style.textoDados}>
              Total de votos válidos apurados: {totalVotos}
            </Text>
          }
          ListHeaderComponentStyle={style.HFlat}
          ListFooterComponent={<View></View>}
          ListFooterComponentStyle={{height: 5}}
          renderItem={({item}) => (
            <Text key={item.numero} style={style.textoDados}>
              {' '}
              .Candidato {item.numero}: {item.votacao} votos,{' '}
              {totalVotos ? ((item.votacao * 100) / totalVotos).toFixed(1) : 0}%
              do total
            </Text>
          )}
        />
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
        <View style={style.backgroundModal}>
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
            <View style={style.containerModal}>
              <View style={style.imageModal}>
                <Image
                  style={{width: 100, height: 100, resizeMode: 'contain',borderRadius:10}}
                  source={perfil}
                />
                <Text style={style.textoCandidato}>
                  Número {numero ? numero : null}
                </Text>
              </View>
              <View style={style.dadosModal}>
                <Text style={style.textoDadosModal}>
                  Candidato: {nome ? nome : '----'}
                </Text>
                <Text style={style.textoDadosModal}>
                  Partido: {partido ? partido : '----'}
                </Text>
                <Text style={style.textoDadosModal}>
                  Slogan: {slogan ? slogan : '----'}
                </Text>
              </View>
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
                onPress={() => branco()}
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
                onPress={() => confirmar()}
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
