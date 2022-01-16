import * as React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Home(props){
    return(
        <View style={{ padding:15, flex:1 }}>
        <ScrollView contentContainerStyle={{padding:20}} style={styles.container} >
            <View style={{marginBottom:5}} >
            <Text style={styles.textTitle} >Bem-vindo ao meu portfólio!</Text>
            <Text style={styles.textHeader} >Para onde deseja navegar?</Text>
            </View>

            <View>
            <TouchableOpacity onPress={()=>{props.navigation.navigate('Home')}} style={styles.homeButtonNav} >
                <Ionicons name='home-sharp' size={29} color='#fff' />
                <Text style={styles.homeButtonText}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{props.navigation.navigate('Sobre')}} style={styles.homeButtonNav} >
                <Ionicons name='information-circle-sharp' size={29} color='#fff' />
                <Text style={styles.homeButtonText}>Sobre</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{props.navigation.navigate('Portfolio')}} style={styles.homeButtonNav} >
                <Ionicons name='list' size={29} color='#fff' />
                <Text style={styles.homeButtonText}>Portifólio</Text>
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
    homeButtonNav:{
      backgroundColor: '#62a',
      padding:20,
      marginTop:15,
      flexDirection:'row',
      alignItems:'center'
    },
    homeButtonText:{
      color: '#fff',
      marginLeft:10,
    },
  })