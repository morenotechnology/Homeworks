import React, { useState } from "react";
import { DoublyLinkedList } from "./DoublyLinkedList";

const history = new DoublyLinkedList();
["Instragram", "Google", "Youtube", "Wpp Web"].forEach(page => history.visit(page));

const BrowserHistory = () => {
  const [current, setCurrent] = useState(history.getCurrent());

  const goBack = () => {
    history.back();
    setCurrent(history.getCurrent());
  };

  const goForward = () => {
    history.forward();
    setCurrent(history.getCurrent());
  };

  return (
    <div>
      <h2>Tu buscador</h2>
      <p>Pagina actual: {current}</p>
      <button onClick={goBack}>← Atras</button>
      <button onClick={goForward}>→ Sigiente</button>
    </div>
  );
};

export default BrowserHistory;