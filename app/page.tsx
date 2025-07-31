import { StartScreen } from './start/components/StartScreen/StartScreen';

export default function Default() {
  return (
    <StartScreen
      imageSrc='/start-desktop-v1.png'
      title='Who wants to be a millionaire?'
      linkHref='/game'
      linkText='Start Game'
    />
  );
}
