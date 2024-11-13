import React from "react";
import { SetCount } from "./SetCount";

export const SetFcCom = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <SetCount count={count} setCount={setCount} />
        </div>
    );
};
