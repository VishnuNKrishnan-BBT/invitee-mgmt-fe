import React from 'react'
import Styles from './PriorityCard.module.css'

function PriorityCard({ priority }) {

    const getPriorityClass = priority => {
        if (priority == 1) {
            return {
                label: 'HIGH PRIORITY',
                style: Styles.high
            }
        } else if (priority == 2) {
            return {
                label: 'MID PRIORITY',
                style: Styles.mid
            }
        } else if (priority == 3) {
            return {
                label: 'LOW PRIORITY',
                style: Styles.low
            }
        }
    }

    return (
        <span className={`${Styles.wrapper} ${getPriorityClass(priority).style}`}>
            {getPriorityClass(priority).label}
        </span>
    )
}

export default PriorityCard
