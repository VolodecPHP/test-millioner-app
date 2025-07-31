import { StartScreen } from './components/StartScreen/StartScreen';

export default function Start() {
  return (
    <StartScreen
      imageSrc='/start-desktop-v1.png'
      title='Who wants to be a millionaire?'
      linkHref='/game'
      linkText='Start Game'
    />
  );
}
