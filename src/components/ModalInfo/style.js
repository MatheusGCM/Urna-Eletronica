import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#40E0D0',
  },
  header:{
    height:100,
    alignItems: 'center',
    justifyContent:'center'
  },
  textHeader:{
    fontSize:20,
    fontWeight:'800',
    color:'white'
  },
  botaoVoltar:{
    position:'absolute',
    alignSelf:'flex-end',
    top: 10,
    right:8
  },
  container: {
    width: '100%',
    height: 140,
    backgroundColor: '#F3F3F3',
    marginVertical: 5,
    flexDirection:'row',
    borderRadius:10,
    borderWidth:1,
    borderColor:'#111',
    flexWrap:'wrap'
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
    fontWeight:'700'
  }
});
export default style;
