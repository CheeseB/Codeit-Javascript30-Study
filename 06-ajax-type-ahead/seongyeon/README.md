## push 메서드로 배열 복사하기

배열에 push 메서드를 사용할 때, 여러가지 인자를 넣으면 모두 들어간다.

```js
const a = [1];
a.push(2, 3, 4);

console.log(a); // [1, 2, 3, 4]
```

이를 이용해서, spread 연산자로 어떤 배열의 모든 요소를 다른 배열에 추가할 수 있다.

```js
const a = [1];
const b = [2, 3, 4];
a.push(...b);

console.log(a); // [1, 2, 3, 4]
```

사실 꼭 push 메서드를 쓰지 않아도, a배열을 let으로 선언하고 `a = [...a, ...b]` 이렇게 해도 되지만,
const를 사용해서 변수 자체에 재할당을 막고 싶을땐 위와같은 방법도 괜찮은 것 같다.

## 정규표현식

### 정규표현식에 변수 사용하기

`new RegExp()` 를 사용해서 정규표현식을 따로 생성하면 정규식 패턴에 변수를 사용할 수 있다.

```js
// 첫번째 인자: 정규식 패턴
// 두번째 인자: 정규식 옵션
const regex = new RegExp(wordToMatch, 'gi');
```

### 정규식 옵션

- g: 모든 검색 결과를 배열로 반환
- i: 대/소문자 구분 안함

### 정규식 검사 메서드 match

문자열의 match() 메서드는 문자열이 정규식과 매치되는 부분을 검색한다.
매치되는 부분이 있으면 해당 부분을 반환하고, 없다면 null을 반환한다.
이 메서드로 어떤 문자열에 특정한 문자가 포함되어 있는지, 혹은 특정 패턴과 일치하는지 확인할 수 있다.

## replace 메서드의 두번째 인자

replace나 replaceAll의 두번째 인자로 문자열을 넘겨주면, 해당 문자열로 대체된다.

```js
const str = 'Do Something';
const str2 = str.replace('Do', 'Make');

console.log(str2); // Make Something
```

하지만 좀더 복잡한 처리를 위해서 두번째 인자로 콜백함수를 넘길 수도 있다.
이때 콜백함수의 첫번째 매개변수는 정규표현식과 일치하는 문자열이다.

```js
const str = 'Do Something';
const str2 = str.replace('Do', (target) => `Just ${target}`);

console.log(str2); // Just Do Something
```

단순히 특정 문자로만 대체하는것이 아닌, 매치되는 문자열을 그대로 가져와서 내용을 추가해야 한다거나 매치되는 문자열에 따라서 다르게 대체시켜야 할 때 유용할 것 같다.

- [MDN web docs - String.prototype.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
- [퇴출위기 중년 개발자 - replace 의 두번째 function의 매개변수에 관하여...](https://sangpire.tistory.com/entry/replace-%EC%9D%98-%EB%91%90%EB%B2%88%EC%A7%B8-function%EC%9D%98-%EB%A7%A4%EA%B0%9C%EB%B3%80%EC%88%98%EC%97%90-%EA%B4%80%ED%95%98%EC%97%AC)
