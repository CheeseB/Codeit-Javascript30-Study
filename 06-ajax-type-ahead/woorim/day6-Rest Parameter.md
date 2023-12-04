# Rest 파라미터

- 매개변수 이름 앞에 점 세개 `...` 를 붙여서 정의한 **매개변수**를 말한다.
- Rest 파라미터는 함수에 전달된 인수들의 목록을 **배열**로 전달받는다.

## 기본 문법

```
function foo(...rest) {
    console.log(rest); // [1, 2, 3, 4, 5]
}

foo(1, 2, 3, 4, 5);
```

- 일반 매개변수와 함께 사용 가능하며, 함수에 전달된 인수들은 매개변수와 Rest 파라미터에 순차적으로 할당된다.

```
function foo(param, ...rest) {
    console.log(param); // 1
    console.log(rest); // [2, 3, 4, 5]
}

foo(2, 3, 4, 5);
```

- Rest 파라미터는 반드시 마지막 파라미터여야 한다.
  Rest 파라미터는 이름 그대로 먼저 선언된 매개변수에 할당된 인수를 제외한 나머지 인수들로 구성된 배열이 할당되기 때문이다.

- Rest 파라미터는 단 하나만 선언 가능하다.

- 함수 정의 시 선언한 매개변수 개수를 나타내는 함수 객체의 length 프로퍼티에 영향을 주지 않는다.

```
function foo(...rest) {}
console.log(foo.length); // 0

function bar(x, ...rest) {}
console.log(bar.length); // 1
```
