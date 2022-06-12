import Home from './pages/home/Home'
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register';
import { useState } from "react"

function App() {
  const [deger, setDeger] = useState(true)
  return (
    <div>
      {deger ? <Home setDeger={setDeger}  /> : <Profile setDeger={setDeger} />}
      {/* <Home /> */}
      {/* <Profile /> */}
      {/* <Login/> */}
      {/* <Register/> */}
    </div>
  );
}

export default App;
