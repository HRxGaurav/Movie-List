import React, { useState } from "react";
import Card from "./Component/Card";
import List from "./Component/list";

function App() {
  const [css, setCss] = useState(true);

  const change = () => {
    setCss(!css);
  };
  return (
    <>
      <h1 className="heading_style">MovieList</h1>
      <button className="button" onClick={change}>
        Change View
      </button>

      {List.map((data) => {
        return (
          <Card
            key={data.id}
            change={css ? "inline" : "flex"}
            imgsrc={data.img.src}
            alt={data.img.alt}
            title={`#${data.ranking}-${data.title}(${data.year})`}
            distributor={`Distributor: ${data.distributor}`}
            amount={`Amount: ${data.amount}`}
          />
        );
      })}
    </>
  );
}

export default App;
