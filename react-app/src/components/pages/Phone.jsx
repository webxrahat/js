import React from "react";
import {
    Link,
    useLoaderData,
    useNavigate,
    useNavigation,
} from "react-router-dom";

const Phone = () => {
    const datas = useLoaderData();

    // onst { id, model, price, image_url } = data;c
    // console.log(datas);
    const navigation = useNavigation();

    return (
        <div>
            {datas.map((d) => (
                <div
                    style={{
                        border: "1px solid black",
                        margin: "10px 15px",
                        padding: "20px",
                    }}
                >
                    <p>{d.id}</p>
                    <p>{d.model}</p>
                    <p>{d.price}</p>
                    <Link to={`/phone/${d.id}`}>Show</Link>
                </div>
            ))}
        </div>
    );
};

export default Phone;
