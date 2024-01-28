import React from 'react'
import Styles from './SelectWithIcon.module.css'
import GoogleIcon from '../GoogleIcon/GoogleIcon'

function SelectWithIcon({ ...props }) {
    return (
        <div className={`${Styles.wrapper}`} style={props.style ? props.style : {}}>
            <div className={`${Styles.iconHolder}`}>
                {props.icon && <GoogleIcon iconName={props.icon} style={{ fontSize: '24px', color: '#eee' }} />}
            </div>
            <select className={`${Styles.input}`} value={props.value ? props.value : 'Group'} onChange={e => props.onChange(e.target.value)}>
                <option value='Group' disabled>Select{props.property ? ` ${props.property}` : ''}</option>
                {
                    props.options &&
                    props.options.length > 0 &&
                    props.options.map((obj, key) => {
                        return <option key={key} value={obj}>{obj}</option>
                    })
                }
            </select>
        </div>
    )
}

export default SelectWithIcon
