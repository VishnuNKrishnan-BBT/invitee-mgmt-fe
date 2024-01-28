import React from 'react'

function GoogleIcon({ ...props }) {
    return (
        <span className={`material-symbols-outlined`} style={props.style} onClick={props.onClick}>{props.iconName}</span>
    )
}

export default GoogleIcon
