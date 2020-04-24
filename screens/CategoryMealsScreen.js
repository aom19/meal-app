import React from 'react';
import { StyleSheet} from 'react-native'
 
import { CATEGORIES ,MEALS} from '../data/dummy-data';
import Colors from '../constants/Colors'
import MealList from '../components/MealList';


const CategoryMealsScreen = props => {
    const catId = props.navigation.getParam('categoryId');

    const displayedMeals = MEALS.filter(
        meal => meal.categodyIds.indexOf(catId) >= 0 
    );

    
    return(
        <MealList 
            listData ={displayedMeals}
            navigation={props.navigation}
        />
        
    );
}

CategoryMealsScreen.navigationOptions = navigationData => {

   const catId =  navigationData.navigation.getParam('categoryId');
   const selectedCategory = CATEGORIES.find(cat => cat.id === catId)
   
   return{
       headerTitle : selectedCategory.title,
      
    };
};

const styles = StyleSheet.create({
   

})

export default CategoryMealsScreen;