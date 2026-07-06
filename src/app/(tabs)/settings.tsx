import ReminderToggle from '@/components/ReminderToggle';
import { globalStyles } from '@/style/globals';
import { Text, View } from 'react-native';

const SettingsScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Settings</Text>

      <ReminderToggle />
    </View>
  );
};

export default SettingsScreen;
