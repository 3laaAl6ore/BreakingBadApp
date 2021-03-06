import React from 'react';
import {createStackNavigator } from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
// screnns 
//Characters
import CharacterScreen ,{screenOptions as CharacterScreenOptions }from '../screens/Characters/index';
import CharacterDetalisScreen ,{screenOptions as CharacterDetalisScreenOptions }from '../screens/Characters/characterDetalis';

// Episodes
import EpisodesScreen ,{screenOptions as EpisodesScreenOptions }from '../screens/Episodes/index';
import EpisodesDetalisScreen ,{screenOptions as EpisodesDetalisScreenOptions }from '../screens/Episodes/EpisodeDetalis';

// Quotes
import QuotesScreen ,{screenOptions as QuotesScreenOptions }from '../screens/Quotes/index';

// Create Const For Each Stack

const CharacterStackNavigator = createStackNavigator();

export const CharacterStack = ()=>{
    return(
        <CharacterStackNavigator.Navigator>

            <CharacterStackNavigator.Screen name='index' component={CharacterScreen} options={CharacterScreenOptions}/>

            <CharacterStackNavigator.Screen name='characterDetalis' component={CharacterDetalisScreen} options={CharacterDetalisScreenOptions}/>
         </CharacterStackNavigator.Navigator>)
}

const EpisodesStackNavigator = createStackNavigator();

export const  EpisodesStack = ()=>{
    return(
        <EpisodesStackNavigator.Navigator>
            <EpisodesStackNavigator.Screen name='index' component={EpisodesScreen} options={EpisodesScreenOptions} />
            <EpisodesStackNavigator.Screen name='EpisodesDetalis' component={EpisodesDetalisScreen} options={EpisodesDetalisScreenOptions}/>
        </EpisodesStackNavigator.Navigator>
    )
}

const QoutesStackNavigator =  createStackNavigator();

export const QoutesStack = ()=>{
    return(
            <QoutesStackNavigator.Navigator>
                <QoutesStackNavigator.Screen name='index' component={QuotesScreen} options={QuotesScreenOptions}/>
            </QoutesStackNavigator.Navigator>
    )
}

// create - Create Bottom Bar
const AppBottomBarNavigator = createMaterialBottomTabNavigator();

export const AppBottomBar = ()=>{
    return(
        <AppBottomBarNavigator.Navigator 
     
     // to effect all taps
        activeColor={'#ffffff'} inactiveColor={'black'}
        barStyle=
        {
            {
                backgroundColor:'#6A8FBF'
            }
        }
        
        >
            <AppBottomBarNavigator.Screen 
            name='Characters' 
            component = {CharacterStack} 
            options=
            {
                {
                    tabBarLabel :'Characters',
                    tabBarIcon:({focused ,color,size}) =>
                    {
                        const iconSize = focused  ?  size=29: size = 26
                        const iconcColor = focused  ? color='white':color='black'
                        const iconShape = focused  ? name='account-group-outline':name='account-group'
                        return(
                        <MaterialCommunityIcons name={iconShape} color={iconcColor} size ={iconSize}/>
                        )
                    }
                }
            }
            />

            <AppBottomBarNavigator.Screen 
            name='Episodes' 
            component = {EpisodesStack}            
            options=
            {
                {
                    tabBarLabel :'Episodes',
                    tabBarIcon:({focused,color,size}) =>
                    {
                        const iconSize = focused ?  size=25: size = 25
                        const iconcColor = focused ? color='white':color='black'
                        const iconShape = focused ? name = 'screen-desktop':name = 'screen-desktop'
                        return(
                        <SimpleLineIcons name={iconShape} color={iconcColor} size ={iconSize}/>
                        )
                    }
                }
            }
            />
            <AppBottomBarNavigator.Screen 
            name='Qoutes' 
            component = {QoutesStack}
            options=
            {
                {
                    tabBarLabel :'Qoutes',
                    tabBarIcon:({focused,color,size}) =>
                    {
                        const iconSize = focused ?  size=27: size = 26
                        const iconcColor = focused ? color='white':color='black'
                        const iconShape = focused ? name = 'quote':name = 'quote'
                        return(
                        <Entypo name={iconShape} color={iconcColor} size ={iconSize}/>
                        )
                    }
                }
            }
            />
            </AppBottomBarNavigator.Navigator>
    )
}






