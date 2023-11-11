import styles from '../../../styles/Game.module.css';
import React, { useEffect, useState } from 'react';
import Door from '../../../components/Door';
import createDoors, { updateDoors } from '../../../functions/doors';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Game = () => {
  const router = useRouter();

  const [valid, setValid] = useState(false);
  const [doors, setDoors] = useState([]);

  useEffect(() => {
    const doors = +router.query.doors;
    const haveGift = +router.query.haveGift;

    const quantityOfDoorsValid = doors >= 3 && doors <= 100;
    const haveGiftValid = haveGift >= 1 && haveGift <= doors;

    setValid(quantityOfDoorsValid && haveGiftValid);
  }, [doors]);

  useEffect(() => {
    const doors = +router.query.doors;
    const haveGift = +router.query.haveGift;
    setDoors(createDoors(doors, haveGift));
  }, [router?.query]);

  function renderDoors() {
    return doors.map((door) => (
      <Door key={door.number} value={door} onchange={(newDoor) => setDoors(updateDoors(doors, newDoor))} />
    ));
  }

  return (
    <div id={styles.game}>
      <div className={styles.doors}>
        {valid ? (
          renderDoors()
        ) : (
          <h2>Invalid Value</h2>
        )}
      </div>
      <div className={styles.buttons}>
        <Link href='/'>
          <button>Restart game</button>
        </Link>
      </div>
    </div>
  );
};

export default Game;
