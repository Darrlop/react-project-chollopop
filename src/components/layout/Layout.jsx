import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import { useModal } from "../modals/useModal";
import Modal from "../modals/Modal";
//import './Layout.css';

export default function Layout() {
  const { isOpen, openModal, closeModal } = useModal(false);

  return (
    <div className="layout">
      <Header />
      <Nav />
      <Modal
        messageModal="fucking Prueba"
        isOpen={isOpen}
        closeModal={closeModal}
      />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
