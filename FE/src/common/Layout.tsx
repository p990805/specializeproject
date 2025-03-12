// Layout.tsx
import { Outlet } from 'react-router-dom';
import Navbar from '../domains/navbar/Navbar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
