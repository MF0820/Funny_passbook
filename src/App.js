import "./App.css";
import { Navbar } from "./components/Navbar";
import { PromisePage } from "./components/PromisePage";
import { MyPassbook } from "./components/MyPassbook";
import { AdminPage } from "./components/AdminPage";
import { useEffect, useState } from "react";

function App() {
  const [account, setAccount] = useState("1");
  const [passbook, setPassbook] = useState([]);
  const [promiseView, setPromiseView] = useState(false);
  const [myPassbookView, setMyPassbookView] = useState(false);
  const [adminPageView, setAdminPageView] = useState(false);

  //GET: accountを指定してpassbookの情報を取得する。
  const fetchPassbook = async () => {
    console.log(account);
    try {
      const res = await fetch(`http://localhost:8080/passbookInfo/${account}`);
      const data = await res.json();
      setPassbook(data);
      console.log(passbook);
    } catch (error) {
      console.error("error");
    }
  };

  useEffect(() => {
    fetchPassbook();
  }, []);

  return (
    <div className="App">
      <Navbar
        setPromiseView={setPromiseView}
        setMyPassbook={setMyPassbookView}
        setAdminPage={setAdminPageView}
      />
      {promiseView && <PromisePage />}
      {myPassbookView && <MyPassbook passbook={passbook} />}
      {adminPageView && <AdminPage />}
    </div>
  );
}

export default App;
