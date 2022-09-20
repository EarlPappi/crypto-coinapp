import { useAuth } from "../../Context/AuthContext";

const Home = () => {

    const { data, loading, error } = useAuth();
    return (
        <div>
            {loading && <h2>Data is Loading</h2>}
           <p>Data Length { data.length }</p>
            {error && <p>{ error }</p>}
        </div>
    );
}

export default Home;