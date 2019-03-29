/* eslint-disable filenames/match-regex */
/**
 * Необходимо реализовать хеш-таблицу, в которой в значения можно записывать данные любого типа.
 * Ключом должна быть строка.
 */

export default class HashTable {
  /**
   * в качестве "памяти" используем массив
   */
  constructor() {
    this.memory = [];
  }

  /**
   * Хеширующая функция.
   * Принимает ключ (тип строка) и возвращает уникальный адрес.
   * hashKey('abc') =>  17263
   * hashKey('xyz') => 283902
   */

  hashKey(key) {
    if (!key) {
      return 0;
    }
    return key.charCodeAt(0);
  }

  /**
   * Метод для получения данных из хеш-таблицы по ключу.
   */

  get(key) {
    let index = this.hashKey(key);
    let collisions = this.memory[index];
    if (!collisions) {
      return;
    }
    for (let pair of collisions) {
      if (pair.key === key) {
        return pair.value;
      }
    }
  }

  /**
   * Добавляем значение в таблицу с заданным ключом.
   */

  set(key, value) {
    let index = this.hashKey(key);
    let collisions = this.memory[index] || [];
    for (let pair of collisions) {
      if (pair.key === key) {
        pair.value = value;
        return;
      }
    }
    collisions.push({key, value});
    this.memory[index] = collisions;
  }

  /**
   * Функция удаления из хеш-таблицы.
   * Принимает ключ.
   */

  remove(key) {
    let index = this.hashKey(key);
    let collisions = this.memory[index];
    if (!collisions) {
      return;
    }
    for (let i = 0; i < collisions.length; i++) {
      if (collisions[i].key === key) {
        collisions.splice(i, 1);
        break;
      }
    }
    if (collisions.length === 0) {
      delete this.memory[index];
    }
  }
}
