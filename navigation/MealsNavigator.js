import React from 'react';
import { createStackNavigator  } from 'react-navigation-stack';
import { createAppContainer  } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import { Ionicons }from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer';
 
import Colors from '../constants/Colors'
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealsDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen'
import FiltersScreen from '../screens/FiltersScreen'


const defaultStackNavOptions = {
    defaultNavigationOptions :{
        headerStyle: {
            backgroundColor: Platform.OS === 'ios' ? '#1F2025' : ''
        },
        headerTitleStyle :{
            fontFamily: 'open-sans-bold',

        },
        headerBackTitleStyle:{
            fontFamily:'open-sans'
        },
        headerTintColor  : 'white'
    }
}


const MealsNavigator = createStackNavigator({
    Categories    : {
        screen : CategoriesScreen,
        navigationOptions:{
            headerTitle: 'Meal Categories',
            headerStyle: {
                backgroundColor: Platform.OS === 'ios' ? '#1F2025' : Colors.primaryColor
            },
            headerTintColor  : 'white'
        }
    },
    CategoryMeals : {
        screen :CategoryMealsScreen,
        
    },
    MealDetail:{
        screen :MealsDetailScreen
    } 
},
{
    defaultNavigationOptions : defaultStackNavOptions
});

const FavNavigator = createStackNavigator({ 
    Favorites : {
        screen  :FavoritesScreen,
    } ,
    MealDetail : MealsDetailScreen,
},{
    defaultNavigationOptions : defaultStackNavOptions
});


const tabScreenConfig = {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
          );
        },
        tabBarColor: Colors.primaryColor,

      }
    },
    Favorites: {
      screen: FavNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
        },
        tabBarColor: Colors.accentColor
      }
    }
  };
  
const MealsFavTabNavigator =
    Platform.OS === 'android'
        ? createMaterialBottomTabNavigator(tabScreenConfig, {
            activeTintColor: 'white',
            shifting: true,
            barStyle: {
                backgroundColor: Colors.primaryColor
            }
        })
        : createBottomTabNavigator(tabScreenConfig, {
            tabBarOptions: {
                labelStyle:{
                    fontFamily :'open-sans-bold'
                },
                activeTintColor: Colors.accentColor
            }
        });

 const FilstersNavigator = createStackNavigator({
    Filters : FiltersScreen
 },{
    navigationOptions: {
        drawerLabel : 'Filters!'
    },
    defaultNavigationOptions : defaultStackNavOptions
});

const MainNavigator = createDrawerNavigator({
    MealsFavs: {
        screen :MealsFavTabNavigator ,
        navigationOptions:{
            drawerLabel: 'Meals'
        }
    },
    Filters : FilstersNavigator
},{
    contentOptions:{
        activeTintColor: Colors.accentColor,
        labelStyle :{
            fontFamily : 'open-sans-bold',
            fontSize :16
        }
    }
})
  
  export default createAppContainer(MainNavigator);
  