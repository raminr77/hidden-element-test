function AppLayout({ children }) {
  return (
    <div className="w-full overflow-x-hidden min-h-screen bg-light text-dark dark:bg-dark dark:text-light">
      {children}
    </div>
  );
}

export { AppLayout };
