import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import News from "../../types/new/news";
import HeadlineBox from "../HeadlineBox";

const groupHeadlineByCategory = (data) => {
    return data.reduce((groupedData, item) => {
      const groupKey = item['category'];
      if (!groupedData[groupKey]) {
        groupedData[groupKey] = [];
      }
      groupedData[groupKey].push(item);
      return groupedData;
    }, {});
};

const Headlines = () => {
    const [headlines, loading] = useFetch<[News, boolean]>("news/latest");
  
    if (loading) {
      return <p>Loading latest news...</p>;
    }
  
    return (
      {headlines?.news.map(headline => 
        <HeadlineBox
          key={headline.id} // Use id if available
          date={headline.date}
          news={headline.news}
          id={headline.id}
          category={headline.category}
          type={headline.type}
          url={headline.url}
          url_api={headline.url_api}
        />
      )} // Add the missing comma here
    );
  };
  
  export default Headlines;