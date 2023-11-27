# transitionend event

## When is the event fired? 이벤트는 언제 실행되는가?

- transitionend 이벤트 css transition이 완료되면 발생한다.
  `transition-property`가 제거되거나 `display`가 `none`으로 설정되는 것 같이 transition이 완료 전에 제거되는 경우 이 이벤트는 생성되지 않는다.

> The `transitionend` event is fired when a CSS transition has completed. In the case where a transition is removed before completion, such as if the `transition-property` is removed or `display` is set to `none`, then the event will not be generated

## What direction is the event fired? 이벤트는 어떤 방향으로 실행되는가?

- `transitioned` 상태에서 transition을 끝낼 때와 이벤트가 완전히 default나 non-transitioned 상태로 되돌아갈 때, 이렇게 양방향으로 발생한다.
  transition 지연이나 지속 시간이 없거나, 둘 다가 0이거나 둘 다 선언되지 않은 경우, 트랜지션이 없으며 트랜지션 이벤트가 발생하지 않는다.
  `transitioncancel`가 발생하면 `transitionend` 이벤트는 발생하지 않는다.

> The `transitionend` event is fired in both directions - as it finishes transitioning to the transitioned state, and when it fully reverts to the default or non-transitioned state. If there is no transition delay or duration, if both are 0s or neither is declared, there is no transition, and none of the transition events are fired. If the `transitioncancel` event is fired, the `transitionend` event will not fire.

## Source from

\*\* MDN WEB DOCS
https://developer.mozilla.org/en-US/docs/Web/API/Element/transitionend_event
