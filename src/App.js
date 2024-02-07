
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import appStore from './utils/appStore';

function App() {
  return (
    <div className="">
    

<Provider store={appStore}>

<Body/>

</Provider>






    </div>
  );
}

export default App;
