import {StyleSheet} from 'react-native';
const style = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.8)',
    alignItems: 'center',
  },
  containerCima: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxImage: {
    width: '100%',
    height: '40%',
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
    color: '#fff',
  },
  containerBaixo: {
    width: '100%',
    height: '50%',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  boxCriadores: {
    width: '100%',
    height: '80%',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  textoDescricao: {
    width: '100%',
    textAlign: 'justify',
    fontSize: 22,
    fontWeight: '900',
    color: '#fff',
  },
  textCriador: {
    textAlign: 'justify',
    marginVertical: 5,
    fontSize: 17,
    fontWeight: '400',
    fontStyle: 'italic',
    color: 'rgba(255,255,255,0.6)',
  },
  logo: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default style;
