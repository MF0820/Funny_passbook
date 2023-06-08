import React from "react";

export const Navbar = ({
  setPromiseView,
  setMyPassbook,
  setAdminPage,
  allAccount,
  account,
  setAccount,
  fetchPassbook,
}) => {
  //約束事ボタンが押されたら約束事だけが表示される。
  const onClickPromisPage = () => {
    setPromiseView(true);
    setMyPassbook(false);
    setAdminPage(false);
  };

  //自分の通帳ボタンが押されたら自分の通帳だけが表示される。
  const onClickMyPassbook = () => {
    setPromiseView(false);
    setMyPassbook(true);
    setAdminPage(false);
  };

  //管理者ボタンが押されたら管理者画面だけが表示される。
  const onClickAdminPage = () => {
    setPromiseView(false);
    setMyPassbook(false);
    setAdminPage(true);
  };

  const onChangeAccount = (e) => {
    setAccount(e.target.value);
    console.log(account);
  };

  return (
    <>
      <div>
        <h1>貯めて楽しいおこづかい帳</h1>
        <div className="userSelect">
          <select onChange={onChangeAccount}>
            {allAccount.map((el) => (
              <option value={el.id}>{el.name}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="navibar">
        <button>口座作成</button>
        <button onClick={onClickPromisPage}>約束事</button>
        <button onClick={onClickMyPassbook}>自分の通帳</button>
        <button onClick={onClickAdminPage}>管理者</button>
      </div>
    </>
  );
};
