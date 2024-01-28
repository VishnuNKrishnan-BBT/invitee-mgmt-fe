import React, { useEffect, useState } from 'react'
import Styles from './CardsHolder.module.css'
import GlanceCard from '../GlanceCard/GlanceCard'
import ActionCard from '../ActionCard/ActionCard'
import { useMainContext } from '../../context'
import requestGetListedGuestCount from '../../api/getListedGuestCount'
import requestGetInvitedGuestCount from '../../api/getInvitedGuestCount'
import requestGetAttendanceGuestCount from '../../api/getAttendanceGuestCount'
import requestGetGroups from '../../api/getGroups'
import requestGetNotesGuestCount from '../../api/getNotesGuestCount'
import requestGetListedGuestCountIncComp from '../../api/getListedGuestCountIncComp'

function CardsHolder() {

    const {
        openNewGuestPopup,
        openCreateGroupPopup,
        openGuestListPopup,
        openInvitedGuestsPopup,
        openYetToInviteGuestsPopup,
        openWillAttendGuestsPopup,
        openUnsureGuestsPopup,
        openWontAttendGuestsPopup,
        openHaveNotesGuestsPopup
    } = useMainContext()

    const [listedGuests, setListedGuests] = useState('...')
    const [invited, setInvited] = useState('...')
    const [yetToInvite, setYetToInvite] = useState('...')
    const [attendingGuests, setAttendingGuests] = useState('...')
    const [attendingGuestsIncComp, setAttendingGuestsIncComp] = useState('...')
    const [unsureAttendingGuests, setUnsureAttendingGuests] = useState('...')
    const [nonAttendingGuests, setNonAttendingGuests] = useState('...')
    const [groupCount, setGroupCount] = useState('...')
    const [notesCount, setNotesCount] = useState('...')

    useEffect(async () => {
        requestGetListedGuestCount().then(res => {
            setListedGuests(res);
        })

        requestGetInvitedGuestCount(true).then(res => {
            setInvited(res);
        })

        requestGetInvitedGuestCount(false).then(res => {
            setYetToInvite(res);
        })

        requestGetAttendanceGuestCount('will').then(res => {
            setAttendingGuests(res);
        })

        requestGetAttendanceGuestCount('unsure').then(res => {
            setUnsureAttendingGuests(res);
        })

        requestGetAttendanceGuestCount('wont').then(res => {
            setNonAttendingGuests(res);
        })

        requestGetGroups().then(res => {
            setGroupCount(res.data.count);
        })

        requestGetNotesGuestCount().then(res => {
            setNotesCount(res);
        })

        requestGetListedGuestCountIncComp().then(res => {
            setAttendingGuestsIncComp(res);
        })
    }, [])

    return (
        <div className={`${Styles.wrapper}`}>
            <GlanceCard main={listedGuests} sub1={`guest head${listedGuests == 1 ? '' : 's'} listed`} onClick={openGuestListPopup} />
            <GlanceCard main={invited} sub1={`out of ${listedGuests} head${listedGuests == 1 ? '' : 's'} invited`} onClick={openInvitedGuestsPopup} />
            <GlanceCard main={yetToInvite} sub1={`out of ${listedGuests} head${listedGuests == 1 ? '' : 's'} yet to invite`} onClick={openYetToInviteGuestsPopup} />
            <GlanceCard main={attendingGuests} sub1={`out of ${listedGuests} head${listedGuests == 1 ? '' : 's'} will attend`} onClick={openWillAttendGuestsPopup} />
            <GlanceCard main={attendingGuestsIncComp} sub1={`attendance incl. companions`} onClick={openWillAttendGuestsPopup} />
            <GlanceCard main={unsureAttendingGuests} sub1={`head${listedGuests == 1 ? '' : 's'} unsure`} onClick={openUnsureGuestsPopup} />
            <GlanceCard main={nonAttendingGuests} sub1={`out of ${listedGuests} head${listedGuests == 1 ? '' : 's'} won\'t attend`} onClick={openWontAttendGuestsPopup} />
            <GlanceCard main={notesCount} sub1={`${notesCount == 1 ? 'has' : 'have'} notes`} onClick={openHaveNotesGuestsPopup} />
            <ActionCard main={'+'} sub1={'create group'} onClick={openCreateGroupPopup} />
            <ActionCard main={'+'} sub1={'add guest'} onClick={openNewGuestPopup} />
            {/* <ActionCard main={'+'} sub1={'filter guests'} onClick={openNewGuestPopup} /> */}

        </div>
    )
}

export default CardsHolder
