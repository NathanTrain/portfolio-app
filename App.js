import * as React from 'react';
import { Dimensions, Image, LogBox } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';

import Home from './screens/Home.js';
import Sobre from './screens/Sobre.js';
import Portfolio from './screens/Portfolio.js'


// funções -> telas
function HomeScreen({navigation}) {
  return (
    <Home navigation={navigation} />
  );
}

function SobreScreen({navigation}) {
  return (
    <Sobre navigation={navigation} />
  );
}

function PortfolioScreen({navigation}) {

  const [images, setImages] = useState([
    {
      img: require('./resources/CoffeeCup.jpg'),
      width: 0,
      height: 0,
      ratio: 0,
      website:'https://www.coffee.com'
    },
    {
      img: require('./resources/waterCup.jpg'),
      width: 0,
      height: 0,
      ratio: 0,
      website:'https://www.water.com'
    }
  ])
  
  const [windowWidth, setWindowWidth] = useState(0);

  // roda só no inicio por causa dos [] no final
  useEffect(()=>{
    let windowWidthN = Dimensions.get('window').width;
    setWindowWidth(windowWidthN - 30 - 40);

    let newImages = images.filter((val)=>{
      let w = Image.resolveAssetSource(val.img).width;
      let h = Image.resolveAssetSource(val.img).height;

      val.width = w;
      val.height = h;
      val.ratio = h/w;

      return val;
    })
    setImages(newImages);
  }, [])

  return (
    <Portfolio navigation={navigation} images={images} windowWidth={windowWidth} />
  );
}

// constante para as tabs
const Tab = createBottomTabNavigator();

// app -> onde tem as tabs
export default function App() {
  LogBox.ignoreAllLogs();
  return (
    <NavigationContainer style={{ paddingTop: Constants.statusBarHeight }} >
      <StatusBar style='dark' />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
                ? 'home-sharp'
                : 'home-outline';
            } else if (route.name === 'Sobre') {
              iconName = focused
                ? 'information-circle-sharp'
                : 'information-circle-outline';
            } else if (route.name === 'Portfolio') {
              iconName = 'list';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#62a',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Sobre" component={SobreScreen} />
        <Tab.Screen name="Portfolio" component={PortfolioScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
