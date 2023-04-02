import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="max-w-screen-xl mx-auto">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
