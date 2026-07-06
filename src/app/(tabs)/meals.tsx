import MealItem from '@/components/MealItem';
import useGetMeals from '@/hooks/useGetMeals';
import { globalStyles } from '@/style/globals';
import { Ionicons } from '@expo/vector-icons';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const MealsScreen = () => {
  const { meals, loadMeals, handleClearAllMeals } = useGetMeals();

  const handleClearAll = () => {
    Alert.alert('Delete Meal', `Are you sure you want to clear your meals?`, [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          handleClearAllMeals();
        },
      },
    ]);
  };

  return (
    <ScrollView style={globalStyles.container}>
      <Text style={[globalStyles.title, { marginBottom: 16 }]}>All Meals</Text>

      {meals.length > 0 ? (
        <>
          <TouchableOpacity onPress={handleClearAll}>
            <Text style={style.clearButton}>
              Clear All <Ionicons size={20} color={'white'} name='trash' />
            </Text>
          </TouchableOpacity>
          {meals.map((meal) => (
            <MealItem
              id={meal.id}
              key={meal.id}
              name={meal.meal.name}
              protein={meal.meal.protein}
              calories={meal.meal.calories}
              carbs={meal.meal.carbs}
              fat={meal.meal.fat}
              onDelete={loadMeals}
            />
          ))}
        </>
      ) : (
        <Text style={style.mealText}>No Meals available</Text>
      )}
    </ScrollView>
  );
};

const style = StyleSheet.create({
  mealText: {
    fontSize: 20,
    color: '#ffff',
    marginTop: 16,
  },
  clearButton: {
    color: '#ffff',
    fontSize: 16,
    width: 100,
    marginBottom: 12,
    fontWeight: '500',
  },
});

export default MealsScreen;
