# Day 5 새로 배운 내용 (플렉스 갤러리)

---

## 1. > \* (CSS 선택자)

CSS 코드에서 >는 자식 선택자(child combinator)를 나타냅니다. 이는 특정 요소의 직계 자식을 선택하는데 사용됩니다.
.panel > *는 클래스가 "panel"인 요소의 직계 자식을 선택합니다. 그리고 *는 모든 요소를 나타냅니다. 따라서 .panel > \*는 "panel" 클래스의 직계 자식인 모든 요소를
선택합니다.

```html
.panel > * { margin: 0; width: 100%; transition: transform 0.5s; }
```

---

## 2. flex: 1 0 auto;

1. flex-grow: 이 속성은 flex 컨테이너 내에서 flex 아이템이 얼마나 늘어날 수 있는지를 나타냅니다. 1은 가능한 최대 크기까지 늘어날 수 있다는 것을 의미합니다. 다른 flex 아이템들과 함께 사용될 때, 이 값에 따라 남은 공간을 분배합니다.

2. flex-shrink: 이 속성은 flex 아이템이 얼마나 줄어들 수 있는지를 나타냅니다. 0으로 설정하면 해당 아이템은 줄어들지 않습니다.

3. flex-basis: 이는 flex 아이템의 초기 크기를 나타냅니다. auto로 설정하면 아이템의 크기를 기본 크기로 유지합니다.

따라서 flex: 1 0 auto;는 해당 flex 아이템이 flex 컨테이너 내에서 가능한 최대 크기까지 늘어날 수 있고(1), 줄어들지 않음(0), 초기 크기는 아이템의 내용에 따라 자동으로 결정됨(auto)을 나타냅니다. 이는 일반적으로 flex 컨테이너 내에서 공간을 적절하게 활용하고 나머지 공간을 동등하게 분배하려는 경우에 유용합니다.

---

## 3. transform: translateY(-100%);

transform: translateY(-100%);은 CSS의 transform 속성을 사용하여 요소를 수직으로 이동시키는 효과를 줍니다. 여기서 사용된 값은 -100%로, 요소를 자신의 높이만큼 위쪽으로 이동시킵니다.

구체적으로 말하면, 이 특정 변환은 요소를 현재 위치에서 자신의 높이의 100%만큼 위쪽으로 이동시킵니다. 만약 부모 요소에 대해 상대적으로 위치가 지정되어 있거나, 부모 중심에서의 위치를 기준으로 하려면 부모 요소에 position: relative;가 설정되어 있어야 합니다.

이러한 특성을 이용하면 페이지 스크롤 효과나 특정 상황에서 요소의 나타남/사라짐을 구현할 때 유용하게 사용될 수 있습니다.

---

**주의점**

transitionend 이벤트가 일어날때, 그 중 flex에 의한 크기 변화가 일어날때, event.propertyName의 값은 보통 flex-grow로 표기 된다. 하지만, safari 부라우저의 경우에는 flex에 의한 크기변화의 propertyName 값을 'flex-grow'가 아닌 'flex'로 표기한다.