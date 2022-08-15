import Json from "./MOCK_DATA.json";
import "./App.css";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  // const search = () =>{
  //       Json.filter(term=>term.first===searchTerm)
  // }
  //   console.log(Json.filter(term=>term.first===searchTerm))
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {Json.filter(term=>{
          if (searchTerm===""){
              return term
          }
          else if(term.first.toLowerCase().includes(searchTerm.toLowerCase())){
              return term
          }
      }).map((person, index) => {
        return (
          <div key={index}>
            <p>{person.first} {person.last} {person.email}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
