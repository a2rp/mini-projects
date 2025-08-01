import React, { useEffect, useState } from "react";
import qnaList from "./qna.json";
import { Styled } from "./styled";

const Accordion = () => {
    const [qna, setQna] = useState(qnaList);

    const [allowMulti, setAllowMulti] = useState(false);
    const [clickedQna, setClickedQna] = useState(0);
    const [clickedMultiQna, setMultiClickedQna] = useState([]);

    useEffect(() => {
        // console.log(allowMulti, "allowMulti");
        setClickedQna(0);
        setMultiClickedQna([]);
    }, [allowMulti]);

    const handleQnaClick = (id) => {
        if (clickedQna === id) {
            setClickedQna(0);
        } else {
            setClickedQna(id);
        }
    };

    const handleMultiQnaClick = (qna) => {
        setMultiClickedQna(null);
        let newArray = [...clickedMultiQna];
        // console.log(clickedMultiQna.indexOf(qna));
        if (newArray.includes(qna)) {
            newArray = newArray.filter(item => item !== qna);
            // console.log("includes");
        } else {
            newArray.push(qna);
            // console.log("not includes");
        }
        setMultiClickedQna(clickedMultiQna => newArray);
        // console.log(newArray);
    };

    return (
        <>
            <Styled.Wrapper>
                <div className={"main"}>
                    <div className={"title"}>Accordion</div>
                    <div className={"enableMultiToggleContainer"}>
                        <input
                            type="checkbox"
                            id="accordionMultiToggleCheckbox"
                            onChange={() => setAllowMulti(allowMulti => !allowMulti)}
                        />
                        <label
                            value={allowMulti}
                            htmlFor="accordionMultiToggleCheckbox"
                        >check to enable multi-toggling</label>
                    </div>

                    <div className={"qnaListContainer"}>
                        {qna ? qna.map(item => (
                            <div key={item.id} onClick={() => { !allowMulti ? handleQnaClick(item.id) : handleMultiQnaClick(item.id) }}>
                                <div className={"questionContainer"}>
                                    {item.question}
                                    <span className={"plusSign"}>+</span>
                                </div>
                                <div className={"answerContainer"}>
                                    {!allowMulti ? <>
                                        {item.id === clickedQna
                                            ? <div className={`answer answer${item.id}`}>{item.answer}</div>
                                            : ""}
                                    </> : <>
                                        {clickedMultiQna.includes(item.id)
                                            ? <div className={`answer answer${item.id}`}>{item.answer}</div>
                                            : ""}
                                    </>}
                                </div>
                            </div>
                        )) : "No qna found"}
                    </div>
                </div>
            </Styled.Wrapper>
        </>
    )
}

export default Accordion;

