import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Square, {themes} from '../components/square'
import styles from '../styles/Home.module.scss'

export default function Home() {

  let [grid, setGrid] = useState(null);

  const gridSize = 12;
  const fruits = 6;
  const others = gridSize - fruits;

  const handleClick = (i) => {
    console.log(`clicked ${i}`);
  }

  useEffect(() => {
    if(!grid) {

      const fruitIndexes = [];
      while(fruitIndexes.length < fruits) {
        const i = Math.floor(Math.random() * gridSize);
        if(!fruitIndexes.includes(i)) {
          fruitIndexes.push(i);
        }
      }

      console.log(fruitIndexes);

      const squares = [];
      for (var i = 0; i < 12; i++) {
          const state = fruitIndexes.includes(i) ? themes.GOOD : themes.BAD;
          squares.push(<Square index={i} onClick={(index) => handleClick(index)} theme={state}/>);
      } 
      setGrid(squares);
    }
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          {grid}
        </div>
      </main>
    </div>
  )
}
