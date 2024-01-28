import React, { useEffect, useState } from 'react'
import Styles from './AddGuest.module.css'
import GoogleIcon from '../../GoogleIcon/GoogleIcon'
import InputWithIcon from '../../InputWithIcon/InputWithIcon'
import PrioritySelector from '../../PrioritySelector/PrioritySelector'
import InvitedSelector from '../../InvitedSelector/InvitedSelector'
import AttendanceSelector from '../../AttendanceSelector/AttendanceSelector'
import { v4 as uuidv4 } from 'uuid'
import SelectWithIcon from '../../SelectWithIcon/SelectWithIcon'
import requestGetGroups from '../../../api/getGroups'
import requestAddGuest from '../../../api/addGuest'
import { useMainContext } from '../../../context'

function AddGuest({ onClose = null }) {

    const {
        openSuccessPopup,
        openFailurePopup
    } = useMainContext()

    const guestId = uuidv4()
    const [name, setName] = useState('')
    const [companionsList, setCompanionsList] = useState('')
    const [companionsArray, setCompanionsArray] = useState([])
    const [accompaniedByCount, setAccompaniedByCount] = useState(0)
    const [origin, setOrigin] = useState('')
    const [groupList, setGroupList] = useState([])
    const [group, setGroup] = useState('')
    const [notes, setNotes] = useState('')

    useEffect(() => {
        requestGetGroups().then(res => {
            setGroupList(res.data.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    useEffect(() => {
        if (
            companionsList.split(',')[companionsList.split(',').length - 1] !== '' &&
            companionsList.split(',')[companionsList.split(',').length - 1] !== ' '
        ) {
            setAccompaniedByCount(companionsList.split(',').length)
        } else if (companionsList === '') {
            setAccompaniedByCount(0)
        }
    }, [companionsList])

    const [priority, setPriority] = useState(2)
    const updatePriority = priority => {
        setPriority(priority)
    }

    const [invited, setInvited] = useState(false)
    const updateInvited = invited => {
        setInvited(invited)
    }

    const [attendance, setAttendance] = useState('unsure')
    const updateAttendance = attendance => {
        setAttendance(attendance)
    }

    const handlePost = async () => {
        try {
            // Specify the API endpoint and data to be posted
            const response = await requestAddGuest({
                guestId: guestId,
                name: name,
                companions: companionsList,
                origin: origin,
                group: group,
                priority: priority,
                invited: invited,
                attendance: attendance,
                notes: notes
            })
            console.log('Post successful! Response:', response);
            // Handle the response as needed
            response.status == 200 ? openSuccessPopup() : openFailurePopup()
        } catch (error) {
            console.error('Error posting data:', error);
            // Handle errors as needed
        }
    }

    return (
        <div className={`${Styles.wrapper}`}>
            <div className={`${Styles.popupHeadingContainer}`}>
                <h1 className={`${Styles.popupHeading}`}>Add Guest</h1>
                <GoogleIcon iconName={'cancel'} style={{ color: '#eee', marginBottom: '10px', marginRight: '10px', transform: 'scale(150%)', cursor: 'pointer' }} onClick={onClose} />
            </div>
            <div className={`${Styles.formContainer}`}>
                <InputWithIcon value={name} onChange={setName} icon={'person'} placeholder={'Name'} style={{ gridColumnStart: 1, gridColumnEnd: 4 }} />
                <InputWithIcon value={companionsList} onChange={setCompanionsList} icon={'groups'} placeholder={'Companions (Separated by comma)'} style={{ gridColumnStart: 1, gridColumnEnd: 4 }} />
                <p className={`${Styles.infoLabel}`}>{`${accompaniedByCount} companion${accompaniedByCount == 1 ? '' : 's'}`}</p>
                <InputWithIcon value={origin} onChange={setOrigin} icon={'home_pin'} placeholder={'Arriving from'} style={{ gridColumnStart: 1, gridColumnEnd: 4 }} />
                <SelectWithIcon property={'Group'} value={group} options={groupList} icon={'diversity_3'} onChange={setGroup} style={{ gridColumnStart: 1, gridColumnEnd: 4 }} />
                <PrioritySelector priority={priority} setPriority={updatePriority} style={{ gridColumnStart: 1, gridColumnEnd: 4 }} />
                <InvitedSelector invited={invited} setInvited={updateInvited} style={{ gridColumnStart: 1, gridColumnEnd: 4 }} />
                <AttendanceSelector attendance={attendance} setAttendance={updateAttendance} style={{ gridColumnStart: 1, gridColumnEnd: 4 }} />
                <InputWithIcon value={notes} onChange={setNotes} icon={'text_snippet'} placeholder={'Notes'} style={{ gridColumnStart: 1, gridColumnEnd: 4 }} />
                {name !== '' && group !== '' && <button className={`${Styles.primaryCTA}`} style={{ gridColumnStart: 1, gridColumnEnd: 4 }} onClick={handlePost}>Add</button>}
            </div>
        </div>
    )
}

export default AddGuest
