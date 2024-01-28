import React from 'react'
import Styles from './GlanceCard.module.css'

function GlanceCard({ main = '', sub1 = '', sub2 = '', onClick = null }) {
    return (
        <div className={`${Styles.wrapper}`} onClick={onClick}>
            <h1 className={`${Styles.mainContent}`}>{main}</h1>
            <p className={`${Styles.subContent1}`}>{sub1}</p>
        </div>
    )
}

export default GlanceCard
