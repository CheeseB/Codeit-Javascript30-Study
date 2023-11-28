새로 배운 style 
1. transform: rotate(Xdeg); (X 는 0 ~ 360 사이)
  Xdeg만큼 회전
  주의점. 회전시 기준점이 X축 중앙으로 설정되어 있음(transform-origin: 50%)
  그럼으로 이 기준점을 오른쪽 끝으로 변경
  transform-origin: 100%:

2. transition: all Xs;
  모든 변경을 X초에 걸쳐서 일어나게 설정

3. transition-timing-function: X;
  변경 시 일어나는 애니메이션 설정, 

새로 배운 메소스

1. setInterval(함수, 시간) 
  메서드는 각 호출 사이에 고정된 시간 지연으로 함수를 반복적으로 호출하거나 코드 스니펫을 실행합니다.

2. getSeconds()
  메서드는 생성된 Date 객체에서 초(0 ~ 59)를 가져옵니다.
