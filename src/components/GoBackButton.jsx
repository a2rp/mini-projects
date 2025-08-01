import { RiArrowGoBackFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const GoBackButton = () => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(-1)}
            style={{ cursor: "pointer" }}
            title="Go Back"
        >
            <RiArrowGoBackFill />
        </div>
    );
};

export default GoBackButton;
