import TopBar from "@/components/TopBar";
const Layout = ({ children }: { children: React.ReactNode }) => { 
  return (
    <main className="w-screen min-h-screen">
      <TopBar />
      {children}
    </main>
  );
};

export default Layout;
