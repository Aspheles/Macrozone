import { REMINDERS_KEY } from '@/constant';
import {
  cancelMealReminders,
  requestPermission,
  scheduleMealReminders,
} from '@/util/notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

const useGetReminders = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const load = async () => {
      const val = await AsyncStorage.getItem(REMINDERS_KEY);
      setEnabled(val === 'true');
    };

    load();
  });

  const toggle = async (value: boolean) => {
    if (value) {
      const granted = await requestPermission();

      if (!granted) return;

      await scheduleMealReminders();
    } else {
      await cancelMealReminders();
    }

    setEnabled(value);
    await AsyncStorage.setItem(REMINDERS_KEY, value.toString());
  };

  return { enabled, toggle };
};

export default useGetReminders;
