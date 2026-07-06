import { addMeal } from '@/storage/meals';
import { colors, globalStyles } from '@/style/globals';
import { MealItemProps } from '@/types';
import { router } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { cleanupMacroText } from '@/util';
import * as Haptics from 'expo-haptics';

type MealFormProps = {
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
};

const AddMealScreen = () => {
  const [formData, setFormData] = useState<MealFormProps>({
    name: '',
    calories: 0,
    carbs: 0,
    fat: 0,
    protein: 0,
  });

  const handleAddMeal = async () => {
    if (!formData.name || !formData.calories) {
      Alert.alert('Error', 'Please enter a meal name and calories');
      return;
    }

    await addMeal({
      meal: {
        id: '',
        name: formData.name,
        calories: Number(formData.calories),
        protein: Number(formData.protein),
        carbs: Number(formData.carbs),
        fat: Number(formData.fat),
        onDelete: () => {},
      },
    });

    setFormData({
      name: '',
      calories: 0,
      carbs: 0,
      fat: 0,
      protein: 0,
    });

    // Alert.alert('Success', 'Meal added succesfully!');
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    router.push('/');
  };

  const updateField = <K extends keyof MealItemProps>(
    field: K,
    value: MealItemProps[K],
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Add Meal</Text>

      <TextInput
        style={styles.input}
        placeholder='Meal name'
        placeholderTextColor={colors.textSecondary}
        value={formData.name}
        keyboardType='default'
        onChangeText={(text) => updateField('name', text)}
      />

      <TextInput
        style={styles.input}
        placeholder='Calories'
        keyboardType='numeric'
        placeholderTextColor={colors.textSecondary}
        maxLength={5}
        value={
          formData.calories === 0 ? '' : cleanupMacroText(formData.calories)
        }
        onChangeText={(text) => updateField('calories', Number(text))}
      />

      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.rowInput]}
          placeholder='Protein (g)'
          placeholderTextColor={colors.textSecondary}
          maxLength={5}
          keyboardType='numeric'
          value={
            formData.protein === 0 ? '' : cleanupMacroText(formData.protein)
          }
          onChangeText={(text) => updateField('protein', Number(text))}
        />

        <TextInput
          style={[styles.input, styles.rowInput]}
          placeholder='Carbs (g)'
          placeholderTextColor={colors.textSecondary}
          maxLength={5}
          keyboardType='numeric'
          value={formData.carbs === 0 ? '' : cleanupMacroText(formData.carbs)}
          onChangeText={(text) => updateField('carbs', Number(text))}
        />

        <TextInput
          style={[styles.input, styles.rowInput]}
          placeholder='Fat (g)'
          placeholderTextColor={colors.textSecondary}
          maxLength={5}
          keyboardType='numeric'
          value={formData.fat === 0 ? '' : cleanupMacroText(formData.fat)}
          onChangeText={(text) => updateField('fat', Number(text))}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleAddMeal}>
        <Text style={styles.buttonText}>Add Meal</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddMealScreen;

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.surface,
    color: colors.text,
    padding: 16,
    borderRadius: 10,
    fontSize: 16,
    marginTop: 16,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
  },
  rowInput: {
    flex: 1,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 24,
  },
  buttonText: {
    color: colors.background,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
