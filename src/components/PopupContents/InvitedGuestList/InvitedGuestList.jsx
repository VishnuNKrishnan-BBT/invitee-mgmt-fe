import React, { useEffect, useState } from 'react'
import Styles from './InvitedGuestList.module.css'
import GoogleIcon from '../../GoogleIcon/GoogleIcon'
import ListHolder from '../../ListHolder/ListHolder'
import GuestListItem from '../../GuestListItem/GuestListItem'
import requestGetGuests from '../../../api/getGuests'

function InvitedGuestList({ onClose = null }) {


    const [guestList, setGuestList] = useState([])

    useEffect(() => {
        requestGetGuests({ invited: true }).then(res => {
            setGuestList(res)
        })
    }, [])

    return (
        <div className={`${Styles.wrapper}`}>
            <div className={`${Styles.popupHeadingContainer}`}>
                <h1 className={`${Styles.popupHeading}`}>Invited Guests</h1>
                <GoogleIcon iconName={'cancel'} style={{ color: '#eee', marginBottom: '10px', marginRight: '10px', transform: 'scale(150%)', cursor: 'pointer' }} onClick={onClose} />
            </div>
            <div className={`${Styles.listContainer}`}>
                <ListHolder>
                    {guestList.map((obj, key) => {
                        return <GuestListItem key={key} guestId={obj.guestId} name={obj.name} companions={obj.companions} invited={obj.invited} group={obj.group} attendance={obj.attendance} priority={obj.priority} notes={obj.notes} />
                    })}
                </ListHolder>
            </div>
        </div>
    )
}

export default InvitedGuestList
