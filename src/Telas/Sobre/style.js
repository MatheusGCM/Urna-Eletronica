import {StyleSheet} from 'react-native';
const style = StyleSheet.create({
  background: {
      width: '100%',
      height: '100%',
      backgroundColor: '#E3D4D0',
      alignItems: 'center',
    },
    containerCima: {
      width: '100%',
      height: '50%',
      alignItems:'center',
      justifyContent:'center'
    },
    boxImage: {
      width: '90%',
      height: '40%',
      borderWidth: 1,
      
      alignItems: 'center',
      justifyContent: 'center',
    },
    boxTitulos: {
      width: '100%',
      height: '50%',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    linha: {
      width: '100%',
      borderBottomWidth: 4,
      borderBottomColor: '#478F0F',
      marginTop: 15,
    },
    Titulo: {
      marginHorizontal: 20,
      fontSize: 20,
      alignSelf: 'flex-start',
      fontWeight: '700',
    },
    containerBaixo: {
      width: '100%',
      height:'50%',
      flexWrap: 'wrap',
      alignItems: 'center',
    },
    boxCriadores:{
      width:'100%',
      height:'80%',
      alignItems:'flex-start',
      paddingHorizontal: 20,
    },
    textoDescricao: {
      width: '100%',
      textAlign:'justify',
      fontSize: 20,
      fontWeight: '800',
    },
    textCriador: {
      textAlign:'justify',
      marginVertical:5,
      fontSize: 15,
      fontWeight: '700',
    },
    logo:{
      width:'100%',
      height:'20%',
      flexDirection:'row',
      justifyContent:'space-evenly',
    }
  });

export default style;