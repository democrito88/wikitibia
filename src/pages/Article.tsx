import React, { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

interface World {
    id: number;
    name: string;
    description: string;
  }
  
  interface Creature {
    id: string;
    title: string;
    content: string;
  }
  
  // You can use a union type if your data can be of multiple structures
  type ApiResponse = World | Creature;

const formatUrl = (url: string | undefined) => {
    if(url === undefined){
        return "";
    }
    
    return url.replace("s", "");
}

const Article = () => {
    const { classList, name } = useParams<{ classList: string | undefined; name: string }>();

    const [data, loading] = useFetch<ApiResponse>(`${formatUrl(classList)}/${name}`);
    console.log(data);

    if(loading){
        return(
        <div> 
            <p>Carregando...</p>
        </div>);
    }

    return (
        <div>
            <h1>{name}</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default Article;