import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainerwithHooks from './components/CakeContainerwithHooks';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={ store }>
      <div className="app">
        <UserContainer />
        {/* <CakeContainerwithHooks />
        <CakeContainer />
        <IceCreamContainer />
        <NewCakeContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
