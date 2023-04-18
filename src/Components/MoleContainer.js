import React, { useState } from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'

function MoleContainer({ score, setScore }) {
    let [displayMole, setDisplayMole] = useState(false)

    const handleClick = () => {
        setScore(prevScore => prevScore +1 )
        setDisplayMole(false)
    }

    let moleDisplay = displayMole ? <Mole setDisplayMole={setDisplayMole} handleClick={handleClick} /> : <EmptySlot setDisplayMole={setDisplayMole} />

    return (
        <>
            {moleDisplay}
        </>
    )
}

export default MoleContainer