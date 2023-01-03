import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import useValidate from "../hooks/useValidate";
import PasswordItem from "./PasswordItem";

const PasswordValidator = () => {
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setPassword(e.target.value);
    setErrors(useValidate(e.target.value));
  };

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="bg-gray-800 p-10 rounded-md">
      <form className="flex gap-2 pb-5">
        <input
          type={show ? "text" : "password"}
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Type your password here"
          className="bg-gray-700 hover:bg-gray-600 focus:outline-none text-white p-2 rounded-md transition-all duration-300"
        />
        <button
          onClick={handleShow}
          type="button"
          className="bg-gray-700 hover:bg-gray-600 active:bg-gray-500 p-2 rounded-md text-white transition-all duration-300"
        >
          {show ? <AiFillEyeInvisible /> : <AiFillEye />}
        </button>
      </form>

      <ul>
        <PasswordItem isCompleted={errors.length}>
          At least 8 characters
        </PasswordItem>
        <PasswordItem isCompleted={errors.uppercase}>
          At least one uppercase letter
        </PasswordItem>
        <PasswordItem isCompleted={errors.lowercase}>
          At least one lowercase letter
        </PasswordItem>
        <PasswordItem isCompleted={errors.number}>
          At least one number
        </PasswordItem>
      </ul>
    </div>
  );
};

export default PasswordValidator;
