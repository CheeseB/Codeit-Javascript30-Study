![](https://velog.velcdn.com/images/jisunipark/post/d2db0d35-a607-45d0-88d0-3ec14b236a3d/image.png)

## 무엇을 만들 것인가.

키보드 둘째줄(asdfghjkl)의 키들 각각을 드럼의 각각의 부분의 소리와 연결을 해서 키보드를 누르는 이벤트가 일어났을 때 해당하는 드럼 소리가 나오는 웹사이트다. 소리가 나는 부분의 요소는 번쩍!하는 것처럼 노란 테두리가 생기면서 크기가 아주 조금 커졌다 작아진다.

## 코드를 살펴보자.

### html

주어진 html 코드는 대략 이런 구조다.

```html
<div class="keys">
  <div data-key="65" class="key">
    <kbd>A</kbd>
    <span class="sound">clap</span>
  </div>
  <div data-key="83" class="key">
    <kbd>S</kbd>
    <span class="sound">hihat</span>
  </div>
</div>

<audio data-key="65" src="sounds/clap.wav"></audio>
<audio data-key="83" src="sounds/hihat.wav"></audio>
```

### css

css 코드는 `.key`의 `transition` 속성, `.playing`의 `transform` 속성을 유의해서 보자.

```css
.key {
  border: 0.4rem solid black;
  border-radius: 0.5rem;
  margin: 1rem;
  font-size: 1.5rem;
  padding: 1rem 0.5rem;
  transition: all 0.07s ease;
  width: 10rem;
  text-align: center;
  color: white;
  background: rgba(0, 0, 0, 0.4);
  text-shadow: 0 0 0.5rem black;
}

.playing {
  transform: scale(1.1);
  border-color: #ffc600;
  box-shadow: 0 0 1rem #ffc600;
}
```

### javascript

강의 들으면서 이 부분을 구현한 것.

```javascript
<script>
  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);
</script>
```

## 무엇을 배웠나.

### return문의 활용

```javascript
if (!audio) return;
```

위의 코드를 추가해서 지정된 키 외의 다른 키는 무시되도록 했다. `return`문을 만나면 코드의 진행이 함수 밖으로 빠져나가기 때문이다.

> 반환문은 함수의 실행을 중단하고 함수 몸체를 빠져나간다. 따라서 반환(retrun)문 이후에 다른 문이 존재하면 그 문은 실행되지 않고 무시된다. - 이웅모 <모던 자바스크립트 Deep Dive>

`return`문을 적절하게 사용함으로써 굳이 아무 요소도 담기지 않은 null값의 audio 변수를 데리고 코드를 더 진행하지 않도록 했고, 에러도 방지했다.

### `currentTime` 프로퍼티

눌린 키보드 키에 연결된 드럼 소리는 잘 나왔지만 키를 연속으로 누를 때 해당하는 소리는 연속으로 나오지 않는 문제가 있었다. 연결된 드럼 소리 오디오 파일이 끝까지 재생되어야만 다시 소리가 나올 수 있었기 때문이다.

쉽게 말하면, ~~아무리 키보드를 타타타타탁탁 눌러도 드럼은 혼자 느긋하게 쨍\~\~\~ 이러고 있었다는 얘기. 드럼도 키보드 속도에 맞추어 째쨰재ㅒ쨰쨰쨰쩅! 이렇게 만들어주고 싶었던 거다.~~

이 문제는 `currentTime` 프로퍼티로 해결이 되었다. `currentTime`은 HTML의 미디어 요소(비디오나 오디오 같은)가 가지고 있는 프로퍼티인데, `play()` 메소드가 호출된 후에 **재생이 시작되는 미디어 내의 위치를 설정해주는 역할**을 해주는 것이다. 그래서 `currentTime`의 값을 변경하면 **미디어를 새로운 시간으로 찾을 수 있다**.

```javascript
audio.currentTime = 0;
```

이렇게 한 줄 넣어주면 키가 눌릴 때 오디오 파일이 0초부터 다시 시작되어서 ✌️파파파ㅍ팍! - 쨍쨰쨰애쩅!✌️ 이 가능해진다!!

### `transitionend` 이벤트

키보드 키가 눌리면 해당하는 html 요소가 번쩍! 하고 노란 테두리와 함께 살짝 커지는 효과(`.playing`)가 나와야 한다. 기대한 효과는 말 그대로 '번쩍!'이었지만 적용한 효과가 눌러 붙은 느낌으로다가 추가된 그대로 남아버리는 문제가 있었다.

이 문제는 `transitionend`라는 이벤트를 사용해 해결되었다. 얘는 **CSS transition이 실행이 완료되면 실행**된다. 만약 transition 속성이 제거되거나 display가 none으로 설정된 경우처럼 transition이 완료되기도 전에 transition이 제거된 경우에는 이벤트가 생성되지 않는다.

```javascript
function removeTransition(e) {
  if (e.propertyName !== "transform") return; //skip it if it's not a transform
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
```

번쩍!하는 효과는 모든 키들에 적용되는 부분이기 때문에 모든 키들을 담고 있는 keys를 불러와 `forEach` 메소드를 사용해 각각에 `transitionend` 이벤트 리스너를 등록해주었다. `removeTransition`이라는 이벤트 핸들러를 만들어 `transitionend` 이벤트 때 실행되도록 했다. 이로써 문제 해결!

### 참고로!

https://www.toptal.com/developers/keycode
여기에서 키보드 각각의 키에 해당하는 key code 정보와 관련 다른 정보들도 확인해볼 수 있다. 나중에 키보드를 활용해서 무언가 만들어볼 때 참고하면 좋을 듯.
![](https://velog.velcdn.com/images/jisunipark/post/fc421489-8ecc-4c9e-b9a7-454f3ceb6528/image.png)

## 무엇을 느꼈나.

- **이벤트도 객체다.** 그렇기 때문에 프로퍼티를 가진다. 이벤트도 종류가 여러가지라서 각자 가진 프로퍼티가 다르긴 하겠지만.
- 재밌었다. 이렇게 차근차근 구현해보고 기록해나가다보면 구현에 대한 두려움에서 점점 벗어날 수 있을 것 같아 앞으로가 기대된다.
- 블로그로 기록하는 게 생각보다 많이 오래걸린다. **시간**으로 따지면 배보다 배꼽이 커진 느낌인데.. 여기에 매번 기록을 남기고 싶은데 적절한 방법을 생각해봐야겠다.
  - 그리고 다른 블로그 보니까 **codepen** 사용해서 코드를 살펴보기 쉽도록 했던데 나도 한번 알아봐야겠다. **움짤** 만드는 것도 알아보고.

## 참고

- https://javascript30.com/
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentTime
- https://developer.mozilla.org/en-US/docs/Web/API/Element/transitionend_event
- 이웅모 <모던 자바스크립트 Deep Dive>
