import React from 'react'
import Styles from './InvitedSelector.module.css'

function InvitedSelector(props) {

    return (
        <div className={`${Styles.wrapper}`} style={props.style}>
            <div className={`${Styles.button} ${props.invited && Styles.active}`} onClick={() => { props.setInvited(true) }}>
                <p className={`${Styles.buttonLabel}`}>Invited</p>
            </div>
            <div className={`${Styles.button} ${!props.invited && Styles.active}`} onClick={() => { props.setInvited(false) }}>
                <p className={`${Styles.buttonLabel}`}>Yet to Invite</p>
            </div>
        </div>
    )
}

export default InvitedSelector
