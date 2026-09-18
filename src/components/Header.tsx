import PanelNotificaciones from "./PanelNotificaciones";

const Header = () => {
  return (
    <header style={{
      padding: "1rem 1.5rem",
      background: "#F2FAF0",
      borderBottom: "2px solid #A8E063",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <h1 style={{ color: "#39A900", margin: 0, fontSize: "1.3rem" }}>ZENDA</h1>

      <PanelNotificaciones />
    </header>
  );
};

export default Header;