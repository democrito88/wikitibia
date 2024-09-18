import React from 'react';
import Headline from "../../types/new/headline";
import Card from "../Card";
import { Link } from 'react-router-dom';

const HeadlineBox = <Props extends Headline>(props: Props) => {
    return(
        <Card>
            <div className="article-card-body">
                <small>{props.date}</small>
                <h3>{props.news}</h3>
                <Link to={`news/id/${props.id}`}>Read more...</Link>
            </div>
        </Card>
    );
}

export default HeadlineBox;