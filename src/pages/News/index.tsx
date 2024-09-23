import React from 'react';
import { useParams } from "react-router-dom";
import {New} from "../../types/new/new";
import useFetch from "../../hooks/useFetch";
import HtmlRenderer from '../../components/HTMLRenderer';

const News = () => {
    const {id} = useParams();
    const [data, loading] = useFetch<New | null>(`news/id/${id}`);

    if(loading){
        <h5>Loading Page...</h5>
    }

    return(
        <div>
            <h1>{data?.news.title}</h1>
            <small>{data?.news.category}</small>
            {data?.news.content_html === undefined ? 
            "" 
            : 
            <HtmlRenderer htmlContent={data?.news.content_html} />}
        </div>
    );
}

export default News;