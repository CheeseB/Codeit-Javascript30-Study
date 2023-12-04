## flex 속성

flex 속성은 순서대로 flex-grow, flex-shrink, flex-basis 값을 한번에 쓸 수 있는 속성이다.

```css
flex-grow: 1;
flex-shrink: 0;
flex-basis: 100px;

/* 동일한 코드 */
flex: 1 0 100px;
```

```css
/* One value, unitless number: flex-grow
flex-basis is then equal to 0. */
flex: 2;

/* One value, width/height: flex-basis */
flex: 10em;
flex: 30%;
flex: min-content;

/* Two values: flex-grow | flex-basis */
flex: 1 30px;

/* Two values: flex-grow | flex-shrink */
flex: 2 2;

/* Three values: flex-grow | flex-shrink | flex-basis */
flex: 2 2 10%;

/* Keyword values */
flex: auto;
flex: initial;
flex: none;

/* Global values */
flex: inherit;
flex: initial;
flex: revert;
flex: revert-layer;
flex: unset;
```

## 이벤트 핸들러의 e.target, e.currentTarget, this 차이

- **this**: 핸들러가 할당된 요소 (화살표함수에선 사용 불가)
- **e.currentTarget**: 핸들러가 할당된 요소
- **e.target**: 실제로 이벤트가 발생한 대상

## 이벤트 위임

이벤트 위임을 활용하면 forEach로 자식요소에 하나하나 이벤트 핸들러를 등록할 필요 없이 부모요소에만 핸들러를 등록해주면 된다.
**이때, 정확히 원하는 요소에서 의도한 동작이 일어나도록 따로 처리를 해줘야 한다.**
그렇지 않으면 실제로 이벤트를 처리하려는 자식요소가 아닌, 이벤트가 등록된 부모요소에서 이벤트가 발생했을 때도 핸들러가 동작해버리게 된다.

이는 **e.target** 을 검증해서 처리 가능하다.

```js
list.addEventListener('click', function (e) {
  if (!e.target.classList.contains('item')) return;
  e.target.classList.toggle('done');
});
```

하지만 여기서 또 발생할 수 있는 문제가 있다.
만약 이벤트를 처리하려는 요소의 자식 요소에서 이벤트가 발생하게 되면 e.target은 해당 자식요소로 잡히는데,
이러면 검증하려는 e.target과 맞지 않게 된다.

이는 **[e.target.closest()](https://developer.mozilla.org/ko/docs/Web/API/Element/closest)** 로 해결 가능하다.

- 해당 Element를 포함한 상위 요소들 중, 주어진 선택자와 일치하는 가장 가까운 요소를 반환함

```js
function updateToDo(event) {
  const item = event.target.closest('.item');
  if (!item || !toDoList.contains(item)) return;
  item.classList.toggle('done');
}

toDoList.addEventListener('click', updateToDo);
```

- closest가 반환한 요소가 없거나 (`!item`), 반환한 요소가 이벤트 핸들러를 등록한 요소의 하위 요소가 아니라면 (`!toDoList.contains(item)`) 로직을 실행시키지 않음
