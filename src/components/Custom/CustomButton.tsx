import { Button } from "antd";

interface IProps {
  title: String;
  className?: String;
  handleClick?: () => void;
}

const CustomButton = ({ title, handleClick, className }: IProps) => {
  return (
    <Button onClick={handleClick} className={`custom-btn ${className}`}>
      {title}
    </Button>
  );
};

export default CustomButton;
