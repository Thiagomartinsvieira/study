import styles from '../styles/Game.module.css'
import React, { useState } from 'react'
import Door from '../components/Door'
import createDoors, { updateDoors } from '../functions/doors'
import Link from 'next/link'

const game = () => {

    const [doors, setDoors] = useState(createDoors(5, 3))

    function renderDoors() {
      return doors.map(door => {
        return <Door key={door.number} value={door} 
        onchange={newDoor => setDoors(updateDoors(doors, newDoor))} />
      })
    }
    
  return (
    <div id={styles.game}>
        <div className={styles.doors}>
        {renderDoors()}
        </div>
        <div className={styles.buttons}>
            <Link href='/'>
                <button>Restart game</button>
            </Link>
        </div>
    </div>
  )
}

export default game