import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  background: {
    width:'100%',
    height:'100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#DCDCDC',
  },
  header:{
    height:100,
    alignItems: 'center',
    justifyContent:'center'
  },
  textHeader:{
    fontSize:20,
    fontWeight:'800',
    color:'black'
  },
  botaoVoltar:{
    position:'absolute',
    alignSelf:'flex-end',
    top: 10,
    right:8
  },
  container: {
    width: '98%',
    height: 160,
    backgroundColor: '#FFF',
    marginVertical: 5,
    flexDirection:'row',
    borderRadius:10,
    borderRightWidth:3,
    borderBottomWidth:2,
    borderColor:'#111',
    flexWrap:'wrap',
    alignSelf:'center',
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOpacity: 0.1,
    elevation: 8,
    shadowOffset: {
      width: 10,
      height: 10,
    },
  },
  foto:{
    height:'100%',
    width:'30%',
    alignItems:'center',
    justifyContent:'space-evenly',
    borderRadius:15
  },
  dados:{
    height:'100%',
    width:'70%',
    alignItems:'flex-start',
    justifyContent:'space-evenly',
    paddingLeft:10
  },
  textDados:{
    fontWeight:'700',
    color:'black'
  }
});
export default style;
