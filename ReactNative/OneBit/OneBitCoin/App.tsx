import { StatusBar, StyleSheet, Text, View, SafeAreaView, Platform} from 'react-native';
import CurrentPrice from './src/components/CurrentPrice/CurrentPrice';
import Graph from './src/components/Graph/Graph';
import QuotatinList from './src/components/QuotationList/QuotatinList';
import QuotationItem from './src/components/QuotationList/QuotationItem/QuotationItem';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
      barStyle='dark-content'
      backgroundColor='#f50d41' />
      <CurrentPrice></CurrentPrice>
      <Graph></Graph>
      <QuotatinList></QuotatinList>
      <QuotationItem></QuotationItem>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? 40 : 0
  },
});
