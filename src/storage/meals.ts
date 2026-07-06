import { MealItemProps } from '@/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type MealData = {
  id: string;
  meal: MealItemProps;
  createdAt: string;
};

const MEALS_KEY = 'meals';

export const getMeals = async (): Promise<MealData[]> => {
  const data = await AsyncStorage.getItem(MEALS_KEY);
  return data ? JSON.parse(data) : [];
};

export const addMeal = async (
  meal: Omit<MealData, 'id' | 'createdAt'>,
): Promise<MealData> => {
  const meals = await getMeals();
  const newMeal: MealData = {
    ...meal,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  };

  await AsyncStorage.setItem(MEALS_KEY, JSON.stringify([newMeal, ...meals]));

  return newMeal;
};

export const removeMeal = async (id: string) => {
  const meal = await getMeals();
  const filtered = meal.filter((meal) => meal.id !== id);

  await AsyncStorage.setItem(MEALS_KEY, JSON.stringify(filtered));
};

export const clearAllMeals = async (): Promise<void> => {
  AsyncStorage.removeItem(MEALS_KEY);
};
