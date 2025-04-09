// BookStackPage.jsx
import React, { useState } from "react";
import { Book, BookStack } from "./Stack"; // Importamos la pila y la clase Book

const BookStackPage = () => {
  // Crear una nueva instancia de la pila
  const [bookStack] = useState(new BookStack());
  const [books, setBooks] = useState(bookStack.print()); // Estado para la lista de libros
  const [newBook, setNewBook] = useState({
    name: "",
    isbn: "",
    author: "",
    editorial: "",
  });

  // Función para agregar un nuevo libro a la pila
  const handleAddBook = (e) => {
    e.preventDefault();

    const { name, isbn, author, editorial } = newBook;
    if (name && isbn && author && editorial) {
      const book = new Book(name, isbn, author, editorial);
      bookStack.push(book);
      setBooks(bookStack.print()); // Actualizar la lista de libros
      setNewBook({ name: "", isbn: "", author: "", editorial: "" }); // Limpiar el formulario
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📚 Pila de Libros</h2>

      {/* Formulario para agregar un libro */}
      <form onSubmit={handleAddBook} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Nombre del libro"
          value={newBook.name}
          onChange={(e) => setNewBook({ ...newBook, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="ISBN"
          value={newBook.isbn}
          onChange={(e) => setNewBook({ ...newBook, isbn: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Autor"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Editorial"
          value={newBook.editorial}
          onChange={(e) =>
            setNewBook({ ...newBook, editorial: e.target.value })
          }
          required
        />
        <button type="submit">Agregar Libro</button>
      </form>

      {/* Mostrar la pila de libros */}
      <h3>Libros en la pila:</h3>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <strong>{book.name}</strong> - ISBN: {book.isbn} - Autor: {book.author} - Editorial: {book.editorial}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookStackPage;
