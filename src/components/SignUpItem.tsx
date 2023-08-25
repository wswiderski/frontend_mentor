import { FC } from "react";
import itemIcon from "../assets/icon-list.svg";

const SignUpItem: FC<{ text: string }> = ({ text }) => {
  return (
    <div>
      <img src={itemIcon} alt="List item image" />
      <p>{text}</p>
    </div>
  );
};

export default SignUpItem;
