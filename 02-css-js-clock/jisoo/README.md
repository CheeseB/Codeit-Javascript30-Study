## transform-origin 속성은 CSS 속성 중 transform 와 함께 사용하는 속성

요소의 transform의 기준점을 정하기 위해 사용
기본적으로 transform-origin 속성의 기본값은 중앙(center)
transform-origin 속성은 CSS 속성 중 transform 와 함께 사용하는 속성

transform: rotate(90deg);
transform-origin: 100%;

transform: rotate(Xdeg)의 기본값이
transform-origin: 50% 이렇게 x좌표값의 50% 즉 중앙에 설정이 되어있어서
transform-origin: 100%: 즉 x 좌표 100% 오른쪽 끝으로 기준점을 변경

## setInterval()

어떤 코드를 일정한 시간 간격을 두고 반복해서 실행하고 싶을 때
첫번째 인자로 실행할 코드를 담고 있는 함수를 받고, 두번째 인자로 반복 주기를 밀리초(ms) 단위
setInterval(()=>{console.log('hi'), 1000})
1초마다 hi를 출력하는 함수 실행

## 초마다 각도 구하는법(시계 기능 구현 시 참고)

const now = new Date();
const seconds = now.getSeconds();
const secondsDegrees = (seconds / 60) \* 360;

## 해당 돔에 접근해 스타일 추가하기

const secondHand = document.querySelector(".second-hand")
secondHand.style.transform = `rotate(${변수}deg)`;
