import Row from "./row/row";
import React from "react";

const Rows = (props) => {
  return (
    <div
      style={{
        width: "100%",
        padding: "1rem",
        boxSizing: "border-box",
        overflow: "hidden ",
      }}
    >
      <Row
        title="Trending Now"
        fetchUrl={props.request.fetchTranding}
        isLarge={false}
      />
      <Row title="Top Rated" fetchUrl={props.request.fetchTopRated} />
      <Row
        title="Netflix Original"
        fetchUrl={props.request.fetchNetflixOriginals}
      />
      <Row title="Action Movies" fetchUrl={props.request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={props.request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={props.request.fetchHorrorMovies} />
      <Row
        title="Romance Movies"
        fetchUrl={props.request.fetchRomanticMovies}
      />
      <Row title="Up Coming" fetchUrl={props.request.fetchUpComing} />
    </div>
  );
};

export default Rows;
