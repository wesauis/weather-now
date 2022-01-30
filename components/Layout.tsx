import { NextPage } from "next";

const Layout: NextPage = ({ children }) => {
  return <div className="h-screen bg-gray-50">{children}</div>;
};

export default Layout;
