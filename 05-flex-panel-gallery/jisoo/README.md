## flex:1의 의미

flex: 1은 풀어서 보면<br/>

```
flex-grow: 1;
flex-shrink: 1;
flex-basis: 0%
```

flex-grow<br/>
flex-container 요소 내부에서 할당 가능한 공간의 정도를 선언<br/>

flex-shrink<br/>
flex-container 요소의 크기보다 클 때 flex-shrink 속성을 사용<br/>
설정된 숫자값에 따라 flex-container 요소 내부에서 flex-item 요소의 크기가 축소

## transitionend 이벤트, propertyName을 사용한 토글 조건문

```
    function toggleActive(e) {
        console.log(e.propertyName);
        if (e.propertyName.includes("flex")) this.classList.toggle("open-active");
      }

      panels.forEach((panel) => panel.addEventListener("transitionend", toggleActive));
```

# transitionend 이벤트

CSS의 transition이 완료된 후에 발생하는 이벤트

# propertyName을 사용한 토글 조건문

transitionend 가 일어난 event 에 flex 이벤트가 포함되어 있다면 <br/>
(=transitionend가 일어난 객체의 속성 이름에 'flex'가 포함되어 있다면)
