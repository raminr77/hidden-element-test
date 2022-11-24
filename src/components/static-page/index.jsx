import classNames from 'classnames';

function StaticPage({ title, className, children }) {
  return (
    <div
      className={classNames(
        'z-10 w-full h-full overflow-y-auto max-w-3xl p-5 pb-10 lg:pb-20 flex flex-col items-center',
        className
      )}
    >
      {title && (
        <h3 className="w-full text-primary dark:text-secondary text-left pw-title-font text-3xl mb-4">
          {title}
        </h3>
      )}
      <div className="w-full flex items-center justify-center">{children}</div>
    </div>
  );
}

export { StaticPage };
