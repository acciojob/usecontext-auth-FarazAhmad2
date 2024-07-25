import React, { useContext } from "react";
import { AuthContext } from "./App";

const Auth = () => {
  const { handleChange, tick } = useContext(AuthContext);
  return (
    <div>
      <p className="authText">
        {!tick
          ? "you are not authenticated"
          : "You are now authenticated, you can proceed"}
      </p>
      <label>
        <input onChange={handleChange} type="checkbox" checked={tick} />
        I'm not a robot
      </label>
    </div>
  );
};

export default Auth;
