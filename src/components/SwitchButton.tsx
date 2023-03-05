import React, { useState } from "react";

function SwitchButton () {
  const [isOn, setIsOn] = useState(false);
  return (
        <div className="">
            <button onClick={() => { setIsOn(!isOn); }}>
                {isOn ? "Light" : "Dark"}
            </button>
        </div>
  );
}
export default SwitchButton;
