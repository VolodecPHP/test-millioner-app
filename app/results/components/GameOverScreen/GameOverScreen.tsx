import Image from 'next/image';
import styles from './GameOverScreen.module.css';
import Link from 'next/link';

// TODO: add different src for different screen sizes
// TODO: pass title, button text, image, url, score as props
// TODO: fix styles, add adaptive styles
export const GameOverScreen = () => {
  const classNames = {
    block: styles['block'],
    content: styles['content'],
    title: styles['title'],
    link: styles['link'],
    subtitle: styles['subtitle'],
  };

  return (
    <div className={classNames.block}>
      <div className={classNames.content}>
        <Image src='/start-desktop-v1.png' width={624} height={367} alt='' />
        <div>
          <p className={classNames.subtitle}>Total score:</p>
          <h1 className={classNames.title}>$8,000 earned</h1>
          <Link href='/game' className={classNames.link}>
            Try again
          </Link>
        </div>
      </div>
    </div>
  );
};
