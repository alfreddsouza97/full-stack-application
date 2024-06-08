import axios from "axios";
import { useEffect, useState } from "react"



export default function FetchData(){

    const [todo, setTodo] = useState([]);

    const [id, setId] = useState(1);


    useEffect(()=>{

        axios.get("https://sum-server.100xdevs.com/todo?id="+id)

        .then(function(res){

            setTodo(res.data.todo)
        })

    }, [id]);
   



    return <div style={{background: "white"}}>

        <h1 style={{fontFamily: "fantasy"}}>The data is fetched from the backend web API of 100xDevs</h1>

        <h3>Backend Web API used: https://sum-server.100xdevs.com/todo?id=1</h3>

        <button onClick={function(){

            if(id>1){

                setId(id-1);
            }
        }}> Previous</button>

        <button onClick={function(){

            if(id<5){

                setId(id+1);
            }
        }}>Next</button>


        <RenderTodo todo={todo}></RenderTodo>



       
    </div>

    
}

function RenderTodo({todo}){

return <div>

    <h1>{todo.title}</h1>

    <h2>{todo.description}</h2>
</div>
  

}