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
import {useDispatch} from 'react-redux';
import {finishOnBoarding} from './action/onBoarding.action';

interface Props {
  setFirstTime: Function;
}

export default function MyCarousel() {
  const dispatch = useDispatch();
  const [index, setIndex] = useState<number>(0);
  return (
    <SafeAreaView style={{backgroundColor: '#edeef0'}}>
      <View style={styles.carouselContainer}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            dispatch(finishOnBoarding(''));
          }}>
          <Text style={styles.button}>דלג</Text>
        </TouchableOpacity>
        <View style={{direction: 'rtl'}}>
          <Carousel
            layout={'default'}
            data={carouselItems}
            sliderWidth={Dimensions.get('screen').width}
            itemWidth={Dimensions.get('screen').width}
            renderItem={_renderItem}
            onSnapToItem={(index: number) => setIndex(index)}
          />
        </View>
        {index === 1 || index === 0 ? (
          <SlideIndicator index={index} />
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
    bolded: '',
    text: 'ברוך הבא לאפליקציית הספורט הראשונה בישראל שמותאמת במיוחד עבורך',
    image: require('./assets/pic1.png'),
  },
  {
    title: 'וידאו ללא הגבלה',
    bolded: '',
    text: 'צפה בליגות הטובות בעולם בספריית הVOD הגדולה בישראל',
    image: require('./assets/pic2.png'),
  },
  {
    title: 'מה מעניין אותך?',
    bolded: 'בחינם.',
    text: 'בחר את הקבוצות והליגות שלך ותהנה מחוויה מותאמת אישית, ',
    image: require('./assets/pic3.png'),
  },
];

const styles = StyleSheet.create({
  carouselContainer: {
    width: '100%',
    height: '100%',
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
