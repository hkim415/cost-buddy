import React, { useState } from "react";
import { DisplayCard, Container } from "../TotalCard/totalCardStyles";
import NameCard from "./NameCard";
import NameForm from "./NameForm"

const TotalCard = ({names, setNames, splitAmounts, setSplitAmounts}) => {
    const [inputText, setInputText] = useState("");

    return (
        <DisplayCard>
            <Container>
                <NameForm
                    inputText={inputText}
                    setInputText={setInputText}
                    names={names}
                    setNames={setNames}
                    splitAmounts={splitAmounts}
                    setSplitAmounts={setSplitAmounts}
                    />
            <ul>
                {names.map((single) => (
                    <NameCard
                        key={single.id}
                        single={single}
                        nameText={single.nameText}
                        setInputText={setInputText}
                        names={names}
                        setNames={setNames}
                        splitAmounts={splitAmounts}
                        setSplitAmounts={setSplitAmounts}
                    />
                ))}
            </ul>
            </Container>
        </DisplayCard>
    )

};

export default TotalCard;