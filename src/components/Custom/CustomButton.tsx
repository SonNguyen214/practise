import { Button } from "antd";

interface IProps {
  title: string;
  className?: string;
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
