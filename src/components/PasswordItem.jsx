import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

const PasswordItem = ({ isCompleted, children }) => {
  return isCompleted ? (
    <li className="text-green-500 flex items-center gap-1 py-1">
      <AiFillCheckCircle />
      {children}
    </li>
  ) : (
    <li className="text-red-500 flex items-center gap-1 py-1">
      <AiFillCloseCircle />
      {children}
    </li>
  );
};

export default PasswordItem;
