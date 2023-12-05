## 무엇을 만들 것인가.

CSS 속성값을 변수로 지정한 후 JavaScript로 그 값들을 변경하여 보여주는 과제다. 사용자가 사진의 패딩값, 블러 정도, 베이스 컬러를 직접 설정할 수 있도록 한다. 위 GIF 참고.

## 코드를 살펴보자.

### HTML

```html
<h2>Update CSS Variables with <span class="hl">JS</span></h2>

<div class="controls">
  <label for="spacing">Spacing:</label>
  <input
    id="spacing"
    type="range"
    name="spacing"
    min="10"
    max="200"
    value="10"
    data-sizing="px"
  />

  <label for="blur">Blur:</label>
  <input
    id="blur"
    type="range"
    name="blur"
    min="0"
    max="25"
    value="10"
    data-sizing="px"
  />

  <label for="base">Base Color</label>
  <input id="base" type="color" name="base" value="#ffc600" />
</div>

<img src="https://source.unsplash.com/7bwQXzbF6KE/800x500" />
```

### CSS

```css
<style>
      :root {
        --base: #ffc600;
        --spacing: 10px;
        --blur: 10px;
      }

      img {
        padding: var(--spacing);
        background: var(--base);
        filter: blur(var(--blur));
      }

      .hl {
        color: var(--base);
      }

      /*
      misc styles, nothing to do with CSS variables
    */

      body {
        text-align: center;
        background: #193549;
        color: white;
        font-family: "helvetica neue", sans-serif;
        font-weight: 100;
        font-size: 50px;
      }

      .controls {
        margin-bottom: 50px;
      }

      input {
        width: 100px;
      }
    </style>
```

### JavaScript

```javascript
<script>
      const inputs = document.querySelectorAll(".controls input");

      function handleUpdate() {
        const suffix = this.dataset.sizing || "";
        document.documentElement.style.setProperty(
          `--${this.name}`, this.value + suffix
        );
      }

      inputs.forEach((input) =>
        input.addEventListener("change", handleUpdate));
      inputs.forEach((input) =>
        input.addEventListener("mousemove", handleUpdate)
      );
    </script>
```

## 무엇을 배웠나.

### css 변수 지정하기

선언은 이렇게 한다.

```css
:root {
  --base: #ffc600;
  --spacing: 10px;
  --blur: 10px;
}
```

[`:root`](https://developer.mozilla.org/ko/docs/Web/CSS/:root)는 전역 CSS 변수 선언에 유용하게 사용할 수 있다. HTML 선택자와 거의 똑같다고 볼 수 있다.

선언한 변수는 `var()` 함수를 사용해 접근할 수 있다. 이렇게!

```css
img {
  padding: var(--spacing);
  background: var(--base);
  filter: blur(var(--blur));
}
```

### 이벤트 핸들러 내 `this`와 `e.target`

나는 이제까지 이벤트 핸들러는 파라미터에 변수 `e`를 지정하고서 `e.target`으로 이벤트의 타겟 요소에 접근했다. 그런데 Wes는 `this`를 자주 쓰는 것 같아서 `this`와 `e.target`을 각각 콘솔창에 찍어보니 동일하다. 아무래도 `this`를 쓰면 더 직관적이기도 하고 파라미터에 변수를 지정하지 않아도 되니 조금이라도 코드를 간결하게 쓸 수 있을 것 같다.

```javascript
function handleUpdate(e) {
  console.log("e.target", e.target);
  console.log("this", this);
}
```

![](https://velog.velcdn.com/images/jisunipark/post/fbebabec-4b6d-43d9-9730-a3a5b6320a64/image.png)

지금까지 `this`를 능동적으로 사용해본 적이 없었는데 앞으로는 자주 써볼 수 있겠다. 적어도 이벤트 핸들러 안에서는.

### 이벤트 핸들러도 그냥 함수였다

난 이제까지 이벤트 핸들러 함수에서 파라미터로 쓰는 e나 event가 이벤트를 가리키는 특별한 애들인 줄 알았는데 다른 이름으로 바꿔서 해봐도 결과는 동일하게 나왔다.

이벤트 핸들러 함수도 그 본질은 일반 함수와 다를 바 없는 함수였던 것. 하지만 addEventLister가 두 번째 아규먼트로 받았을 때 비로소 이벤트 핸들러의 역할을 하는 특별한(?) 친구가 되었던 것이다. ~~(_내가 그의 이름을 불러 주었을 때 그는 나에게로 와서 꽃이 되었다_ 🌸..✨가 생각나는.. 코딩 중에도 낭만을 잃지 말자 ㅋㅋ)~~

### set property

```javascript
function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}
```

`style.setProperty()`메소드는 CSS 속성을 재할당할 때 쓰인다. 아규먼트로는 `( "스타일 속성 이름", 재할당하고자 하는 속성값 )`을 넣어주면 된다. 위의 코드는 이벤트가 타겟하고 있는 CSS 변수를 이벤트가 타겟하고 있는 값으로 재할당하는 코드인 것이다.

여기서 `documentElement`는 문서의 루트 요소를 리턴한다. html 태그를 선택한 셈이다. `:root` 선택자에서 루트 내용에 대해 선언한 내용을 변경하고자 하니까. 전체 문서의 스타일에 대해 `setProperty`를 설정해서 html 요소의 스타일을 새로 설정해주는 것이다. 실제로 개발자 도구에서 확인해보아도 html 태그 내의 style 속성값에 변화를 준다.
![](https://velog.velcdn.com/images/jisunipark/post/c4f0df4e-d744-48ea-9a5c-3017834bef02/image.png)

### input `type`의 종류

HTML의 input 태그가 가지는 type 중 `color`과 `range`는 처음 활용해보았다. [더 찾아보니](https://www.w3schools.com/html/html_form_input_types.asp) type이 가질 수 있는 속성값들이 정말 많다. 나중에 하나씩 써봐야겠다. 흥미롭다.

### CSS `filter` 속성

```css
filter: blur(10px));
```

> CSS에서 `filter` 속성은 흐림 효과나 색상 변형 등 그래픽 효과를 요소에 적용합니다. 보통 필터는 이미지, 배경, 테두리 렌더링을 조정하는 데 쓰입니다.
> \- [MDN docs](https://developer.mozilla.org/ko/docs/Web/CSS/filter)

> `blur()` CSS 함수는 주어진 이미지에 가우시안 블러를 적용합니다.
> \- [MDN docs](https://developer.mozilla.org/ko/docs/Web/CSS/filter-function/blur)

`filter` 속성에 `blur()` 함수를 사용하여 이미지에 블러 처리를 해줬다. `filter`에 줄 수 있는 값이 여러가지니 나중에 여러가지로 활용해볼 수 있겠다.

## 무엇을 느꼈나.

- 이렇게 구현 연습을 스스로 해보니 진도의 압박 없이 내 페이스대로 공부할 수 있어서 좋다. 이것 저것 실험해보면서 **진짜 내 공부**를 하고 있는 것 같아 만족스럽다.
- **질문**을 두려워하지 말자 다짐했었는데 이 과제를 하면서 같이 공부하는 스터디원들에게 질문 한 건 했다ㅎㅎ 내가 알고 있는 게 맞는지 인터넷에 검색해봐도 뾰족한 답을 찾을 수 없었는데 질문을 함으로써 바로 해결이 되었다.
- 이번에는 더 찾아보고 알아볼 내용은 **그때그때 바로 찾아보고 블로그에 기록**하면서 공부해 보았다. 그렇게 하니 시간은 좀 걸리기는 했지만 이 과제를 통해 내가 모르는 것이 무엇인지 알게 되고 하나씩 공부해 나가게 되어 좋다. 기록하는 과정이 아무래도 오래 걸리긴 하는데 이 부분은 하다보면 시간이 더 단축되지 않을까 싶다. 글쓰는 연습도 좀 하고.

## 참고

- https://developer.mozilla.org/ko/docs/Web/CSS/:root
- https://developer.mozilla.org/ko/docs/Web/CSS/Using_CSS_custom_properties
- https://www.w3schools.com/html/html_form_input_types.asp
- https://developer.mozilla.org/ko/docs/Web/CSS/filter
- https://developer.mozilla.org/ko/docs/Web/CSS/filter-function/blur
- https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement
- https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty
