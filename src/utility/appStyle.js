import { StyleSheet } from 'react-native';


export default  StyleSheet.create({
 container: {
flex: 1,
justifyContent: 'center',
backgroundColor:'#DCD0D0',
},
Logo:{
    width:'60%',
    height:'100%',
    backgroundColor:'white'
    
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
    margin:3,
    borderRadius:18,
    width:'100%',
    flexDirection:'row',
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
    width: 140,
    borderRadius:25,
 //   backgroundColor:'blue',
    
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