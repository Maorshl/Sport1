import React, {useState} from 'react';
import {
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import Card from './Card';
import SlideIndicator from './SlideIndicator';
import LastCardButton from './LastCardButton';

export default function MyCarousel() {
  const [index, setIndex] = useState<{activeIndex: number}>();
  return (
    <SafeAreaView>
      <View style={styles.carouselContainer}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.button}>דלג</Text>
        </TouchableOpacity>
        <Carousel
          layout={'default'}
          data={carouselItems}
          sliderWidth={Dimensions.get('screen').width}
          itemWidth={Dimensions.get('screen').width}
          renderItem={_renderItem}
          onSnapToItem={(index: number) => setIndex({activeIndex: index})}
        />
        {index.activeIndex === 1 || index.activeIndex === 0 ? (
          <SlideIndicator index={index.activeIndex} />
        ) : (
          <LastCardButton />
        )}
      </View>
    </SafeAreaView>
  );
}

const _renderItem = ({item, index}) => {
  return <Card item={item} index={index} />;
};

const carouselItems = [
  {
    title: 'האפליקציה החדשה של ספורט1!',
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
    text: 'בחר את הקבוצות והליגות שלך ותהנה מחוויה מותאמת אישית, בחינם.',
    image: require('./assets/pic3.png'),
  },
];

const styles = StyleSheet.create({
  carouselContainer: {
    width: '100%',
    height: '99%',
    backgroundColor: '#edeef0',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 25,
  },
  button: {
    fontFamily: 'NarkissBlock-Regular',
    fontSize: 17,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 22,
    letterSpacing: 0,
    color: '#545454',
  },
});
