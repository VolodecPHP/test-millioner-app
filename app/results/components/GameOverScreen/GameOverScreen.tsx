import Image from 'next/image';
import { Link } from '@/components/Link/Link';
import styles from './GameOverScreen.module.css';

interface GameOverScreenProps {
  title: string;
  imageSrc: string;
  linkHref: string;
  linkText: string;
  subtitle: string;
}

export const GameOverScreen = ({
  title,
  imageSrc,
  linkHref,
  linkText,
  subtitle,
}: GameOverScreenProps) => {
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
          src={imageSrc}
          width={624}
          height={367}
          alt=''
          layout='responsive'
          className={classNames.image}
        />
        <div className={classNames.rightBlock}>
          <p className={classNames.subtitle}>{subtitle}</p>
          <h1 className={classNames.title}>{title}</h1>
          <Link href={linkHref} className={classNames.link}>
            {linkText}
          </Link>
        </div>
      </div>
    </div>
  );
};
