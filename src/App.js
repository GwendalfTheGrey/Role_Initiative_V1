import { useState } from 'react';
import styles from './App.module.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Inscription from './components/Inscription';
import Main from './components/Main';

function App() {

  const [userList, setUserList] = useState([]);

  const addUser = (username, email, password, confirmPassword) => {
    const user = {
      id: crypto.randomUUID(),
      username,
      email,
      password,
      confirmPassword,
    };
    console.log(user);
    setUserList([...userList, user])
  }

  return (
    <div>
      <Header/>
      <Main/>
      <Footer/>
      {/* <Inscription addUser={addUser} /> */}
    </div>
  );
}

export default App;
