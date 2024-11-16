import { ReactNode } from "react";

const Layout = ({ children, ...props }: { children: ReactNode, [x:string]: any }) => {
  return <section {...props}>{children}</section>;
};

export default Layout;
