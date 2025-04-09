// Queue.js
class Person {
    constructor(name, withdrawalAmount) {
      this.name = name;
      this.withdrawalAmount = withdrawalAmount;
    }
  }
  
  class Queue {
    constructor() {
      this.queue = [];
    }
  
    // Agregar una nueva persona a la cola
    enqueue(person) {
      this.queue.push(person);
    }
  
    // Eliminar la primera persona de la cola
    dequeue() {
      return this.queue.shift();
    }
  
    // Obtener la primera persona de la cola sin eliminarla
    peek() {
      return this.queue[0];
    }
  
    // Verificar si la cola está vacía
    isEmpty() {
      return this.queue.length === 0;
    }
  
    // Obtener el tamaño de la cola
    size() {
      return this.queue.length;
    }
  
    // Imprimir la cola
    print() {
      return this.queue;
    }
  }
  
  export { Person, Queue };
  