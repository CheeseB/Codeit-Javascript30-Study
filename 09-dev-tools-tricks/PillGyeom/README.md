1. console.log(%s) %s를 적으니 그 다음 문자열보다 늦게 실행됨.
   ex) ("Hello I am a %s string!", "gkgkgk");

### Hello I am a gkgkgk string!

2. console.log(%c) %c를 적으니 css를 적을수 있다
   ex) ("%cI am some great text", "font-size:50px");

3. let Pill = 3;
   console.assert(1 === Pill, "you did not select the right");

### 안의 조건이 거짓일때만 옆의 문자열을 오류로출력

3번은 좀 많이 유용하게 쓸거같다.

4.  console.clear();
    개발자를 엉망으로 만들고 싶다면 강사님이 이거 쓰라는데...?

5.  console.time("fetching data");
    fetch("https://api.github.com/users/wesbos")
    .then((data) => data.json())
    .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
    });

걸리는 시간을 빠르게 확인 할수있는 console메소드
