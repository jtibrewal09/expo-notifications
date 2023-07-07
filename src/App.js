import sendPushNotification from "./notification";
import logo from './logo.svg';
import './App.css';

function App() {
  const handleSendNotification = () => {
    sendPushNotification(["ExponentPushToken[wuKK9gIkNB4dCUy_re-Nnw]"]);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={handleSendNotification}>send notification</button>
      </header>
    </div>
  );
}

export default App;
