import Image from 'next/image';
import { Link } from '@/components/Link/Link';
import styles from './StartScreen.module.css';

interface StartScreenProps {
  imageSrc: string;
  title: string;
  linkHref: string;
  linkText: string;
}

export const StartScreen = ({
  imageSrc,
  title,
  linkHref,
  linkText,
}: StartScreenProps) => {
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
          src={imageSrc}
          width={624}
          height={367}
          alt=''
          layout='responsive'
          className={classNames.image}
        />
        <div className={classNames.rightBlock}>
          <h1 className={classNames.title}>{title}</h1>
          <Link href={linkHref} className={classNames.link}>
            {linkText}
          </Link>
        </div>
      </div>
    </div>
  );
};
