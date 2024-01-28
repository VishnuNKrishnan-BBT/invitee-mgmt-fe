import React, { createContext, useContext, useState } from 'react'
import AddGuest from './components/PopupContents/AddGuest/AddGuest';

// Create a new context
const MainContext = createContext();

// Create a ContextProvider component to provide context values
export function ContextProvider({ children }) {

    //Defining context values
    const [popupIsOpen, setPopupIsOpen] = useState(false)
    const [popupContent, setPopupContent] = useState('addGuest')
    const [guestInModification, setGuestInModification] = useState(null)

    //Defining Functions
    const openNewGuestPopup = () => {
        setPopupContent('addGuest')
        setPopupIsOpen(true)
    }

    const openCreateGroupPopup = () => {
        setPopupContent('createGroup')
        setPopupIsOpen(true)
    }

    const openGuestListPopup = () => {
        setPopupContent('guestList')
        setPopupIsOpen(true)
    }

    const openInvitedGuestsPopup = () => {
        setPopupContent('invitedGuests')
        setPopupIsOpen(true)
    }

    const openYetToInviteGuestsPopup = () => {
        setPopupContent('yetToInviteGuests')
        setPopupIsOpen(true)
    }

    const openWillAttendGuestsPopup = () => {
        setPopupContent('willAttendGuests')
        setPopupIsOpen(true)
    }

    const openUnsureGuestsPopup = () => {
        setPopupContent('unsureGuests')
        setPopupIsOpen(true)
    }

    const openWontAttendGuestsPopup = () => {
        setPopupContent('wontAttendGuests')
        setPopupIsOpen(true)
    }

    const openHaveNotesGuestsPopup = () => {
        setPopupContent('haveNotesGuests')
        setPopupIsOpen(true)
    }

    const openModifyGuestPopup = guestId => {
        console.log(guestId);
        setPopupContent('modifyGuest')
        setGuestInModification(guestId)
        setPopupIsOpen(true)
    }

    const openSuccessPopup = () => {
        setPopupContent('success')
        setPopupIsOpen(true)
    }

    const openFailurePopup = () => {
        setPopupContent('failure')
        setPopupIsOpen(true)
    }

    // Passing values and functions into the context
    const contextValues = {
        popupIsOpen,
        setPopupIsOpen,
        popupContent,
        setPopupContent,
        openNewGuestPopup,
        openCreateGroupPopup,
        openGuestListPopup,
        openInvitedGuestsPopup,
        openYetToInviteGuestsPopup,
        openWillAttendGuestsPopup,
        openUnsureGuestsPopup,
        openWontAttendGuestsPopup,
        openHaveNotesGuestsPopup,
        guestInModification,
        openModifyGuestPopup,
        openSuccessPopup,
        openFailurePopup
    }

    return (
        <MainContext.Provider value={contextValues}>
            {children}
        </MainContext.Provider>
    )
}

// Custom hook to easily access context values
export function useMainContext() {
    return useContext(MainContext)
}