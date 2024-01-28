import React, { useEffect, useState } from 'react'
import Styles from './CreateGroup.module.css'
import GoogleIcon from '../../GoogleIcon/GoogleIcon'
import InputWithIcon from '../../InputWithIcon/InputWithIcon'
import requestCreateGroup from '../../../api/createGroup'
import { useMainContext } from '../../../context'

function CreateGroup({ onClose = null }) {

    const {
        openSuccessPopup,
        openFailurePopup
    } = useMainContext()


    const [group, setGroup] = useState('')

    const handlePost = async () => {
        try {
            // Specify the API endpoint and data to be posted
            const response = await requestCreateGroup({
                groupName: group
            })
            console.log('Post successful! Response:', response);
            // Handle the response as needed
            response.status == 200 ? openSuccessPopup() : openFailurePopup()
        } catch (error) {
            console.error('Error posting data:', error);
            // Handle errors as needed
            openFailurePopup()
        }
    }

    return (
        <div className={`${Styles.wrapper}`}>
            <div className={`${Styles.popupHeadingContainer}`}>
                <h1 className={`${Styles.popupHeading}`}>Create Group</h1>
                <GoogleIcon iconName={'cancel'} style={{ color: '#eee', marginBottom: '10px', marginRight: '10px', transform: 'scale(150%)', cursor: 'pointer' }} onClick={onClose} />
            </div>
            <div className={`${Styles.formContainer}`}>
                <InputWithIcon value={group} onChange={setGroup} icon={'diversity_3'} placeholder={'Group Name'} style={{ gridColumnStart: 1, gridColumnEnd: 4 }} />
                {group !== '' && <button className={`${Styles.primaryCTA}`} style={{ gridColumnStart: 1, gridColumnEnd: 4 }} onClick={handlePost}>Create</button>}
            </div>
        </div>
    )
}

export default CreateGroup
