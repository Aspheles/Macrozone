import { REMINDERS_KEY } from '@/constant';
import {
  cancelMealReminders,
  requestPermission,
  scheduleMealReminders,
} from '@/util/notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

const useGetMacroGoals = () => {
  const [macros, setMacros] = useState({});

  
};

export default useGetMacroGoals;
