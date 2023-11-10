import styles from '../styles/Form.module.css'
import Card from "../components/Card";
import Link from 'next/link';
import NumericEntry from '../components/NumericEntry';
import { useState } from 'react';

export default function Form() {
  const [numberOfDoors, setNumberOfDoors] = useState(3)
  const [withGift, setWithGift] = useState(1)
 
  return (
    <div className={styles.form}>
      <div>
        <Card bgcolor='#c0392c'>
          <h1>Monty Hall</h1>
        </Card>
        <Card>
        <NumericEntry text='Number of doors?' 
          value={numberOfDoors} 
          onchange={newQuantity => setNumberOfDoors(newQuantity)} />
        </Card>
      </div>
      <div>
        <Card>
        <NumericEntry text='Doors with Gift?' 
          value={withGift} 
          onchange={newDoorWithGift => setWithGift(newDoorWithGift)} />
        </Card>        

        <Card bgcolor='#28a085'>
          <Link className={styles.link} href={`/game/${numberOfDoors}/${withGift}`}>
            <h2>Start Game</h2>
          </Link>
        </Card>
      </div>
    </div>
  )
}
