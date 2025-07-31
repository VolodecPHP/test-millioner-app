import { Link } from '../Link/Link';
import styles from './NotFound.module.css';

export const NotFound = () => {
  const classNames = {
    block: styles['block'],
    title: styles['title'],
    link: styles['link'],
  };

  return (
    <div className={classNames.block}>
      <h1 className={classNames.title}>404 Page Not Found</h1>
      <Link href='/' className={classNames.link}>
        Go to Home Page
      </Link>
    </div>
  );
};
