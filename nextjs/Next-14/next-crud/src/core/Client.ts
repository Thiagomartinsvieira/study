export default class Client {
  private #id: string
  private #name: string
  private #age: number

  constructor(name: string, age: number, id = null) {
    this.#name = name
    this.#age = age
    this.#id = id
  }

  static empty() {
    return new Client('', 0)
  }

  get id() {
    return this.#id
  }

  get name() {
    return this.#name
  }

  get age() {
    return this.#age
  }
}
