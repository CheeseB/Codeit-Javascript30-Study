## querySelectorAll

document.querySelectorAll(".controls input")으로 dom 요소 노드를 가져오면<br/>
클레스 네임이 controls input인 요소노드를 모두 찾아 NodeList(유사배열)에<br/>
인덱스로 담아 반환하고 개발자도구에서 각 노드의 프로토타입을 볼 수있다<br/>

프로토 타입-해당 객체가 상속받은 메소드나 속성에 대한 정보<br/>

## 기능 구현 로직

각 인풋 요소 노드를 가져온다<br/>
(querySelectorAll을 쓰면 유사배열에 담겨오기 때문에 인덱스와 length <br/>
속성은 사용 가능하지만 배열 메소드는 스프레드 배열 처리 후 사용 가능하다)<br/>

function handleUpdate() {<br/>
const suffix = this.dataset.sizing || "";<br/>
document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);<br/>
}<br/>

(document.documentElement.style.setProperty를 사용하여 CSS의 사용자 정의 속성을 업데이트)<br/>

가져온 인풋들에 배열 반복문으로 addEventListener("change", handleUpdate)를 등록해준다<br/>
=> 각 인풋들은 "change"이벤트가 발생될 때 마다 handleUpdate 실행<br/>

이때 해당값들은 단위가 없으므로 각 태그에 data속성(ata-sizing="px")을 추가한다<br/>
<input id="spacing" type="range" name="spacing" min="10" max="200" value="10" data-sizing="px" /><br/>
