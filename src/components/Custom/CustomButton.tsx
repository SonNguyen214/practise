import { Button } from "antd"

interface IProps {
    title: String,
    handleClick?: () => void;
}

const CustomButton = ({ title, handleClick }: IProps) => {
    return <Button onClick={handleClick} className="custom-btn">
        {title}
    </Button>
}

export default CustomButton