import { useState } from 'react';
import classNames from 'classnames';

import NEXT_IMAGE from 'assets/next.png';

function Accordion({ title, children, description, active = false, disabled = false }) {
  const [isActive, setIsActive] = useState(active);
  const toggleActive = () => setIsActive(!isActive);

  return (
    <div className="w-full mb-3 rounded-lg overflow-hidden border">
      <button
        type="button"
        onClick={toggleActive}
        className={classNames('w-full p-3 flex items-center justify-start text-md', {
          'border-b': isActive
        })}
      >
        <img
          alt=">"
          width={20}
          height={20}
          src={NEXT_IMAGE}
          className={classNames('mr-2 duration-300 dark:invert', {
            'rotate-90': isActive
          })}
        />
        <span>{title}</span>
      </button>
      {isActive && !disabled && <div className="p-3">{description || children}</div>}
    </div>
  );
}
export { Accordion };
