import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
//import './Layout.css';

export default function Layout({ title, children }) {
  // export default function Layout({ title }) {
  return (
    <div className="layout">
      <Header />
      <Nav />
      <main>
        <h2>{title}</h2>
        {children}
        {/* <Outlet /> */}
      </main>
      <Footer />
    </div>
  );
}
