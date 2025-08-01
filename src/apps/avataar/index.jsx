import RandomAvataars from "./randomAvataars";
import { Styled } from "./styled";

const Avataar = () => {
    return (
        <Styled.Wrapper>
            <div className={"main"}>
                <div className={"randomAvataarContainer"}>
                    <RandomAvataars />
                </div>
            </div>
        </Styled.Wrapper>
    )
}

export default Avataar

