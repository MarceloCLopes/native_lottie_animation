import React, {useRef} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import LottieView from 'lottie-react-native';

export default function App() {
  const lottieRef = useRef(null);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <LottieView
        style={{width: 150, height: 150}}
        source={require('./assets/icon-checked.json')}
        ref={lottieRef}
      />

      <TouchableOpacity
        onPress={() => {
          lottieRef.current.play();
          setTimeout(() => {
            lottieRef.current.pause();
          }, 2000);
        }}
        style={{
          width: '80%',
          height: 60,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#02778D',
        }}>
        <Text style={{color: '#fff'}}>Load</Text>
      </TouchableOpacity>
    </View>
  );
}
