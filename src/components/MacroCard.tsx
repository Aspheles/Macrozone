import { colors, globalStyles } from '@/style/globals';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

type MacroCardProps = {
  label: string;
  value: string;
  goal: string;
  color: string;
};

const MacroCard = (props: MacroCardProps) => {
  const { label, value, goal, color } = props;
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Modal animationType='fade' visible={modalVisible}>
        <View style={globalStyles.container}>
          <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
            <TouchableOpacity onPress={() => setModalVisible((prev) => !prev)}>
              <Ionicons name='arrow-back-circle' size={30} color={'white'} />
            </TouchableOpacity>
            <Text style={globalStyles.title}>{`Edit ${label} Goal`}</Text>
          </View>

          <TextInput
            style={styles.input}
            placeholder='Meal name'
            placeholderTextColor={colors.textSecondary}
            value={goal.replace(/[g.]/g, '')}
            keyboardType='default'
          />

          <TouchableOpacity
            style={styles.saveButton}
            onPress={() => {
              setModalVisible((prev) => !prev);
            }}
          >
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <TouchableOpacity
        onPress={() => setModalVisible((prev) => !prev)}
        style={[
          styles.card,
          { borderLeftColor: color },
          globalStyles.boxWithShadow,
        ]}
      >
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
        <Text style={styles.goal}>{goal}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#16213e',
    borderRadius: 12,
    padding: 16,
    width: '47%',
    borderLeftWidth: 4,
  },
  label: {
    fontSize: 14,
    color: '#a0a0b0',
  },
  value: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffff',
    marginTop: 4,
  },
  goal: {
    fontSize: 14,
    color: '#a0a0b0',
    marginTop: 2,
  },
  input: {
    backgroundColor: colors.surface,
    color: colors.text,
    padding: 16,
    borderRadius: 10,
    fontSize: 16,
    marginTop: 16,
  },
  saveButton: {
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

export default MacroCard;
