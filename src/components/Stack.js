// Stack.js
class Book {
    constructor(name, isbn, author, editorial) {
      this.name = name;
      this.isbn = isbn;
      this.author = author;
      this.editorial = editorial;
    }
  }
  
  class BookStack {
    constructor() {
      this.stack = [];
    }
  
    // Agregar un libro a la pila
    push(book) {
      this.stack.push(book);
    }
  
    // Obtener el libro más reciente (sin eliminarlo)
    peek() {
      return this.stack[this.stack.length - 1];
    }
  
    // Eliminar el libro más reciente
    pop() {
      return this.stack.pop();
    }
  
    // Verificar si la pila está vacía
    isEmpty() {
      return this.stack.length === 0;
    }
  
    // Obtener el tamaño de la pila
    size() {
      return this.stack.length;
    }
  
    // Imprimir todos los libros en la pila
    print() {
      return this.stack;
    }
  }
  
  export { Book, BookStack };
  