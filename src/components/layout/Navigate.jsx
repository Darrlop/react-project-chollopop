import { useHref } from "react-router-dom";
import Button from "../shared/Button";

export default function () {
  return (
    <div>
      {/* <nav className="header-nav">Aquí van los botones</nav> */}
      <nav
        style={{
          border: "1px solid green ",
          margin: "1rem",
          padding: "5px",
          borderRadius: "10px",
        }}
      >
        <Button>Acceso</Button>
      </nav>
    </div>
  );
}
