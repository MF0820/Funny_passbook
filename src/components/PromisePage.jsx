import React from "react";

export const PromisePage = () => {
  return (
    <div className="promiseBox">
      <ul>
        <label>【約束事】</label>
        <li>
          <p>帰ってきたら宿題と洗濯物取り込みをする。</p>
        </li>
        <li>
          <p>ゼルダが勝手に歩き出しても怒らない！</p>
        </li>
      </ul>
      <ul>
        【おこづかい条件】
        <li>
          <p>毎月25日に500円/月のお小遣いが振り込まれる</p>
        </li>
        <li>
          <p>テストで100点を取った回数×100円が支払われる</p>
        </li>
        <li>
          <p>毎月24日時点の預金残高に5%分の金利が支払われる</p>
        </li>
      </ul>
    </div>
  );
};
