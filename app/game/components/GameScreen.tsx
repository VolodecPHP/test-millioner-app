import styles from './GameScreen.module.css';

export const GameScreen = () => {
  const classNames = {
    block: styles['block'],
    round: styles['round'],
    roundContainer: styles['round-container'],
    sidebar: styles['sidebar'],
    options: styles['options'],
    title: styles['title'],
    option: styles['option'],
    optionContent: styles['option-content'],
    optionId: styles['option-id'],
    optionText: styles['option-text'],

    sidebarRound: styles['sidebar-round'],
    sidebarRoundContent: styles['sidebar-round-content'],
  };

  return (
    <div className={classNames.block}>
      <div className={classNames.round}>
        <div className={classNames.roundContainer}>
          <p className={classNames.title}>
            How old your elder brother was 10 years before you was born, mate?
          </p>
          <div className={classNames.options}>
            <div className={classNames.option}>
              <button className={classNames.optionContent}>
                <span className={classNames.optionId}>A</span>
                <span className={classNames.optionText}>10 years</span>
              </button>
            </div>
            <div className={classNames.option}>
              <button className={classNames.optionContent}>
                <span className={classNames.optionId}>B</span>
                <span className={classNames.optionText}>20 years</span>
              </button>
            </div>
            <div className={classNames.option}>
              <button className={classNames.optionContent}>
                <span className={classNames.optionId}>C</span>
                <span className={classNames.optionText}>30 years</span>
              </button>
            </div>
            <div className={classNames.option}>
              <button className={classNames.optionContent}>
                <span className={classNames.optionId}>D</span>
                <span className={classNames.optionText}>40 years</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={classNames.sidebar}>
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
        ].map((round) => (
          <div className={classNames.sidebarRound} key={round}>
            <div className={classNames.sidebarRoundContent}>${round},000</div>
          </div>
        ))}
      </div>
    </div>
  );
};
