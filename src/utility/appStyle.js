import { StyleSheet } from 'react-native';

export default  StyleSheet.create({
container: {
flex: 1,
alignItems: 'center',
justifyContent: 'center',
backgroundColor:'white',
},
Logo:{
    width:'100%',
    height:'100%',
},
FlatListCharactersStyle:{
    backgroundColor:'#fff',
    margin:5,
    borderRadius:30,
    width:'100%',
    height:'100%',
    flexDirection:'row',
    shadowRadius:10,
    alignItems:'center',
},
CharacterName:{
    fontWeight:'bold',
    fontSize:18,
    width: 150,
    color:'green',
},
CharacterImg:{
    resizeMode: 'contain',
    height: 150,
    width: 150,
    borderRadius:25
},
nicknameStyle:{
    fontSize:12
}
});