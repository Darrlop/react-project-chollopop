import Button from "../shared/Button";

export default function () {
  return (
    <div>
      {/* <nav className="header-nav">Aquí van los botones</nav> */}
      <nav
        style={{
          border: "1px solid black ",
          margin: "1rem",
          borderRadius: "10px",
        }}
      >
        <Button>Botoneando</Button>
        <Button>Pulsando</Button>
      </nav>
    </div>
  );
}
