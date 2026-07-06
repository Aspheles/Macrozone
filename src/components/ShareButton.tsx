import { MealData } from '@/storage/meals';
import { colors } from '@/style/globals';
import { Ionicons } from '@expo/vector-icons';
import { Share, TouchableOpacity } from 'react-native';

type ShareButtonProps = {
  meals: MealData[];
};

export default function ShareButton({ meals }: ShareButtonProps) {
  const handleShare = async () => {
    const totals = meals.reduce(
      (acc, meal) => ({
        calories: acc.calories + meal.meal.calories,
        protein: acc.protein + meal.meal.protein,
        carbs: acc.carbs + meal.meal.carbs,
        fat: acc.fat + meal.meal.fat,
      }),
      { calories: 0, protein: 0, carbs: 0, fat: 0 },
    );

    await Share.share({
      message: `MacroZone Daily Summary\n\nCalories: ${totals.calories}\nProtein: ${totals.protein}g\nCarbs: ${totals.carbs}g\nFat: ${totals.fat}g\n\nMeals: ${meals.length} logged today`,
    });
  };

  return (
    <TouchableOpacity onPress={handleShare}>
      <Ionicons name='share-outline' size={24} color={colors.primary} />
    </TouchableOpacity>
  );
}
