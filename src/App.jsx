import React from "react";
import Sidebar from "./Sidebar";
import menuTree from "./menuTreeMock";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar tree={menuTree} />
      <div style={{ flex: 1, padding: "20px" }}>Contenido principal</div>
    </div>
  );
}

export default App;
