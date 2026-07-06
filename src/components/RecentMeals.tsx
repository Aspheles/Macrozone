import { MealData } from '@/storage/meals';
import { globalStyles } from '@/style/globals';
import { Text, View } from 'react-native';
import MealItem from './MealItem';

type recentMealsProps = {
  meals: MealData[];
  amountToDisplay: number;
  onDelete: () => void;
};

const RecentMeals = (props: recentMealsProps) => {
  const { amountToDisplay, meals, onDelete } = props;
  return (
    <View style={{ marginTop: 30 }}>
      <Text style={globalStyles.sectionTitle}>Recent Meals</Text>

      {meals.slice(0, amountToDisplay).map((meal) => (
        <MealItem
          id={meal.id}
          key={meal.id}
          name={meal.meal.name}
          protein={meal.meal.protein}
          calories={meal.meal.calories}
          carbs={meal.meal.carbs}
          fat={meal.meal.fat}
          onDelete={onDelete}
        />
      ))}
    </View>
  );
};

export default RecentMeals;
