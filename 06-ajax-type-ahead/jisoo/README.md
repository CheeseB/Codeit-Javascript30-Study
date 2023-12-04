## 정규식표현

문자열에서 특정 내용을 찾거나 대체 또는 발췌하는데 사용<br/>

```
  function findMatches(wordToMatch, cities) {
        return cities.filter((place) => {
          // 정규식 생성(g:모든 결과를 i:대소문자 구분없이 검열)
          const regex = new RegExp(wordToMatch, "gi");
          //정규식 메소드를 이용한 리턴
          return place.city.match(regex) || place.state.match(regex);
        });
      }
```

### 정규식 메서드

위의 정규표현식을 가지고 이메일이나 전화번호 매칭 필터링을 하기위해선<br/>
자바스크립트 정규식 메서드를 이용하여 패턴을 검사하고, 매칭되는 문자열을 추출, 변환한다.

("문자열").match(/정규표현식/플래그)<br/>
"문자열"에서 "정규표현식"에 매칭되는 항목들을 배열로 반환<br/>

("문자열").replace(/정규표현식/, "대체문자열")<br/>
"정규표현식"에 매칭되는 항목을 "대체문자열"로 변환<br/>

("문자열").split(정규표현식)<br/>
"문자열"을 "정규표현식"에 매칭되는 항목으로 쪼개어 배열로 반환<br/>

(정규표현식).test("문자열")<br/>
"문자열"이 "정규표현식"과 매칭되면 true, 아니면 false반환<br/>

(정규표현식).exec("문자열")<br/>
match메서드와 유사(단, 무조건 첫번째 매칭 결과만 반환)<br/>

https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%A0%95%EA%B7%9C%EC%8B%9D-RegExp-%EB%88%84%EA%B5%AC%EB%82%98-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-%EC%89%BD%EA%B2%8C-%EC%A0%95%EB%A6%AC
