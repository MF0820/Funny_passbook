import React, { useEffect, useState } from "react";

export const AdminPage = ({ account, URL, fetchPassbook, amount }) => {
  const [dateValue, setDateValue] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [usageValue, setUsageValue] = useState(null);
  const [depositValue, setDepositValue] = useState(null);
  const [drawerValue, setDrawerValue] = useState(null);
  const [radioCheck, setRadioCheck] = useState(null);
  const [isUsage, setIsUsage] = useState(false);
  const [isDeposit, setIsDeposit] = useState(false);
  const [isDrawer, setIsDrawer] = useState(false);

  const handleDateChange = (e) => {
    setDateValue(e.target.value);
  };

  const handleUsageChange = (e) => {
    setUsageValue(e.target.value);
  };

  const handleDepositChange = (e) => {
    setDepositValue(e.target.value);
  };

  const handleDrawerChange = (e) => {
    setDrawerValue(e.target.value);
  };

  const modeChange = () => {
    if (radioCheck === "deposit") {
      setUsageValue("");
      setDrawerValue(0);
      setIsUsage(false);
      setIsDeposit(false);
      setIsDrawer(true);
    } else if (radioCheck === "drawer") {
      setUsageValue("");
      setDepositValue(0);
      setIsUsage(false);
      setIsDeposit(true);
      setIsDrawer(false);
    } else if (radioCheck === "interest") {
      setUsageValue("金利支払い");
      setDepositValue(0);
      setDrawerValue(0);
      setIsUsage(true);
      setIsDeposit(true);
      setIsDrawer(true);
    }
  };

  useEffect(() => {
    modeChange();
  }, [radioCheck]);

  //記帳ボタンを押すとサーバーにPOSTする。
  const entryDataPost = async () => {
    //空データがないかバリデーション
    if (
      dateValue === null ||
      usageValue === null ||
      depositValue === null ||
      account === null
    ) {
      alert("未入力があります");
      return;
    }

    try {
      //送信データをまとめる
      const data = {
        date: dateValue,
        usage: usageValue,
        deposit: depositValue,
        drawer: drawerValue,
        amount: amount,
        account_id: account,
        radioCheck: radioCheck,
      };
      const res = await fetch(URL + "/passbookEntry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await res.text();
      console.log(result);
      setDateValue(null);
      setUsageValue(null);
      setDepositValue(null);
      setDrawerValue(null);
      if (result === "記帳完了") {
        console.log("記帳完了");
        fetchPassbook();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const usageOptions = [
    "おこづかい",
    "テスト100点",
    "友達の誕プレ",
    "金利支払い",
    "友達と遊ぶ",
  ];

  const moneyOptions = [2000, 1500, 1000, 500, 400, 300, 200, 100];

  return (
    <>
      <div className="adminTopBox">
        <div className="container">
          <label>日付</label>
          <input
            className="input"
            type="date"
            id="date"
            value={dateValue}
            onChange={handleDateChange}
          ></input>
        </div>
        <div className="container">
          <label htmlFor="usage">名目</label>
          <input
            className="input"
            list="items"
            type="text"
            id="usage"
            value={usageValue}
            onChange={handleUsageChange}
            disabled={isUsage}
          />
          <datalist id="items">
            {usageOptions.map((option, index) => (
              <option key={index} value={option} />
            ))}
          </datalist>
        </div>
        <div className="container">
          <label htmlFor="deposit">預金</label>
          <input
            className="input"
            list="money"
            type="number"
            id="deposit"
            value={depositValue}
            onChange={handleDepositChange}
            disabled={isDeposit}
          ></input>
          <datalist id="money">
            {moneyOptions.map((option, index) => (
              <option key={index} value={option} />
            ))}
          </datalist>
        </div>
        <div className="container">
          <label htmlFor="drawer">引出し額</label>
          <input
            className="input"
            list="money"
            type="number"
            id="drawer"
            value={drawerValue}
            onChange={handleDrawerChange}
            disabled={isDrawer}
          ></input>
          <datalist id="money">
            {moneyOptions.map((option, index) => (
              <option key={index} value={option} />
            ))}
          </datalist>
        </div>
      </div>
      <div className="adminRecordBox">
        <button>削除する</button>
        <div>
          <label>
            <input
              name="bank"
              type="radio"
              onClick={() => {
                setRadioCheck("deposit");
              }}
            ></input>
            預金
          </label>
          <label>
            <input
              name="bank"
              type="radio"
              onClick={() => {
                setRadioCheck("drawer");
              }}
            ></input>
            引出
          </label>
          <label>
            <input
              name="bank"
              type="radio"
              onClick={() => {
                setRadioCheck("interest");
              }}
            ></input>
            金利
          </label>
        </div>
        <button onClick={entryDataPost}>記帳する</button>
      </div>
    </>
  );
};
