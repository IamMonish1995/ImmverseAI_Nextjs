import TopBar from "@/components/TopBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <TopBar />
      {children}
    </main>
  );
};

export default Layout;
