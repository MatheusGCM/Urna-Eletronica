import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: '#E3D4D0',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container: {
      width: '90%',
      height: '90%',
      backgroundColor: '#F0F0F0',
      alignItems: 'center',
    },
    boxImage: {
      width: '90%',
      height: '20%',
      margin: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image:{
      resizeMode:'contain',
      width:350,
      height:180
    },
    boxTitulo: {
      width: '100%',
      height: '28%',
      alignItems: 'center',
      paddingVertical: 10,
     
    },
    boxTexto: {
      width: '100%',
      flexWrap: 'wrap',
      paddingHorizontal: 20,
      alignItems:'center'
    },
    titulo: {
      alignSelf:'center',
      width:'70%',
      height:100,
      fontSize: 25,
      textAlign:'center'
      
    },
    subtitulo:{
      fontSize:14,
      fontWeight:'500',
      color:'white'
    },
    linha: {
      width: '100%',
      height: 2,
      backgroundColor: '#00b6ff',
      marginTop: 15,
    },
    textoDescricao: {
      width: '100%',
      textAlign: 'justify',
      color:'white'
    },
  });
export default style; 