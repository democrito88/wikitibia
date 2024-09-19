import React from "react";
import useFetch from "../../hooks/useFetch";
import HeadlineBox from "../HeadlineBox";
import "./Headlines.css";

interface Headline {
  id: number;
  date: string;
  news: string;
  category: string;
  type: string;
  url: string;
  url_api: string;
}

interface News {
  news: Headline[];
}

const groupHeadlineByCategory = (data: Headline[]): Record<string, Headline[]> => {
  return data.reduce((groupedData, item) => {
    const groupKey = item['category'];
    if (!groupedData[groupKey]) {
      groupedData[groupKey] = [];
    }
    groupedData[groupKey].push(item);
    return groupedData;
  }, {} as Record<string, Headline[]>);
};

const Headlines = () => {
  const [headlines, loading] = useFetch<News>("news/latest");

  if (loading) {
    return <p>Loading latest news...</p>;
  }

  if (!headlines) {
    return <p>No news available</p>;
  }

  const groupedHeadlines = groupHeadlineByCategory(headlines.news);

  return (
    <div className="news">
      {Object.entries(groupedHeadlines).map(([category, headlines]) => (
        <>
          <h4>{category}</h4>
          <div key={category} className="news-category">
            {headlines.map((headline) => (
              <HeadlineBox
                key={headline.id}
                date={headline.date}
                news={headline.news}
                id={headline.id}
                category={headline.category}
                type={headline.type}
                url={headline.url}
                url_api={headline.url_api}
              />
            ))}
          </div>
        </>
      ))}
    </div>
  );
};

export default Headlines;
