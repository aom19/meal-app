import React from 'react';
import {  StyleSheet} from 'react-native';
import { HeaderButtons , Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';
import { Colors } from "../constants/Colors";
import { MEALS } from '../data/dummy-data';


const FavoritesScreen = props => {
    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')
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
        headerLeft :
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
    }
})

export default FavoritesScreen;

