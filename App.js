/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
} from 'react-native';

// 나를 기준으로 임포트 하고자하는 파일의 경로를 입력(상대경로)
import MyButton, {
  MyButton2,
  MyButton3,
} from './src/components/buttons/MyButton';
import Test from './src/components/buttons/Test';

// const App: () => Node = () => {
//   return (
//     React.createElement(SafeAreaView, {
//       children: [
//         React.createElement(Text, {
//           children: [
//             '안녕@@!'
//           ]
//         })
//       ]
//     })
//   );
// };

// 인풋(optional) => 함수 => 아웃풋(optional void)

// normal function
// function MyFirst() {
//   //
// }

// arrow functino custom component
// custom component: 리액트 네이티브에서 제공하는 basic component를 조합해서 만든다.
// 한번 만든 컴포넌트는 재사용한다.(Reusable Compoent)
const MyFirst = props => {
  //
  return (
    <Pressable onPress={props.onPress}>
      <Text>
        {props.prefix} {props.children}
      </Text>
    </Pressable>
  );
};

// 이 아래의 코드는 .. 사실 자바스크립트 문법 규칙에 어긋납니다.
// syntax error..
// 컴포넌트를 업데이트하는 방법에는 props를 변경해주거나 state 변경해주면된다.
const App: () => Node = () => {
  // state hook 사용해서 값을 초기화하면 아래의 두가지를 세팅해줍니다.
  // const [값(변경되는값), 세터(함수)] = useState('안녕');
  const [greeting, setGreeting] = useState('안녕');

  return (
    <SafeAreaView>
      <MyFirst
        prefix="모두들"
        onPress={() => {
          // greeting = '헬로우';
          // 상태를 변경했더니 컴포넌트 return 문이 다시 렌더링 되었다.
          if (greeting === '헬로우') {
            setGreeting('인녕');
          } else {
            setGreeting('헬로우');
          }
        }}>
        {greeting}
      </MyFirst>
      <Button
        title="인사말 변경"
        onPress={() => {
          // greeting = '헬로우';
          // 상태를 변경했더니 컴포넌트 return 문이 다시 렌더링 되었다.
          if (greeting === '헬로우') {
            setGreeting('인녕');
          } else {
            setGreeting('헬로우');
          }
        }}
      />
      <Test />
      {/* <View style={{flexDirection: 'row', width: 150, flexWrap: 'wrap'}}>
        <MyButton title="7" />
        <MyButton title="8" />
        <MyButton title="9" />
        <MyButton title="4" />
        <MyButton title="5" />
        <MyButton title="6" />
        <MyButton title="1" />
        <MyButton title="2" />
        <MyButton title="3" />
        <MyButton title="+/-" />
        <MyButton title="0" />
        <MyButton title="." />
        <MyButton2 title="하" />
      </View> */}
    </SafeAreaView>
  );
};

// let aaa = 1;
// aaa = 2;

// const bbb = 2;
// bbb = 3(x);

export default App;
