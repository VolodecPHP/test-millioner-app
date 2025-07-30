import Image from 'next/image';
import { Link } from '@/components/Link/Link';
import styles from './StartScreen.module.css';

// TODO: add different src for different screen sizes
// TODO: pass title, button text, image, url as props
// TODO: fix styles, add adaptive styles
export const StartScreen = () => {
  const classNames = {
    block: styles['block'],
    content: styles['content'],
    image: styles['image'],
    title: styles['title'],
    link: styles['link'],
    rightBlock: styles['right-block'],
  };

  return (
    <div className={classNames.block}>
      <div className={classNames.content}>
        <Image
          src='/start-desktop-v1.png'
          width={624}
          height={367}
          alt=''
          layout='responsive'
          className={classNames.image}
        />
        <div className={classNames.rightBlock}>
          <h1 className={classNames.title}>Who wants to be a millionaire?</h1>
          <Link href='/game' className={classNames.link}>
            Start Game
          </Link>
        </div>
      </div>
    </div>
  );
};
