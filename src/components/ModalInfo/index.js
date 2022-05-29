import React from 'react';
import {View, Text, Modal, FlatList, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Candidato from '../../mocks/Candidato';
import style from './style';

function ModalInfo({modalInfo,setModalInfo}) {
  const Header = () => (
      <>
    <TouchableOpacity
      style={style.botaoVoltar}
      onPress={() => setModalInfo(!modalInfo)}>
      <Icon size={40} color={'white'} name="close" />
    </TouchableOpacity>
    <Text style={style.textHeader}>Candidatos:</Text>
    </>
  );
  return (
    <Modal
      transparent={false}
      visible={modalInfo}
      animationType={'slide'}
      onRequestClose={() => {
        setModalVisible(!modalInfo);
      }}>
      <View style={style.background}>
        <FlatList
          data={Candidato}
          keyExtractor={item => item.numero}
          ListHeaderComponent={<Header/>}
          ListHeaderComponentStyle={style.header}
          renderItem={({item}) => (
            <View style={style.container}>
                <View style={style.foto}> 
                    
                    <Image style={{width:90,height:80,resizeMode:'contain',borderRadius:10}} source={item.img} />
                    <Text style={{textAlign:'center',fontWeight:'800'}}>{item.nome}</Text>
                </View>
                <View style={style.dados}>
                <Text style={style.textDados}>Numero: {item.numero}</Text>
                <Text style={style.textDados} >Partido: {item.partido}</Text>
                <Text style={style.textDados} >Slogan: {item.slogan}</Text>
                </View>
              
            </View>
          )}
        />
      </View>
    </Modal>
  );
}
export default ModalInfo;
