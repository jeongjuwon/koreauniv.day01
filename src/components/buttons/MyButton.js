// myButton => camel case
// MyButton => pascal case => 리액트 네이티브는 파스칼 케이스를 사용합니다.
// my_button => snake case
// my-button => kebab case

// 필요한 디펜던시(종속되는 모듈)를 가지고 온다.
import React from 'react';
import {StyleSheet, Text, View, Pressable, Alert} from 'react-native';

// 컴포넌트 스타일링
// View: In-line styling
// Text: Stylesheet.create를 이용
const MyButton = props => {
  const onPressMyButton = () => {
    Alert.alert('알림', props.title, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };

  const name = 1;
  const age = 40;

  const a = {
    name,
    age,
  };

  return (
    <Pressable
      style={styles.myButtonContainer}
      onPress={event => {
        console.log(event);
        Alert.alert('알림', props.title, [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
      }}>
      <Text style={styles.buttonTitle}>{props.title}</Text>
    </Pressable>
  );
};

const MyButton2 = props => {
  return (
    <View
      style={styles.myButtonContainer}
      onLayout={event => {
        console.log(event.nativeEvent.layout);
      }}>
      <Text style={styles.buttonTitle}>{props.title}</Text>
    </View>
  );
};

const MyButton3 = props => {
  return (
    <View style={styles.myButtonContainer}>
      <Text style={styles.buttonTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  myButtonContainer: {
    width: 50,
    height: 50,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  buttonTitle: {
    color: 'white',
    fontSize: 20,
  },
});

export default MyButton;

export {MyButton2, MyButton3};
