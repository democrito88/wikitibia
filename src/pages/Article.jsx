import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getClassList } from "../services/tibiaApi";

const Article = () => {
    const {classList} = useParams();
    const {name} = useParams();

    const [subject, setSubject] = useState(null);
    
    useEffect(() => {
        let data = getClassList();
    }, [classList, name]);


    return (
    <div>
        <p>Artigo</p>
        {JSON.stringify(subject)}
    </div>
    );
}

export default Article;