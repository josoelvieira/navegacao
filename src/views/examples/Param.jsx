import { useParams } from "react-router-dom";

const Param = (props) => {
    const { id } = useParams();
    return (
        <div className="Param">
            <h1>Passando Paramentros pelo router</h1>
            <p>valor: {id}</p>
        </div>
    );
};
export default Param;
