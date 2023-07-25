import Style from "./Button.module.css";

const Button = ({btnName, handelClick}) => {
  return (
    <div className = {Style.box}>
      <button className={Style.button} onClick={() => handelClick()}>
        {btnName}
      </button>
    </div>  
    )
};

export default Button;