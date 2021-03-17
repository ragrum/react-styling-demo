export default function Inline() {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "rgba(17, 24, 39, 1)",
  };

  const squareStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "20rem",
    width: "20rem",
    backgroundColor: "rgba(255, 255, 255, 1)",
  };

  const circleStyle = {
    borderRadius: "9999px",
    height: "5rem",
    width: "5rem",
    backgroundColor: "rgba(220, 38, 38, 1)",
  };

  return (
    <div style={containerStyle}>
      <div style={squareStyle}>
        <div style={circleStyle}></div>
      </div>
    </div>
  );
}
