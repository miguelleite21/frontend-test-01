import "./App.css";
import { useState } from "react";
import { useSelector } from "react-redux";

import SearchAppBar from "./components/header";
import Dshboard from "./components/dashboard";
function App() {
  const [filtredList, setFiltredList] = useState([]);
  const list = useSelector((state) => state.list);

  function showItem(filter) {
    setFiltredList(
      list.filter(
        (item) =>
          item.name.toLowerCase() ===
          filter
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
      )
    );
  }

  return (
    <div className="App">
      <SearchAppBar showItem={showItem} />

      <Dshboard
        list={list}
        filtredList={filtredList}
        setFiltredList={setFiltredList}
      />
    </div>
  );
}

export default App;
