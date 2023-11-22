import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div>
      一级路由Layout
      <Link to="/">面板</Link>
      <Link to="/about">关于</Link>
      {/* 配置二级路由的出口 */}
      <Outlet />
    </div>
  );
}

export default Layout;
