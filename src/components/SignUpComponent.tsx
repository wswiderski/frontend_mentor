import image from "../assets/illustration-sign-up-mobile.svg";
import SignUpItem from "./SignUpItem";

const SignUpComponent = () => {
  return (
    <div>
      <img src={image} alt="image" />
      <div>
        <h2>Stay updated!</h2>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <SignUpItem text="Product discovery and building what matters"></SignUpItem>
        <SignUpItem text="Measuring to ensure updates are a success"></SignUpItem>
        <SignUpItem text="And much more!"></SignUpItem>
      </div>
    </div>
  );
};

export default SignUpComponent;
