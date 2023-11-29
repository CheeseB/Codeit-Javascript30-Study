1. input의 type속성에서 range는 범위를 지정할수있는 사이드바가 나온다.

2. input의 type속성에서 color도 있네 value값에다가 색상코드를 넣어주면 그 색상으로 input이 나온다.

3. --는 CSS의 커스텀 속성을 정의할 때 사용
   이러한 사용자 정의 속성은 CSS 변수로도 알려져 있음.
   ( -- )이러한 변수들을 사용하면 전역적으로 일괄적인 스타일을 정의하고 나중에 필요할 때 쉽게 조정할 수 있습니다.

예를 들어, 나중에 다른 부분에서 --base의 값이 변경되면 모든 사용된 곳에서 해당 변경이 적용됩니다. 이는 코드의 유지보수성과 일관성을 유지하는 데 도움이 됩니다.

사용자 정의 속성을 정의할 때 --를 사용하는 것은 표준 CSS 속성과의 충돌을 방지하고 사용자 정의 속성임을 명시하기 위한 "관례"입니다.

4. const inputs = document.querySelectorAll(".controls input");

   function handleUpdate() {
   console.log(this.value);
   }
   inputs.forEach((input) => input.addEventListener("change", handleUpdate));

   this.value에서 this가 어떤 원리로 가르키는진 아직 잘 모르겠다..

   forEach로 해서 콜백함수로 change넣는거는 잘 몰랐지만 이해했다.

5. document.documentElement.style.setProperty()
   우선 document.documentElement 이걸로 문서의 최상위 요소를 찍고 스타일을 입힌다.
   setProperty(propertyName, value) 함수는 propertyName: 설정하려는 CSS 속성의 이름을 나타내는 문자열입니다.
   ex) "color", "font-size" 등이 올 수 있다.
   value: 설정하려는 CSS 속성의 값을 나타내는 문자열입니다.
   ex), "red", "16px" 등이 올 수 있습니다.
