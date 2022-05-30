import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
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
  image: {
    resizeMode: 'contain',
    width: 350,
    height: 180,
  },
  boxTitulo: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 10,
  },
  titulo: {
    alignSelf: 'center',
    width: '70%',
    fontSize: 25,
    fontWeight: '900',
    textAlign: 'center',
    color: 'white',
    marginBottom: 30,
  },
  subtitulo: {
    fontSize: 14,
    fontWeight: '700',
    backgroundColor: 'white',
    color: 'rgba(0,0,0, 0.4)',
    padding: 5,
    borderRadius: 5,
    marginBottom: 10,
  },
  boxTexto: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
  },
  textoDescricao: {
    width: '100%',
    textAlign: 'center',
    color: '#229a00',
    fontSize: 18,
    fontWeight: '900',
    fontStyle: 'italic',
    marginBottom: 10,
  },
  logos: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
export default style;
