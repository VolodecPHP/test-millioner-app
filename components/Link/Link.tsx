import NextLink from 'next/link';
import styles from './Link.module.css';
import cn from 'classnames';

type LinkProps = React.ComponentProps<typeof NextLink>;

export const Link = (props: LinkProps) => {
  const classNames = {
    link: cn(styles['link'], props.className),
  };

  return (
    <NextLink {...props} className={classNames.link}>
      {props.children}
    </NextLink>
  );
};
