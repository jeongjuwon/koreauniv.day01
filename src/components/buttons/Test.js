import {useState} from 'react';
import {Pressable, Text, View} from 'react-native';

// arrow function
// const 함수명 = (인자1, 인자2) => {
//  함수의 내용
//  return 1;
// }
// 이런 문법적인 생략도 formatter의 규칙을 상세하게 설정해서 정할 수 있다.
// props.title <Test title='제목' />
// props.children <Test>제목</Text>

const Test = ({title = '기본제목', children = '기본 내용'}) => {
  //   const {title = '기본제목', children = '기본 내용'} = props;

  // const [값(변경되는값), 세터(함수)] = useState('안녕');
  // const state = useState('안녕');
  // state[0]: 값, state[1]: 세터(함수)
  // const greeting = state[0];
  // const setGreeting = state[1];
  const [greeting, setGreeting] = useState('안녕');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 1. 삼항 조건 연산자
  // 값 ? 참 : 거짓
  return (
    <Pressable
      onPress={() => {
        setIsLoggedIn(true);
      }}>
      {isLoggedIn === false && <Text>로그인 필요</Text>}
      {isLoggedIn === true && <Text>로그인 됨</Text>}
      {isLoggedIn === false ? (
        <Text>로그인 필요</Text>
      ) : (
        <>
          <Text>{title}</Text>
          <Text>{children}</Text>
          <Text>{greeting}</Text>
        </>
      )}
    </Pressable>
  );
};

export default Test;
