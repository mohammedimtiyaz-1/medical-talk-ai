import AppHeader from "./_components/AppHeader";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <AppHeader />
      <div className="p-2 sm:p-6 md:p-8">{children}</div>
    </div>
  );
}
