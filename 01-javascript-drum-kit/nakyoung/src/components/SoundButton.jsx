import { useEffect, useState } from "react";
import "./SoundButton.css";
import classNames from "classnames";

/**
        필요 보여주는 구조
        1. 입력 키보드 안내 문구
        2. 키보드 입력시 출력될 소리

        출력을 위해 필요한 정보
        1. input handler 
        2. sound file
        1,2는 handler에서 묶에서 처리하고 모든 SoundButton에서 같은 handler를 사용하도록 한다.
        => 생각해보니 keyboard 입력은 최상단에서 받아야할 것 같음. 그럼에도 불구하고 onClick으로도 소리 출력이 가능하게 하면 좋을 듯
        3. key info
        4. sound info
       */

function SoundButton({ SoundKeyInfo, isPressed }) {
  const { keyInfo, soundInfo } = SoundKeyInfo;
  const [pressedClass, setPressedClass] = useState("");

  useEffect(() => {
    if (isPressed) {
      setPressedClass("sound-button_pressed");
      const timer = setTimeout(() => {
        setPressedClass("");
      }, 500);

      return () => clearTimeout(timer);
    } else {
      setPressedClass("");
    }
  }, [isPressed]);

  return (
    <button className={classNames("sound-button", pressedClass)}>
      <p className="sound-button__key-info">{keyInfo.toUpperCase()}</p>
      <p className="sound-button__sound-info">{soundInfo.toUpperCase()}</p>
    </button>
  );
}

export default SoundButton;
