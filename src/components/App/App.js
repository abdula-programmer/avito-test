import React, { useEffect, useState } from "react";
import hacker from "../../store/hacker";
import { observer } from "mobx-react-lite";

const App = observer(() => {
  const { itemsId, getAllStories, items } = hacker;

  useEffect(() => {
    getAllStories()
  }, []);

  return (
    <div>
      {
        items.map(item => {
          return item
        })
      }
    </div>
  );
});

export default App;
