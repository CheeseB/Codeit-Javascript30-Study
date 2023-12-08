## 첫번째 체크박스가 마지막 체크박스로 갱신

```
      let lastChecked;

      function handleCheck(e) {
        let inBetween = false;
        if (e.shiftKey && this.checked) {
          checkboxes.forEach((checkbox) => {
            if (checkbox === this || checkbox === lastChecked) {
              inBetween = !inBetween;
            }
            if (inBetween) {
              checkbox.checked = true;
            }
          });
        }
        lastChecked = this;
      }

```

### checkbox === this<br/>
현재 클릭된 체크박스<br/>

### checkbox === lastChecked<br/>
현재 클릭 이벤트 이전에 마지막으로 체크된 체크박스(lastChecked)인지 확인<br/>

### lastChecked = this;
마지막 체크를 this로 갱신 <br/>


=> 처음 클릭시 checkbox === lastChecked는 사용되지 않지만 <br/>
두번째 클릭시 (첫번째 클릭 때) this를 lastChecked로 갱신 했기 때문에 <br/>
마지막 체크 부분을 식별해 낼 수 있다<br/>
