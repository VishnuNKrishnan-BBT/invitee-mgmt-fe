import Styles from './Failure.module.css'
import GoogleIcon from '../../GoogleIcon/GoogleIcon'

function Failure({ onClose = null }) {

    return (
        <div className={`${Styles.wrapper}`}>
            <div className={`${Styles.popupHeadingContainer}`}>
                <h1 className={`${Styles.popupHeading}`}>Failed to Modify!</h1>
                <GoogleIcon iconName={'cancel'} style={{ color: '#eee', marginBottom: '10px', marginRight: '10px', transform: 'scale(150%)', cursor: 'pointer' }} onClick={onClose} />
            </div>
            <div className={`${Styles.formContainer}`}>
                <GoogleIcon style={{ fontSize: '200px', fontWeight: 900, color: 'tomato', marginTop: '60px', marginBottom: '60px' }} iconName={'error'} />
                <p className={Styles.infoWriteUp}>Please try again in some time...</p>
            </div>
        </div>
    )
}

export default Failure
