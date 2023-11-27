import SoundButton from "./SoundButton";
import "./SoundButtonFactory.css";

function SoundButtonFactory({ SoundKeyInfos, pressedSoundKey }) {
  return (
    <div className="sound-button-list">
      {SoundKeyInfos?.map((SoundKeyInfo) => {
        return (
          <SoundButton
            key={SoundKeyInfo.keyInfo}
            SoundKeyInfo={SoundKeyInfo}
            isPressed={pressedSoundKey === SoundKeyInfo.keyInfo}
          />
        );
      })}
    </div>
  );
}

export default SoundButtonFactory;
