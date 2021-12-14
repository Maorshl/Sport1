import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import Card from './Card';

export default function MyCarousel() {
  const [index, setIndex] = useState<{activeIndex: number}>();
  return (
    <SafeAreaView>
      <Carousel
        layout={'default'}
        data={carouselItems}
        sliderWidth={Dimensions.get('screen').width}
        itemWidth={Dimensions.get('screen').width}
        renderItem={_renderItem}
        onSnapToItem={(index: number) => setIndex({activeIndex: index})}
      />
    </SafeAreaView>
  );
}

const _renderItem = ({item, index}) => {
  return <Card item={item} index={index} />;
};

const carouselItems = [
  {
    title: 'האפליקציה החדשה של ספרט1!',
    text: 'ברוך הבא לאפליקציית הספורט הראשונה בישראל שמותאמת במיוחד עבורך',
    image: require('./assets/pic1.png'),
  },
  {
    title: 'וידאו ללא הגבלה',
    text: 'צפה בליגות הטובות בעולם בספריית הVOD הגדולה בישראל',
    image: require('./assets/pic2.png'),
  },
  {
    title: 'מה מעניין אותך?',
    text: 'בחר את הקבוצות והליגות שלך ותהנהמחוויה מותאמת אישית, בחינם.',
    image: require('./assets/pic3.png'),
  },
];

const styles = StyleSheet.create({});
