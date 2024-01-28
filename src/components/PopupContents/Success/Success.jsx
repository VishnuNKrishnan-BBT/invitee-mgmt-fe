import React, { useEffect, useState } from 'react'
import Styles from './Success.module.css'
import GoogleIcon from '../../GoogleIcon/GoogleIcon'

function Success({ onClose = null }) {

    return (
        <div className={`${Styles.wrapper}`}>
            <div className={`${Styles.popupHeadingContainer}`}>
                <h1 className={`${Styles.popupHeading}`}>Success!</h1>
                <GoogleIcon iconName={'cancel'} style={{ color: '#eee', marginBottom: '10px', marginRight: '10px', transform: 'scale(150%)', cursor: 'pointer' }} onClick={onClose} />
            </div>
            <div className={`${Styles.formContainer}`}>
                <GoogleIcon style={{ fontSize: '200px', fontWeight: 900, color: 'green', marginTop: '60px' }} iconName={'task_alt'} />
            </div>
        </div>
    )
}

export default Success
