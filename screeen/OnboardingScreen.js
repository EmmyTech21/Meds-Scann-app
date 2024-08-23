import { useState } from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const slides = [
    {
        Image: require('../Images/Slide-A.png'),
        heading: 'Fast and Easy Scanning',
        Paragraph: 'Easily scan drug QR codes to instantly receive detailed information about each products'
}, 
{
    Image: require('../Images/Slide-B.png'),
    heading: 'Real-Time Update',
    Paragraph: 'Receive real-time updates on the status and location of various products'
},
 {
     Image: require('../Images/Slide-C.png'),
        heading: 'Authenticity and Safety',
        Paragraph: 'Ensure product authenticity and safety by verifying detailed information through QR  code scans'
},
]
export default function OnboardingScreen({navigation}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = ()=> {
        if(currentIndex < slides.length-1){
            setCurrentIndex(currentIndex + 1);
        } else {
            navigation.replace('categoryScreen')
        }
    };

    const handleSkip = ()=> {
        navigation.replace('categoryScreen');
    }
  return (
    <View  style={styles.slideContainer}>
        <Image style={styles.image} source={slides[currentIndex].Image}/>
        <Text style={styles.headingContainer} >{slides[currentIndex].heading}</Text>
        <Text style={styles.ParagraphContainer}>{slides[currentIndex].Paragraph}</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.buttons}>
       <Button title='Skip' onPress={handleSkip} />
          </View>
          <View style={styles.buttons}>
        <Button title='Next' onPress={handleNext}/>
          </View>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    slideContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    headingContainer: {
        fontSize:34,
        textAlign: 'center',
        marginBottom:20,
    },
      image: {
    width: '100%',
    height: '40%',
  },
    ParagraphContainer: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
      buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttons:{
    fontSize: 30,
    width: 120
  }
})