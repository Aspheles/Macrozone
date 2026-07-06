import CopyButton from '@/components/CopyButton';
import HomeHeader from '@/components/HomeHeader';
import MacroGrid from '@/components/MacroGrid';
import RecentMeals from '@/components/RecentMeals';
import ShareButton from '@/components/ShareButton';
import useGetMeals from '@/hooks/useGetMeals';
import { globalStyles } from '@/style/globals';
import { ScrollView, Text, View } from 'react-native';

const Index = () => {
  const { meals, loadMeals } = useGetMeals();
  return (
    <ScrollView style={globalStyles.container}>
      <View style={globalStyles.header}>
        <Text style={globalStyles.title}>Macrozone</Text>
        <ShareButton meals={meals} />
      </View>
      <HomeHeader />
      <MacroGrid meals={meals} />
      <CopyButton meals={meals} />
      <RecentMeals meals={meals} amountToDisplay={5} onDelete={loadMeals} />
    </ScrollView>
  );
};

export default Index;
