import useGetReminders from '@/hooks/useGetReminders';
import { colors } from '@/style/globals';
import { StyleSheet, Switch, Text, View } from 'react-native';

const ReminderToggle = () => {
  const { enabled, toggle } = useGetReminders();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Meal reminders</Text>
      <Switch
        value={enabled}
        onValueChange={toggle}
        trackColor={{ false: colors.surface, true: colors.primary }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  label: {
    color: colors.text,
    fontSize: 16,
    fontWeight: 500,
  },
});

export default ReminderToggle;
