import "./App.css";
import { Navbar } from "./components/Navbar";
import { PromisePage } from "./components/PromisePage";
import { MyPassbook } from "./components/MyPassbook";
import { AdminPage } from "./components/AdminPage";
import { useEffect, useState } from "react";

function App() {
  const [allAccount, setAllAccount] = useState([]);
  const [account, setAccount] = useState("1");
  const [passbook, setPassbook] = useState([]);
  const [promiseView, setPromiseView] = useState(false);
  const [myPassbookView, setMyPassbookView] = useState(false);
  const [adminPageView, setAdminPageView] = useState(false);
  const [amount, setAmount] = useState(0);

  const URL = "https://funny-passbook.onrender.com";
  // const URL = "http://localhost:8080";

  //GET: 登録されているすべてのアカウントを取得する。
  const fetchAllAccount = async () => {
    try {
      const res = await fetch(URL + "/passbookAccount");
      const data = await res.json();
      setAllAccount(data);
    } catch (error) {
      console.error("error");
    }
  };

  //GET: accountを指定してpassbookの情報を取得する。
  const fetchPassbook = async () => {
    try {
      const res = await fetch(URL + "/passbookInfo/" + account);
      const data = await res.json();
      setPassbook(data);
      if (data.length >= 1) {
        setAmount(data[data.length - 1].amount);
      } else {
        setAmount(0);
      }
    } catch (error) {
      console.error("error");
    }
  };

  useEffect(() => {
    fetchAllAccount();
    fetchPassbook();
  }, [account]);

  //コンポーネントに渡す関数
  //

  return (
    <div className="App">
      <Navbar
        setPromiseView={setPromiseView}
        setMyPassbook={setMyPassbookView}
        setAdminPage={setAdminPageView}
        allAccount={allAccount}
        account={account}
        setAccount={setAccount}
        fetchPassbook={fetchPassbook}
      />
      {promiseView && <PromisePage />}
      {myPassbookView && <MyPassbook passbook={passbook} />}
      {adminPageView && (
        <AdminPage
          account={account}
          URL={URL}
          fetchPassbook={fetchPassbook}
          amount={amount}
        />
      )}
    </div>
  );
}

export default App;
