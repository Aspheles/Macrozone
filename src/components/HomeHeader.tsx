import { colors, globalStyles } from '@/style/globals';
import { ScrollView, StyleSheet, Text } from 'react-native';

const HomeHeader = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
  return (
    <ScrollView contentContainerStyle={globalStyles.header}>
      <Text style={styles.date}>{currentDate}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  date: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 4,
    marginBottom: 30,
  },
});

export default HomeHeader;
