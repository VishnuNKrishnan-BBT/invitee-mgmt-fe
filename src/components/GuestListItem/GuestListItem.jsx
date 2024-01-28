import React from 'react'
import Styles from './GuestListItem.module.css'
import PriorityCard from '../PriorityCard/PriorityCard'
import GoogleIcon from '../GoogleIcon/GoogleIcon'
import { useMainContext } from '../../context'

function GuestListItem({
    guestId = '',
    name = '',
    companions = '',
    invited = '',
    attendance = '',
    priority = 2,
    notes = '',
    group = ''
}) {

    const {
        openModifyGuestPopup
    } = useMainContext()

    const companionCount = companions == '' ? 0 : companions.split(',').length

    const getAttendance = attendance => {
        if (attendance == 'will') {
            return 'Will attend'
        } else if (attendance == 'unsure') {
            return 'Attendance unsure'
        } else if (attendance == 'wont') {
            return 'Will not attend'
        }
    }

    return (
        <div className={`${Styles.wrapper}`}>
            {group !== '' && <p className={`${Styles.sub2}`}>{`Group: ${group}`}</p>}
            <p className={`${Styles.main}`}><GoogleIcon iconName={'edit_square'} style={{ transform: 'translateY(5px)', cursor: 'pointer', fontSize: '30px', color: '#aaa' }} onClick={() => { openModifyGuestPopup(guestId) }} /> {name} ({companionCount + 1}) <PriorityCard priority={priority} /></p>
            <p className={`${Styles.sub1}`}>{companions}</p>
            <p className={`${Styles.sub2}`}>{invited ? 'Invited' : 'Yet to invite'}</p>
            <p className={`${Styles.sub2}`}>{getAttendance(attendance)}</p>
            {notes !== '' && <p className={`${Styles.notes}`}>{`Notes: "${notes}"`}</p>}
        </div>
    )
}

export default GuestListItem
