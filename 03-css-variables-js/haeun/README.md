# css 변수를 이용해서 input value 반영하기

1. css 변수 정해주기

```jsx
:root {
      --base: #ffc600;
      --spacing: 10px;
      --blur: 10px;
    }
```

2. input 태그의 name 속성을 변수 이름과 동일하게 정하고 data 속성을 이용해서 단위 적어주기

```jsx
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
```

3. input 태그의 노드들을 변수에 할당해 주기

```jsx
const inputs = document.querySelectorAll(".controls input");
```

4. inputs 변수에 할당한 노드들에 이벤트 등록 해주기

```jsx
inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
```

5. 이벤트가 발생할 때 마다 css 변수의 값이 바뀌도록 이벤트 핸들링 하기

```jsx
function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}
```
