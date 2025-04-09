import React, { useState } from "react";
import { LinkedList } from "./LinkedList";

const SongList = () => {
  const [list] = useState(new LinkedList());
  const [songs, setSongs] = useState([]);
  const [newSong, setNewSong] = useState("");

  const handleAddSong = () => {
    if (newSong.trim()) {
      list.append(newSong.trim());
      setSongs(list.toArray());
      setNewSong(""); // Limpiar el input
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Tu Playlist</h2>
      
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Escribe el nombnre"
          value={newSong}
          onChange={(e) => setNewSong(e.target.value)}
          style={{ marginRight: "8px", padding: "5px" }}
        />
        <button onClick={handleAddSong}>Añadir cancion</button>
      </div>

      {songs.length === 0 ? (
        <p>Aún no hay canciones, añade una</p>
      ) : (
        <ul>
          {songs.map((song, idx) => (
            <li key={idx}>{song}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SongList;