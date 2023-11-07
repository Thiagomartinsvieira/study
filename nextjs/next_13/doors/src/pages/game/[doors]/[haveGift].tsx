import styles from '../../../styles/Game.module.css'
import React, { useEffect, useState } from 'react'
import Door from '../../../components/Door'
import createDoors, { updateDoors } from '../../../functions/doors'
import Link from 'next/link'
import { useRouter } from 'next/router'

const game = () => {
    const router = useRouter()

    const [doors, setDoors] = useState(createDoors([]))

    useEffect(() => {
      const doors = +router.query.doors
      const haveGift = +router.query.haveGift
      setDoors(createDoors(doors, haveGift))
    }, [router?.query])

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