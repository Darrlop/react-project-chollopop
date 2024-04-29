import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img
          className="logo"
          src="https://res.cloudinary.com/dyyhithd8/image/upload/v1710875622/chollopop-transparente_j1s1zu.png"
          alt="logo Chollopop"
        />
      </div>
      <div className="header__container__tittle">
        <h1 className="big">Chollopop</h1>
        <h3>Tu web molona de compra-venta</h3>
      </div>
    </header>
  );
}
