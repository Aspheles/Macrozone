import { clearAllMeals, getMeals, MealData } from '@/storage/meals';
import { useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';

const useGetMeals = () => {
  const [meals, setMeals] = useState<MealData[]>([]);

  const loadMeals = async () => {
    const data = await getMeals();
    setMeals(data);
  };

  const handleClearAllMeals = async () => {
    await clearAllMeals();
    loadMeals();
  };

  useFocusEffect(
    useCallback(() => {
      loadMeals();
    }, []),
  );

  return { meals, loadMeals, handleClearAllMeals };
};

export default useGetMeals;
