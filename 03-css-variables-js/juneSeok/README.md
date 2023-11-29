# 새로 배운 내용

## CSS 변수 지정

**자동으로 자바스크립트를 사용하여 업데이트 가능.**

```css
:root {
--base: #ffc600;
--spacing: 10px;
--blur: 10px;
};
```

이렇게 CSS의 변수를 설정해 놓으면. 

```css
    img {
    padding: var(--spacing);
    background: var(--base);
    filter: blur(var(--blur))
    }
```

    이런식으로 불러와 사용 가능하다.

**주의점, 부모의 속성을 자식의 속성보다 우선시한다.**

## HTML 입력 요소

### 1. <input type="range">

**사용자가 특정 범위 내에서 값을 선택할 수 있는 슬라이더를 만들 수 있습니다. 슬라이더는 일반적으로 숫자나 범위 값을 조절하는 데 사용됩니다.**

- type="range"는 이 입력 요소가 슬라이더임을 나타냅니다.
- min과 max 속성은 슬라이더의 최솟값과 최댓값을 설정합니다. 이 경우에는 1부터 100까지의 범위입니다.

### 2. 사용자 지정 데이터 속성 (dataset)

**XXX.dataset 속성 : XXX Html 요소의 data-로 시작하는 속성을 객체로 반환한다.**

```html
<div id="myElement" data-info="some information" data-value="42"></div>
```

```javascript
const data = myElement.dataset;
console.log(data) //
/*
{
  info: "some information",
  value: "42"
} 
*/
```

## 새로 배운 영어단어

###  1. suffix(접미사)