import React from 'react'
import Styles from './PrioritySelector.module.css'

function PrioritySelector(props) {

    return (
        <div className={`${Styles.wrapper}`} style={props.style}>
            <div className={`${Styles.button} ${props.priority == 1 && Styles.active}`} onClick={() => { props.setPriority(1) }}>
                <p className={`${Styles.buttonLabel}`}>High Priority</p>
            </div>
            <div className={`${Styles.button} ${props.priority == 2 && Styles.active}`} onClick={() => { props.setPriority(2) }}>
                <p className={`${Styles.buttonLabel}`}>Mid Priority</p>
            </div>
            <div className={`${Styles.button} ${props.priority == 3 && Styles.active}`} onClick={() => { props.setPriority(3) }}>
                <p className={`${Styles.buttonLabel}`}>Low Priority</p>
            </div>
        </div>
    )
}

export default PrioritySelector
