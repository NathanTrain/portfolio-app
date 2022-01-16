import * as React from 'react';
import {useState} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Constants from 'expo-constants';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {db} from '../firebase.js'

export default function Modal(props){

    const [nome, setNome] = useState('');
    const [msg, setMsg] = useState('');

    const enviarMsg = ()=>{
        db.collection('contato').add({
            nome: nome,
            mensagem: msg
        })

        alert('sua msg foi enviada');

        setNome('');
        setMsg('');

        props.setModal(!props.showModal);
    }

    return(
        <View style={styles.modalParent}>
            <View style={styles.modalClose}>
                <TouchableOpacity onPress={()=>props.setModal(!props.showModal)} style={{justifyContent:'center', alignItems:'center'}} >
                <Ionicons name='close' size={50} color='#519' />
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.boxModal}>
                <Text style={{...styles.textHeader, fontSize:15, marginBottom:10}}>Qual seu nome?</Text>
                <TextInput value={nome} onChangeText={(text)=>setNome(text)}
                    style={styles.textInput} multiline numberOfLines={4} textAlignVertical='top' />

                <Text style={{...styles.textHeader, fontSize:15, marginBottom:10}}>Qual sua mensagem?</Text>
                <TextInput value={msg} onChangeText={(text)=>setMsg(text)} 
                style={{...styles.textInput, height:150}} multiline numberOfLines={8} textAlignVertical='top' />
                
                {
                    (nome && msg != '')?
                    <TouchableOpacity onPress={()=>enviarMsg()} style={styles.sobreContato}>
                        <Text style={{...styles.sobreContatoText, marginLeft:0}}>Enviar</Text>
                    </TouchableOpacity>
                    :
                    <View style={{...styles.sobreContato, backgroundColor:'#aaa'}}>
                        <Text style={{...styles.sobreContatoText, marginLeft:0}}>Enviar</Text>
                    </View>
                }

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    textHeader:{
      color: '#62a',
      fontSize: 24,
    },
    sobreContato:{
      margin:10,
      marginBottom:0,
      backgroundColor:'#62a',
      padding:10,
      borderRadius:10,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center'
    },
    sobreContatoText:{
      color:'#fff',
      fontSize:18,
      marginLeft:10,
    },
    modalParent:{
      position:'absolute',
      left:0, top:0,
      width: '100%', height:'100%',
      backgroundColor: '#0006',
      zIndex:1,
    },
    modalClose:{
      marginTop:Constants.statusBarHeight,
      maxHeight:55, maxWidth:55,
      position:'absolute',
      right:0, top:0,
      marginRight:20,
      zIndex:2,
    },
    boxModal:{
      backgroundColor:'#fff',
      height:350,
      width:'80%',
      position:'absolute',
      alignSelf:'center',
      marginTop:'50%',
      padding:20,
      borderRadius:25,
    },
    textInput:{
      height:40, width:'100%',
      borderColor:'#ccc', borderWidth:1,
      marginBottom:10,
      padding:10,
    },
})