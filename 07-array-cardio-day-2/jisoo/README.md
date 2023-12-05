## 배열 메소드

https://ko.javascript.info/array-methods

## 화살표 함수의 {}와 return 키워드 생략 조건

단일 표현식인 경우<br/>
리턴문이 단일 표현식(하나의 계산식)으로 이루어져 있을 때<br/>
중괄호와 return 키워드를 생략 가능

```
// 생략 가능
const add = (a, b) => a + b;

// 생략 불가능 (여러 표현식이 포함된 경우)
const multiply = (a, b) => {
    const result = a * b;
    return result;
};
```

## 화살표 함수의 다양한 리턴문 축약

```
//기본형태
const add = (a, b) => a + b;

//삼항연산자 이용 축약
const isPositive = num => num > 0 ? true : false;

//객체변환
const createPerson = (name, age) => ({ name, age });

//함수가 매개변수 하나일 경우 괄호 생략
const square = x => x * x;

//리턴값이 없는 경우 (undefined 반환)
const greet = () => console.log("Hello!");

```
