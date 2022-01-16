import * as React from 'react';
import Constants from 'expo-constants';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as WebBrowser from 'expo-web-browser';

export default function Portfolio(props){
    
    const abrirNavegador = async(website)=>{
        let result = await WebBrowser.openBrowserAsync(website);
    }

    return(
        <View style={{padding:15, flex:1}}>
            <ScrollView contentContainerStyle={{padding:20}} style={styles.container} >
                <View>
                    <Text style={styles.textTitle}>Portfólio</Text>
                    <Text style={styles.textHeader}>Últimos projetos:</Text>
                </View>

                { // aparecer as imagens
                    props.images.map((val)=>{
                    return(
                        <View style={styles.parentImage} >
                            <Image
                                source={val.img}
                                style={{
                                width:props.windowWidth,
                                height:props.windowWidth*val.ratio,
                                resizeMode:'stretch'}}/>
                            <TouchableOpacity onPress={()=>abrirNavegador(val.website)} style={styles.portBtnOpenNav} >
                                <Text style={{color:'#fff', textAlign:'center', fontSize:18}}>Abrir no navegador</Text>
                            </TouchableOpacity>
                        </View>
                    )
                    })
                }
                
                <View style={{flex:1, flexDirection:'row', justifyContent:'space-around'}}>
                    <TouchableOpacity onPress={()=>{props.navigation.navigate('Home')}} style={styles.endPageButtons} >
                        <Ionicons name='home-sharp' size={29} color='#fff' />
                        <Text style={styles.homeButtonText}>Home</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>{props.navigation.navigate('Sobre')}} style={styles.endPageButtons} >
                        <Ionicons name='information-circle-sharp' size={29} color='#fff' />
                        <Text style={styles.homeButtonText}>Sobre</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
    parentImage:{
      marginTop:20,
    },
    portBtnOpenNav:{
      padding:10,
      backgroundColor:'#519',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
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
    }
  })