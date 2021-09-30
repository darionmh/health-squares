import { useState } from 'react';
import styles from '../styles/Home.module.scss'

export default function Square({index, onClick, theme}) {

    const [toggled, setToggled] = useState(false);

    let className = styles.flipCardInner;
    if(toggled) {
        className += ` ${styles.flipped}`;
    }

    const handleClick = () => {
        if(!toggled) {
            setToggled(true);
            onClick(index);
        }
    }

    const getCardBackColor = () => {
        switch(theme) {
            case themes.GOOD:
                return 'dodgerblue';
            case themes.BAD:
                return 'red';
        }
    }

    return (
        <div className={styles.flipCard} onClick={handleClick} >
            <div className={className}>
                <div className={styles.flipCardFront}>
                </div>
                <div className={styles.flipCardBack} style={{backgroundColor: getCardBackColor()}}>
                    {index}
                </div>
            </div>
        </div>
    );
}

export const themes = {
    GOOD: 0,
    BAD: 1
} 