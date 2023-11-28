# transform-origin 과 transition 속성

## transform-origin

**transform의 rotate 를 사용할 때, 회전축을 어디에 둘 지 지정하는 속성**

origin을 따로 지정해 주지 않으면 기본적으로는 50%가 지정됨

- 50%이면 요소의 x축에서 가운데를 기준으로 회전함
- 이를 100% 와 같이 다른 값으로 지정하면, 요소의 오른쪽 끝을 기준으로 회전하는 등 회전축을 다르게 줄 수가 있음
- 비율이 아닌 **left, right, top, bottom** 등의 텍스트로 지정도 가능! (right가 100%와 동일함)

## transition

속성을 서서히 변화시키는 속성으로, 아래 4가지 속성을 한번에 정한다.

- **transition-property** = 적용시킬 속성
- **transition-duration** = 총 시간
- **transition-timing-function** = 진행 속도
- **transition-delay** = 시작 연기

```css
 {
  transition: all ease 2s 0s;

  /* 아래와 동일함
    transition-property: all;
    transition-duration: ease;
    transition-timing-function: 2s;
    transition-delay: 0s;
  */
}
```
