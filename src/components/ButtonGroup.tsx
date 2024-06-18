import { useState } from "react";

const btnSelected = "text-green-700";

export const ButtonGroup = () => {
    const [btnNum, setBtnNum] = useState(1);

    return (
        <div>
            {[1, 2, 3, 4, 5].map((num) => (
                <button
                    onClick={() => setBtnNum(num)}
                    className={btnNum === num ? btnSelected : undefined}
                    key={num}
                >
                    Button {num}
                </button>
            ))}
        </div>
    );
};
