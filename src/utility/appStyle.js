import { StyleSheet } from 'react-native';

export default  StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
backgroundColor:'white',
},
Logo:{
    width:'60%',
    height:'100%',
    
},
FlatListCharactersStyle:{
    backgroundColor:'#fff',
    margin:5,
    borderRadius:30,
    width:'100%',
    flexDirection:'row',
    shadowRadius:10,
    alignItems:'center',
},
FlatListEpisodeStyle:{
    backgroundColor:'#fff',
    margin:8,
    borderRadius:30,
    width:'100%',
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
},
quote:{
    fontSize:16,
    fontWeight: 'bold',
    color:'green',
},
FlatListQuoteStyle:{
    borderRadius:30,
    width:'100%',
    shadowRadius:10,
    borderBottomColor:'black',
    borderBottomWidth:1
}
    
});