/**
 * Необходимо реализовать структуру данных Очередь.
 * Очередь должна реализовывать принцип FIFO - First-In-First-Out.
 */

export default class Queue {
  /**
   * в качестве "памяти" используем массив
   */

  constructor() {
    this.list = [];
    /**
     * У любой очереди должна быть длина!
     */
    this.length = 0;
    this.begin = 0;
    this.end = 0;
  }

  /**
   * Метод для добавления элемента в конец очереди.
   */

  enqueue(value) {
    this.list[this.end] = value;
    this.end++;
    this.length++;
  }

  /**
   * Метод для извлечения элемента из очереди.
   * Вместо извлечения из конца очереди мы должны извлечь элемент из начала очереди!
   */

  dequeue() {
    if (!this.length) {
      return;
    }
    let first = this.list[this.begin];
    for (let i = 0; i < this.list.length - 1; i++) {
      this.list[i] = this.list[i + 1];
    }
    this.length--;
    return first;
  }

  /**
   * Метод для получения элемента из очереди.
   * Принцип такой же как и у *deque*, только в этом случае элемент не удаляется из очереди.
   */

  peek() {
    return this.list[this.begin];
  }
}
