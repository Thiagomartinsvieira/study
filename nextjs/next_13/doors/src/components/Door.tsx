import styles from '../styles/Door.module.css';
import DoorModel from '../model/door';

interface DoorProps {
  value: DoorModel;
  onchange: (newDoor: DoorModel) => void
}

const Door = (props: DoorProps) => {
  const door  = props.value; 
  const selected = door.selected && !door.openDoor ? styles.selected : '';

  const toogleSelection = e => props.onchange(door.toggleSelection()) 
  const openDoor = e => {
    e.stopPropagation()
    props.onchange(door.openDoor()) 
  }

  const renderDoor = () => {
    return (
      <div className={styles.door}>
        <div className={styles.number}>{door.number}</div>
        <div className={styles.handle} 
        onClick={openDoor}></div>
      </div>
    )
  } 

  return (
    <div className={styles.area} onClick={toogleSelection}>
        <div className={`${styles.frame} ${selected}`}>
          {door.closed ? 
            renderDoor() : 
            door.haveGift ? <Gift /> : false
        }
      </div>
      <div className={styles.floor}></div>
    </div>
  );
}
 
export default Door;
