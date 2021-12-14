import React from 'react';
import {View, Text, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface Props {
  navigation: {navigate: Function};
}
const HomeScreen = ({navigation}: Props) => {
  return (
    <SafeAreaView>
      <Text>Main Page!</Text>
      <Button
        title="Go to Results"
        onPress={() => navigation.navigate('תוצאות')}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
