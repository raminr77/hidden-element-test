import classNames from 'classnames';
import { StaticPage } from 'components/static-page';

import WAVE_IMAGE from 'assets/wave.svg';

function StaticPageLayout({ title, hasWave = false, className, children }) {
  return (
    <div
      className={classNames(
        'relative w-full flex flex-col items-center pw-page-fit',
        className
      )}
    >
      <StaticPage title={title}>{children}</StaticPage>
      {hasWave && (
        <img
          alt="WAVE"
          width="100%"
          src={WAVE_IMAGE}
          className="absolute bottom-0 left-0 right-0"
        />
      )}
    </div>
  );
}

export { StaticPageLayout };
