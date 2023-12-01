## sort 메소드 활용법

const ordered = inventors.sort((a, b) => a.year > b.year? 1:-1)<br/>
const ordered = inventors.sort((a, b) => a.year -b.year)<br/>
비교 함수가 양수를 반환 시 a와 b의 위치가 바뀌어 오름차순 정렬<br/>
반면에 음수를 반환하면, a와 b의 위치가 바뀌지 않고 내림차순 정렬<br/>

## reduce 메소드

const totalYears = inventors.reduce((total, inventor) => { <br/>
return total + (inventor.passed - inventor.year); <br/>
}, 0); <br/>

reduce의 콜백함수의 첫번쨰 인자인 total의 값이 정의되지 않았기 때문에 <br/>
reduce의 두번째 인자에 초기값을 설정해야 계단식 누적 합계가 나온다

## 유사배열은 map을 사용할 수 없다

const category = document.querySelector(".mw-category");<br/>
const links = category.querySelectorAll("a");<br/>

const de = links.map((link) => link.textContent);<br/>

links는 유사배열이므로 map메소드를 쓸 수 없기때문에<br/>

1. 스프레드 배열<br/>
2. Array.from()<br/>

## reduce의 초기값을 빈객체로?

const data = ["car", "car", "truck", "truck", "bike", "walk", "car", "van", "bike", "walk", "car", "van", "car", "truck"];

const transportation = data.reduce((obj, item) => {<br/>
if (!obj[item]) {<br/>
obj[item] = 0;<br/>
}<br/>
obj[item]++;<br/>
return obj;<br/>
}, {});<br/>

reduce메소드의 두번째 인자인 초기값이 빈객체 일 때<br/>
프로퍼티가 없을 경우, reduce 콜백함수의 두번째 인자로 들어간<br/>
각data 배열 인덱스를 키값으로, 0을 벨류값으로 할당한 프로퍼티를 <br/>
생성한 뒤 해당 객체를 리턴해 줘야 한다<br/>

##
