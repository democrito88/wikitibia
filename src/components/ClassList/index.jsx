import React, { useState, useEffect } from 'react';
import { getClassList } from '../../services/tibiaApi';
import "./ClassList.css";
import { Link } from 'react-router-dom';

const ClassList = ({classList}) => {
  const [elements, setElements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchElements = async () => {
      try {
        const data = await getClassList(classList);
        if(data.creatures === undefined){
          setElements(data.worlds.regular_worlds);
        }else{
          setElements(data.creatures.creature_list);
        }
      } catch (error) {
        console.error('Error fetching elements:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchElements();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='caixa-lista'>
      <h1>{classList}</h1>
      <ul className='lista'>
        {elements.map((element, index) => (
          <li key={index}>
            <Link to={`${classList}/${element.name}`}>
              {element.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClassList;
