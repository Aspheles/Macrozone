import { removeMeal } from '@/storage/meals';
import { globalStyles } from '@/style/globals';
import { MealItemProps } from '@/types';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const MealItem = (props: MealItemProps) => {
  const { id, name, calories, protein, carbs, fat, onDelete } = props;

  const handleDeletePress = () => {
    if (!id) return;
    Alert.alert('Delete Meal', `Are you sure you want to delete "${name}"?`, [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          await removeMeal(id);
          onDelete();
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        },
      },
    ]);
  };

  return (
    <View style={[styles.container, globalStyles.boxWithShadow]}>
      <Text style={styles.name}>{name}</Text>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <Text style={styles.macros}>
          {' '}
          {calories} cal • {protein}g P • {carbs}g C • {fat}g F{' '}
        </Text>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={handleDeletePress}
        >
          <Text style={styles.deleteButtonText}>
            <Ionicons name='trash' size={25} color={'white'} />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#16213e',
    borderRadius: 10,
    padding: 16,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
  macros: {
    fontSize: 13,
    color: '#a0a0b0',
    marginTop: 4,
    width: '90%',
  },
  deleteButton: {
    marginTop: 8,

    width: '10%',
  },
  deleteButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MealItem;
