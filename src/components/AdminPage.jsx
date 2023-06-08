import React, { useState } from "react";

export const AdminPage = () => {
  const [usageValue, setUsageValue] = useState(null);
  const [depositValue, setDepositValue] = useState(null);
  const [drawerValue, setDrawerValue] = useState(null);

  const handleUsageChange = (e) => {
    setUsageValue(e.target.value);
  };

  const handleDepositChange = (e) => {
    setDepositValue(e.target.value);
  };

  const handleDrawerChange = (e) => {
    setDrawerValue(e.target.value);
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
          <input type="date"></input>
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
          />
          <datalist id="items">
            {usageOptions.map((option, index) => (
              <option key={index} value={option} />
            ))}
          </datalist>
        </div>
        <div className="container">
          <label htmlFor="deposit">入金</label>
          <input
            className="input"
            list="money"
            type="number"
            id="deposit"
            value={depositValue}
            onChange={handleDepositChange}
          ></input>
          <datalist id="money">
            {moneyOptions.map((option, index) => (
              <option key={index} value={option} />
            ))}
          </datalist>
        </div>
        <div className="container">
          <label htmlFor="drawer">出金</label>
          <input
            className="input"
            list="money"
            type="number"
            id="drawer"
            value={drawerValue}
            onChange={handleDrawerChange}
          ></input>
          <datalist id="money">
            {moneyOptions.map((option, index) => (
              <option key={index} value={option} />
            ))}
          </datalist>
        </div>
      </div>
      <div className="adminRecordBox"></div>
    </>
  );
};
