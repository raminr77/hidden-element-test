function AppLayout({ children }) {
  return (
    <div className="w-full overflow-x-hidden min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-800 dark:text-slate-50">
      {children}
    </div>
  );
}

export { AppLayout };
