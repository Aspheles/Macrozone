import { MealData } from '@/storage/meals';
import { StyleSheet, View } from 'react-native';
import MacroCard from './MacroCard';

type macroGridProps = {
  meals: MealData[];
};

const MacroGrid = (props: macroGridProps) => {
  const { meals } = props;
  const totals = meals.reduce(
    (acc, currentMeal) => ({
      calories: acc.calories + currentMeal.meal.calories,
      protein: acc.protein + currentMeal.meal.protein,
      carbs: acc.carbs + currentMeal.meal.carbs,
      fat: acc.fat + currentMeal.meal.fat,
    }),
    { calories: 0, protein: 0, carbs: 0, fat: 0 },
  );
  return (
    <View style={styles.grid}>
      <MacroCard
        label='Calories'
        value={totals.calories.toString()}
        goal='2.000'
        color='#ff6b6b'
      />

      <MacroCard
        label='Protein'
        value={totals.protein.toString()}
        goal='150g'
        color='#4ecdc4'
      />
      <MacroCard
        label='Carbs'
        value={totals.carbs.toString()}
        goal='250g'
        color='#ffd93d'
      />
      <MacroCard
        label='Fat'
        value={totals.fat.toString()}
        goal='65g'
        color='#6bcb77'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
});

export default MacroGrid;
