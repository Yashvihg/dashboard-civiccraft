import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
const Layout = () => {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Sidebar />
      <div>{<Outlet />}</div>
    </div>
  );
};

export default Layout;
