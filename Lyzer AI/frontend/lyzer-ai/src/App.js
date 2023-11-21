
import './App.css';
import AppRouter from './component/AppRouter';
import { auth } from "./utils/init-firebase";


function App() {

  return (
    <div >

      <AppRouter />

    </div>
  );
}

export default App;
