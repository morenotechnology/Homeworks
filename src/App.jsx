import React, { useEffect, useState } from 'react';
import Tree from 'react-d3-tree';
import ArbolBinario from './BinaryTree';

const App = () => {
  const [treeData, setTreeData] = useState([]);
  const [arbol, setArbol] = useState(null);

  useEffect(() => {
    const nuevoArbol = new ArbolBinario();
    const valores = [20, 8, 25, 6, 13];
    valores.forEach(v => nuevoArbol.insertar(v));

    console.log("Inorden:", nuevoArbol.inorden().join(', '));
    console.log("Preorden:", nuevoArbol.preorden().join(', '));
    console.log("Postorden:", nuevoArbol.postorden().join(', '));

    console.log("¿El Árbol Contiene 6?:", nuevoArbol.contiene(6));  
    console.log("¿El Árbol Contiene 13?:", nuevoArbol.contiene(13)); 

    setTreeData(nuevoArbol.getTreeData());
    setArbol(nuevoArbol);
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      {treeData.length > 0 && (
        <Tree data={treeData} orientation="vertical" />
      )}
    </div>
  );
};

export default App;
