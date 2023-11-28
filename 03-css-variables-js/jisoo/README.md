## querySelectorAll

document.querySelectorAll(".controls input")으로 dom 요소 노드를 가져오면
클레스 네임이 controls input인 요소노드를 모두가져와 NodeList(유사배열)에
인덱스로 담아 반환하고 각 노드의 프로토타입을 볼 수있다

프로토 타입-해당 객체가 상속받은 메소드나 속성에 대한 정보

## 기능 구현 로직

각 인풋 요소 노드를 가져온다
(querySelectorAll을 쓰면 유사배열에 담겨오기떄문에 forEach, map 함수 사용가능)

function handleUpdate() {
const suffix = this.dataset.sizing || "";
document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

(document.documentElement.style.setProperty를 사용하여 CSS의 사용자 정의 속성을 업데이트)

가져온 인풋들에 배열 반복문으로 addEventListener("change", handleUpdate)를 등록해준다
=> 각 인풋들의 value값을 변화시킬 때 마다 해당값이 handleUpdate 실행

이때 해당값들은 단위가 없으므로 각 태그에 data속성(ata-sizing="px") 추가한다
<input id="spacing" type="range" name="spacing" min="10" max="200" value="10" data-sizing="px" />
