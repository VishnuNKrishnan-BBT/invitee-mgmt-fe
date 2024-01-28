import React from 'react'
import Styles from './ListHolder.module.css'

function ListHolder({ props, children }) {
    return (
        <div className={`${Styles.wrapper}`}>
            {children}
        </div>
    )
}

export default ListHolder
