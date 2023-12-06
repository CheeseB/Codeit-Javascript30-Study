# ::before

> HTML 요소의 앞에 pseudo-element를 생성한다. 즉, 가상의 요소를 생성하고 가상 요소에 스타일을 적용하는 데 사용된다.

- pseudo-element: HTML 요소의 특정 부분을 선택하거나 스타일링하는 데 사용되는 CSS 선택자
- 다른 pseudo-elements
  - `::first-line`: 특정 요소의 첫 번째 줄에 스타일을 적용합니다.
  - `::first-letter`: 특정 요소의 첫 번째 글자에 스타일을 적용합니다.
  - `::selection`: 사용자가 선택한 요소의 스타일을 지정합니다.
- 사용 예시

```html
<p>
  Learning resources for web developers can be found all over the internet. Try
  out
  <a href="https://web.dev/">web.dev</a>,
  <a href="https://www.w3schools.com/">w3schools.com</a> or our
  <a href="https://developer.mozilla.org/" class="local-link">MDN web docs</a>.
</p>
```

```jsx
a {
  color: #0000ff;
  text-decoration: none;
}

a::before {
  content: '🔗';
}

.local-link::before {
  content: url('../../media/examples/firefox-logo.svg');
  display: inline-block;
  width: 15px;
  height: 15px;
  margin-right: 5px;
}

```

![Alt text](image.png)

---

# transitionEvent와 e.propertyName

> propertyName은 transition과 관련된 CSS 속성의 이름을 반환한다. trabsutuibEvent와 animationEvent에서 주로 사용된다.

### 이벤트 프로퍼티 복습

- `Event.bubbles`: 이벤트가 DOM을 타고 버블링되는지 나타내는 불리언임
- `Event.currentTarget`: 이벤트의 현재 대상 / 이벤트 전파 과정 중 지금 이벤트를 수신 중인 객체를 가리킴
- `Event.defaultPrevented`: `event.preventDefault()`의 호출로 이벤트가 취소됐는지 나타냄
- `Event.target`: 이벤트가 처음에 발생한 대상을 가리킴
- `Event.type`: 이벤트의 이름으로 대소문자를 구분하지 않음

---

# `flex: 1 0 auto;`

> 순서대로 `flex-grow`, `flex-shrink`, `flex-basis`를 나타냄

- `flex-grow: 1`: 요소가 남은 공간을 모두 차지하도록 요소를 확장함
- `flex-shrink: 0;`: 요소가 부모 컨테이너보다 작을 때 얼마나 줄어들지를 결정하므로 0 값은 요소가 부모 컨테이너보다 작아질 때 축소되지 않음을 의미함
- `flex-basis: auto`: 요소의 초기 크기를 설정하며 `auto` 값은 요소의 내용 또는 자식 요소의 크기에 따라 자동으로 크기를 조정하도록 함
  ![Alt text](image-1.png)
