import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

export default function MyCarousel() {
  const [index, setIndex] = useState<{activeIndex: number}>();
  return (
    <SafeAreaView>
      <Carousel
        layout={'default'}
        data={carouselItems}
        sliderWidth={300}
        itemWidth={300}
        renderItem={_renderItem}
        onSnapToItem={(index: number) => setIndex({activeIndex: index})}
      />
    </SafeAreaView>
  );
}

const _renderItem = ({item, index}) => {
  return (
    <View
      style={{
        backgroundColor: 'floralwhite',
        borderRadius: 5,
        height: 250,
        padding: 50,
        marginLeft: 25,
        marginRight: 25,
      }}>
      <Text style={{fontSize: 30}}>{item.title}</Text>
      <Text>{item.text}</Text>
    </View>
  );
};

const carouselItems = [
  {
    title: 'Item 1',
    text: 'Text 1',
  },
  {
    title: 'Item 2',
    text: 'Text 2',
  },
  {
    title: 'Item 3',
    text: 'Text 3',
  },
];

const styles = StyleSheet.create({});
