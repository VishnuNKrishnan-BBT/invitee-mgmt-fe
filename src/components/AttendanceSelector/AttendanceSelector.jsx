import React from 'react'
import Styles from './AttendanceSelector.module.css'

function AttendanceSelector(props) {

    return (
        <div className={`${Styles.wrapper}`} style={props.style}>
            <div className={`${Styles.button} ${props.attendance == 'will' && Styles.active}`} onClick={() => { props.setAttendance('will') }}>
                <p className={`${Styles.buttonLabel}`}>Will attend</p>
            </div>
            <div className={`${Styles.button} ${props.attendance == 'unsure' && Styles.active}`} onClick={() => { props.setAttendance('unsure') }}>
                <p className={`${Styles.buttonLabel}`}>Unsure</p>
            </div>
            <div className={`${Styles.button} ${props.attendance == 'wont' && Styles.active}`} onClick={() => { props.setAttendance('wont') }}>
                <p className={`${Styles.buttonLabel}`}>Won't attend</p>
            </div>
        </div>
    )
}

export default AttendanceSelector
