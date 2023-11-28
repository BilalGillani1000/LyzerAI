
import './App.css';
import AppRouter from './component/AppRouter.jsx';
import { auth } from "./utils/init-firebase.js";


function App() {

  return (
    <div >

      <AppRouter />

    </div>
  );
}

export default App;
