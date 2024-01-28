import Styles from './App.module.css';
import { useMainContext } from './context';
import CardsHolder from './components/CardsHolder/CardsHolder';
import Popup from './components/Popup/Popup';

function App() {

  const {
    popupIsOpen
  } = useMainContext()

  return (
    <div className={`${Styles.wrapper}`}>
      <h1 className={`${Styles.heading}`}>Invitations Dashboard</h1>
      {popupIsOpen && <Popup />}
      <CardsHolder />
    </div>
  );
}

export default App;
