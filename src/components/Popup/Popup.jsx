import React, { useState } from 'react'
import Styles from './Popup.module.css'
import AddGuest from '../PopupContents/AddGuest/AddGuest'
import { useMainContext } from '../../context'
import CreateGroup from '../PopupContents/CreateGroup/CreateGroup'
import GuestList from '../PopupContents/GuestList/GuestList'
import InvitedGuestList from '../PopupContents/InvitedGuestList/InvitedGuestList'
import YetToInviteGuestList from '../PopupContents/YetToInviteGuestList/YetToInviteGuestList'
import WillAttendGuestList from '../PopupContents/WillAttendGuestList/WillAttendGuestList'
import UnsureGuestList from '../PopupContents/UnsureGuestList/UnsureGuestList'
import WontAttendGuestList from '../PopupContents/WontAttendGuestList/WontAttendGuestList'
import HaveNotesGuestList from '../PopupContents/HaveNotesGuestList/HaveNotesGuestList'
import ModifyGuest from '../PopupContents/ModifyGuest/ModifyGuest'
import Success from '../PopupContents/Success/Success'
import Failure from '../PopupContents/Failure/Failure'

function Popup() {

    const {
        setPopupIsOpen,
        popupContent
    } = useMainContext()

    const [popupClass, setPopupClass] = useState(Styles.contentWrapper)

    const closePopup = () => {
        console.log('closePopup');
        setPopupClass(Styles.contentWrapperLoadOut)
        setTimeout(() => {
            setPopupIsOpen(false)
        }, 199)
    }

    return (
        <div className={`${Styles.backdropWrapper}`}>
            <div className={`${Styles.contentWrapper} ${popupClass}`}>
                {popupContent == 'addGuest' && <AddGuest onClose={closePopup} />}
                {popupContent == 'createGroup' && <CreateGroup onClose={closePopup} />}
                {popupContent == 'guestList' && <GuestList onClose={closePopup} />}
                {popupContent == 'invitedGuests' && <InvitedGuestList onClose={closePopup} />}
                {popupContent == 'yetToInviteGuests' && <YetToInviteGuestList onClose={closePopup} />}
                {popupContent == 'willAttendGuests' && <WillAttendGuestList onClose={closePopup} />}
                {popupContent == 'unsureGuests' && <UnsureGuestList onClose={closePopup} />}
                {popupContent == 'wontAttendGuests' && <WontAttendGuestList onClose={closePopup} />}
                {popupContent == 'haveNotesGuests' && <HaveNotesGuestList onClose={closePopup} />}
                {popupContent == 'modifyGuest' && <ModifyGuest onClose={closePopup} />}
                {popupContent == 'success' && <Success onClose={closePopup} />}
                {popupContent == 'failure' && <Failure onClose={closePopup} />}
            </div>
        </div>
    )
}

export default Popup
