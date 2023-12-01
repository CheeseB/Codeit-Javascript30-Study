# transform

> 요소를 회전하거나 확대/축소하거나 비트는 등 형태를 변형할 수 있음

- rotate: 요소를 회전시킬 수 있음
- translate: 요소를 이동시킬 수 있음
- scale: 요소를 확대 또는 축소할 수 있음
- skew: 요소를 비틀 수 있음

# transform-origin

> 요소의 transform 을 위한 기준점을 정하기 위해 사용됨

- 좌표를 기반으로 transform 의 기준점은 다음과 같은 그림으로 이해할 수 있음
  ![img](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FBFCxk%2FbtrDZIM0s0u%2FKU6U3KhczXVsg4CRgtYXG0%2Fimg.png)

# transition

> 프로퍼티 값의 변화가 일정 시간(duration)에 걸쳐 일어나도록 하는 것

# transition-timing-function

> cubic-bezier() function은 CSS에서 transition 속성 혹은 transition-timing-function 속성에서 전환 시작과 끝까지의 효과를 제어하는데 쓰임

- 베지어 곡선(bezier curves) 이라고도 함
  - 베지어 곡선은 부드러운 곡선을 모델링하기 위해 컴퓨터 그래픽에서 널리 사용됨
  - 커브가 컨트롤 포인트의 볼록한 선체에 완전히 포함되어 있기 때문에 점을 그래픽으로 표시하고 직관적으로 커브를 조작하는 데 사용할 수 있음
  - 변환 및 회전과 같은 어피니션 변환은 곡선의 제어점에 각각의 변환을 적용하여 곡선에 적용 할 수 있음
    ![img](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99DBDB4F5B0CD3E418)
