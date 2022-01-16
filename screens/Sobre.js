import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import Constants from 'expo-constants';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';
import Modal from './Modal.js';

export default function Sobre(props){    

    const [showModal, setModal] = useState(false);

    const abrirModalContato = ()=>{
        setModal(!showModal)
    }

    let widthWindow = Dimensions.get('window').width - 30 - 40;
    let heightWindow = Dimensions.get('window').width - 30 - 20;

    return(
        <View style={{flex:1}}>
            {
                (showModal)
                ? <Modal showModal={showModal} setModal={setModal} />
                : <View/>
            }

            <View style={{padding:15, flex:1}}>
                <ScrollView contentContainerStyle={{padding:20}} style={styles.container}>
                    <Text style={styles.textTitle}>Sobre mim!</Text>

                    <View style={{alignItems:'center'}}>
                        <Image style={{width:widthWindow-70, height:heightWindow-70, marginTop:10}} source={{uri:'https://instagram.fbnu3-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/154818103_1321887554876940_6364661832833429516_n.jpg?tp=1&_nc_ht=instagram.fbnu3-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=O0khg11H2b4AX9iHby4&oh=65abdefebcae57b14b734a6f5cf60512&oe=6079441D'}} />
                    </View>

                    <View>
                        <Text style={styles.sobreNameText}>Nathan Train - Estudante</Text>
                        <Text style={styles.sobreText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sapien 
                            leo, scelerisque ac posuere eget, eleifend ac nulla. Aliquam erat 
                            volutpat. Integer mollis fringilla ipsum, sed fringilla metus finibus eu.  
                            Cras fermentum lorem sed justo sodales, in malesuada metus malesuada. Etiam 
                            facilisis, orci ac venenatis ullamcorper, libero tellus consectetur ipsum, 
                            quis tincidunt tellus risus at libero. Vivamus ullamcorper est ac eros 
                            consectetur iaculis. Nulla tincidunt lobortis nunc vel tincidunt. Quisque 
                            tincidunt magna sed turpis hendrerit pulvinar. Curabitur pellentesque nisi 
                            non velit elementum congue. Aenean vel metus turpis. Lorem ipsum dolor sit 
                            amet, consectetur adipiscing elit.
                        </Text>
                        
                        <TouchableOpacity onPress={()=>abrirModalContato()} style={styles.sobreContato}>
                            <Ionicons name='chatbox-sharp' size={29} color='#fff' style={{paddingTop:5}} />
                            <Text style={styles.sobreContatoText}>Entre em contato!</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flex:1, flexDirection:'row', justifyContent:'space-around'}}>
                        <TouchableOpacity onPress={()=>{props.navigation.navigate('Home')}} style={styles.endPageButtons} >
                            <Ionicons name='home-sharp' size={29} color='#fff' />
                            <Text style={styles.homeButtonText}>Home</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>{props.navigation.navigate('Portfolio')}} style={styles.endPageButtons} >
                            <Ionicons name='list' size={29} color='#fff' />
                            <Text style={styles.homeButtonText}>Portfólio</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      marginTop: Constants.statusBarHeight - 10,
      backgroundColor: 'white',
      borderRadius: 25,
    },
    textTitle:{
      color: '#62a',
      fontSize: 30,
      fontWeight:'bold',
      textAlign:'center',
      marginBottom:10,
    },
    textHeader:{
      color: '#62a',
      fontSize: 24,
    },
    homeButtonText:{
      color: '#fff',
      marginLeft:10,
    },
    endPageButtons:{
      backgroundColor: '#62a',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      padding:10,
      width:150,
      marginTop:15,
      borderRadius:10,
    },
    sobreText:{
      textAlign:'justify',
      fontSize:16,
      margin:10,
      marginBottom:5,
      color:'#000',
    },
    sobreNameText:{
      marginLeft:10,
      marginTop:10,
      fontSize:22,
      textAlign:'center',
      color:'#62a'
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
  })