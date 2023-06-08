import React from "react";

export const MyPassbook = ({ passbook }) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>日付</th>
            <th>名目</th>
            <th>入金</th>
            <th>出金</th>
            <th>預金総額</th>
          </tr>
        </thead>
        {passbook.map((el, index) => (
          <tbody>
            <tr key={el.id}>
              <td>
                <p>{el.date.split("T")[0]}</p>
              </td>
              <td>
                <p>{el.usage}</p>
              </td>
              <td>
                <p>{el.deposit.toLocaleString()}</p>
              </td>
              <td>
                <p>{el.drawer.toLocaleString()}</p>
              </td>
              <td>
                <p>{el.amount.toLocaleString()}</p>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
};
