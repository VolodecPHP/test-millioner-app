import Image from 'next/image';
import { Link } from '@/components/Link/Link';
import styles from './GameOverScreen.module.css';

interface GameOverScreenProps {
  prize: number;
}

export const GameOverScreen = ({ prize }: GameOverScreenProps) => {
  const classNames = {
    block: styles['block'],
    content: styles['content'],
    title: styles['title'],
    link: styles['link'],
    subtitle: styles['subtitle'],
    rightBlock: styles['right-block'],
    image: styles['image'],
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
          <p className={classNames.subtitle}>Total score:</p>
          <h1 className={classNames.title}>${prize} earned</h1>
          <Link href='/game' className={classNames.link}>
            Try again
          </Link>
        </div>
      </div>
    </div>
  );
};
