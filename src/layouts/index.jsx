import { Header } from 'layouts/header';

function AppLayout({ children }) {
  return (
    <div className="w-full overflow-x-hidden min-h-screen bg-light text-dark dark:bg-dark dark:text-light">
      <Header />
      {children}
    </div>
  );
}

export { AppLayout };
