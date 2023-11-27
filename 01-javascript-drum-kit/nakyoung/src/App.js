import { useEffect, useState } from "react";
import SoundButtonFactory from "./components/SoundButtonFactory";
import SoundKeyInfo from "./models/SoundKeyInfo";

const soundKeyInfoList = [
  new SoundKeyInfo("a", "clap", "/sounds/clap.wav"),
  new SoundKeyInfo("s", "hihat", "/sounds/hihat.wav"),
  new SoundKeyInfo("d", "kick", "/sounds/kick.wav"),
  new SoundKeyInfo("f", "openhat", "/sounds/openhat.wav"),
  new SoundKeyInfo("g", "boom", "/sounds/boom.wav"),
  new SoundKeyInfo("h", "ride", "/sounds/ride.wav"),
  new SoundKeyInfo("j", "snare", "/sounds/snare.wav"),
  new SoundKeyInfo("k", "tom", "/sounds/tom.wav"),
  new SoundKeyInfo("l", "tink", "/sounds/tink.wav"),
];

function App() {

  const [pressedSoundKey, setPressedSoundKey] = useState(null);

  useEffect(() => {
    const keyDownSoundPlayEventHandler = ({ key }) => {
      console.log(key);

      const pressedKeySoundKeyInfo = soundKeyInfoList.find(
        (x) => x.keyInfo === key || x.keyInfo === key.toLowerCase()
      );
      if (!pressedKeySoundKeyInfo) return;

      setPressedSoundKey(key);
      const pressedKeySoundAudio = new Audio(pressedKeySoundKeyInfo.soundUrl);
      pressedKeySoundAudio.play();
    };

    window.addEventListener("keydown", keyDownSoundPlayEventHandler);

    return () => {
      window.removeEventListener("keydown", keyDownSoundPlayEventHandler);
    };
  }, []);

  return (
    <>
      <SoundButtonFactory SoundKeyInfos={soundKeyInfoList} pressedSoundKey={pressedSoundKey} />
    </>
  );
}

export default App;
