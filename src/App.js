import { useState } from 'react';
import Header from './layouts/Header/Header';
import Inscription from './layouts/Forms/Inscription';
import Main from './layouts/Main/Main';
import Footer from './layouts/Footer/Footer';

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
    <>
    <Header />
    <Main />
    <Footer />
    </>
  );
}

export default App;
