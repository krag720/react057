import React from "react";



import "./styles.css";

const Item = () => {
    let itemArray = [
        {
            id: 1,
            description: "В корзине 25 яблок. 5 из них зеленые, 7 красных, а остальные желтые. Сколько желтых яблок в корзине?",

            option1: "13",
            option2: "10",
            option3: "8",
            option4: "5",

            correct: "13",
        },
        {
            id: 2,
            description: "У фермера было 12 кур и 18 уток. Сколько всего у него было ног?",

            option1: "60",
            option2: "72",
            option3: "90",
            option4: "108",

            correct: "72",
        },
        {
            id: 3,
            description: "Прямоугольник имеет длину 10 см и ширину 5 см. Сколько квадратов со стороной 1 см можно вырезать из этого прямоугольника?",

            option1: "20",
            option2: "50",
            option3: "100",
            option4: "25",

            correct: "50",
        }
    ];

    let pageContent = itemArray.map((item) => {
        return (
            <div>
                <h3>{item.description}</h3>

                <div className="options">
                    <div>
                        <input id={`${`option-1-${item.id}`}`} type="radio" name={`${`option${item.id}`}`} />
                        <label for={`${`option-1-${item.id}`}`}>{item.option1}</label>
                    </div>

                    <div>
                        <input id={`${`option-2-${item.id}`}`} type="radio" name={`${`option${item.id}`}`} />
                        <label for={`${`option-2-${item.id}`}`}>{item.option2}</label>
                    </div>

                    <div>
                        <input id={`${`option-3-${item.id}`}`} type="radio" name={`${`option${item.id}`}`} />
                        <label for={`${`option-3-${item.id}`}`}>{item.option3}</label>
                    </div>

                    <div>
                        <input id={`${`option-4-${item.id}`}`} type="radio" name={`${`option${item.id}`}`} />
                        <label for={`${`option-4-${item.id}`}`}>{item.option4}</label>
                    </div>
                </div>
            </div>
        );
    });

    return pageContent;
};

export default Item;