import React from 'react';
import {  StyleSheet , View , Text} from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderButtons , Item} from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';
import { Colors } from "../constants/Colors";
import { MEALS } from '../data/dummy-data';
import DefaultText from "../components/DefaultText";


const FavoritesScreen = props => {
    const favMeals = useSelector(state => state.meals.favoriteMeals);

    if(favMeals.length === 0 || !favMeals){
        return (
            <View style ={styles.content}> 
                <DefaultText>No favorite meals found. Start adding some! </DefaultText> 
            </View>
        );
    };
    
    return(
        <MealList 
            listData = {favMeals}
            navigation= {props.navigation}
        />
    );
}
FavoritesScreen.navigationOptions = (navData) =>{
    return{
        headerTitle : 'Your Favorites',
        headerLeft : () => 
            <HeaderButtons  HeaderButtonComponent = {HeaderButton} >
            <Item 
                title= "Menu"
                iconName = 'ios-menu'
                onPress = {() =>{
                navData.navigation.toggleDrawer();
                }}
            />
            </HeaderButtons>
        ,
        headerStyle: {
            backgroundColor: Platform.OS === 'ios' ? '#1F2025' : '#1F2025'
        },
        headerTintColor  : 'white'
    }   
}




const styles = StyleSheet.create({
    screen :{
        flex:1,
        alignItems :'center',
        justifyContent :'center'
    },
    content:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default FavoritesScreen;

