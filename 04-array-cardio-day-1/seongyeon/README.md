### querySelector로 가져온 요소에 또 querySelector 쓰기

```html
<div class="category">
  <a>1</a>
  <a>2</a>
  <a>3</a>
</div>
```

```js
const category = document.querySelector('.mw-category'); // category 요소 찿기
const links = category.querySelectorAll('a'); // category 안에서 a 찾기
```

### ArrayLike를 Array로

document.querySelectorAll() 로 가져온 NodeList 는 유사 배열이라서 map 메서드를 못씀
그래서 Array.from() 을 사용하거나 `[…NodeList]` 이렇게 스프레드 연산자를 써서 Array로 변환시킨 다음에 사용해야 함
(NodeList에 스프레드 연산자를 사용할수 있는건 노드리스트가 iterable 하기 때문!)

```
const category = document.querySelector('.mw-category');
const links = Array.from(category.querySelectorAll('a'));
const de = links.map(link => link.textContent).filter(street => street.includes('de'));
```
