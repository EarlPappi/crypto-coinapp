import { useAuth } from "../../Context/AuthContext";

const Home = () => {

    const { data, loading, error } = useAuth();
    return (
        <div>
            {loading && <h2>Data is Loading</h2>}
           { data && data.map(data =>{
               return (
                   <div style={{
                       padding: '2em',
                       
                   }}>
                       <h2>{ data.title }</h2>
                       <p>{ data.content }</p>
                       <h4>Written By: { data.author }</h4>
                   </div>
               )
           }) }
            {error && <p>{ error }</p>}
        </div>
    );
}

export default Home;