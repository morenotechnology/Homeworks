import React, { useEffect, useState } from 'react';
import { Graph } from 'react-d3-graph';
import Grafo from './Grafo';

const App = () => {
    const [data, setData] = useState({ nodes: [], links: [] });

    useEffect(() => {
        const grafo = new Grafo();

        grafo.addNode({ id: 'c1', label: 'Bogotá', type: 'city' });
        grafo.addNode({ id: 'c2', label: 'Medellín', type: 'city' });
        grafo.addNode({ id: 'c3', label: 'Barranquilla', type: 'city' });
        grafo.addNode({ id: 'c4', label: 'Cartagena', type: 'city' });
        grafo.addNode({ id: 'c5', label: 'Bucaramanga', type: 'city' });
        grafo.addNode({ id: 'c6', label: 'Pereira', type: 'city' });

        grafo.addNode({ id: 'p1', label: 'Santiago (25)', type: 'person' });
        grafo.addNode({ id: 'p2', label: 'María (22)', type: 'person' });
        grafo.addNode({ id: 'p3', label: 'Juan (28)', type: 'person' });
        grafo.addNode({ id: 'p4', label: 'Catalina (24)', type: 'person' });
        grafo.addNode({ id: 'p5', label: 'Andrés (30)', type: 'person' });
        grafo.addNode({ id: 'p6', label: 'Laura (27)', type: 'person' });
        grafo.addNode({ id: 'p7', label: 'Diego (23)', type: 'person' });
        grafo.addNode({ id: 'p8', label: 'Valentina (26)', type: 'person' });

        grafo.addEdge({ id: 'p1' }, { id: 'c1' });
        grafo.addEdge({ id: 'p2' }, { id: 'c2' });
        grafo.addEdge({ id: 'p3' }, { id: 'c3' });
        grafo.addEdge({ id: 'p4' }, { id: 'c4' });
        grafo.addEdge({ id: 'p5' }, { id: 'c5' });
        grafo.addEdge({ id: 'p6' }, { id: 'c6' });
        grafo.addEdge({ id: 'p7' }, { id: 'c1' });
        grafo.addEdge({ id: 'p8' }, { id: 'c2' });

        console.log('Personas en Bogotá:', grafo.getPeopleInCity('c1'));
        console.log('Personas en Medellín:', grafo.getPeopleInCity('c2'));
        console.log('Personas en Barranquilla:', grafo.getPeopleInCity('c3'));
        console.log('Personas en Cartagena:', grafo.getPeopleInCity('c4'));
        console.log('Personas en Bucaramanga:', grafo.getPeopleInCity('c5'));
        console.log('Personas en Pereira:', grafo.getPeopleInCity('c6'));

        setData(grafo.getGraphData());
    }, []);

    const config = {
        nodeHighlightBehavior: true,
        node: {
            color: 'lightgray',
            size: 500,
            highlightStrokeColor: 'blue',
            labelProperty: 'label', 
            fontColor: 'white'
        },
        link: {
            highlightColor: 'lightblue',
        },
        directed: false,
    };


    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <Graph
                id="graph-id"
                data={data}
                config={config}
            />
        </div>
    );
};

export default App;
