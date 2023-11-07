import DoorModel from "../model/door"

 export default function createDoors(qtd: number, DoorWithGift: number): DoorModel[]{
    return Array.from({length: qtd}, (_, i) => {
        const number = i + 1
        const haveGift = number === DoorWithGift
        return new DoorModel(number, haveGift)
    })
 }

 export function updateDoors(doors: DoorModel[],doorModified: DoorModel): DoorModel[] {
    return doors.map(currentDoor => {
        const samAsModified = currentDoor.number === doorModified.number

        if(samAsModified) {
            return doorModified
        } else {
           return doorModified.openDoor ? currentDoor :  currentDoor.markOff()
        }
    })
 }