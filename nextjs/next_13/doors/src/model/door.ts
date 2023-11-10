export default class DoorModel {
    #number: number;
    #haveGift: boolean;
    #selected: boolean;
    #openDoor: boolean;
  
    constructor(number: number, haveGift = false, selected = false, openDoor = false) {
      this.#number = number;
      this.#haveGift = haveGift;
      this.#selected = selected;
      this.#openDoor = openDoor;
    }
  
    get number() {
      return this.#number;
    }
  
    get haveGift() {
      return this.#haveGift;
    }
  
    get selected() {
      return this.#selected;
    }

    get openDoor() 
  
    markOff() {
      const selected = false;
      return new DoorModel(this.#number, this.#haveGift, selected, this.#openDoor);
    }
  
    toggleSelection() {
      const selected = !this.#selected;
      return new DoorModel(this.#number, this.#haveGift, selected, this.#openDoor);
    }
  
    openDoor() { // Change the method name
      return new DoorModel(this.#number, this.#haveGift, this.#selected, true);
    }
  }
  