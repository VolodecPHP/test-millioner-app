import styles from './MobileHeader.module.css';
import cn from 'classnames';

interface MobileHeaderProps {
  isMobileMenuOpen: boolean;
  onClick: () => void;
}

export const MobileHeader = ({
  isMobileMenuOpen,
  onClick,
}: MobileHeaderProps) => {
  const classNames = {
    mobileHeader: styles['mobile-header'],
    burgerButton: cn(styles['burger-button'], {
      [styles['burger-button--open']]: isMobileMenuOpen,
    }),
    burgerLineTop: styles['burger-line-top'],
    burgerLineMiddle: styles['burger-line-middle'],
    burgerLineBottom: styles['burger-line-bottom'],
  };

  return (
    <div className={classNames.mobileHeader}>
      <button className={classNames.burgerButton} onClick={onClick}>
        <div className={classNames.burgerLineTop}></div>
        <div className={classNames.burgerLineMiddle}></div>
        <div className={classNames.burgerLineBottom}></div>
      </button>
    </div>
  );
};
