import "./search.css";
import { MdSearch } from "react-icons/md";

function Search({ handleSearchNote }) {
  return (
    <div className="search__container">
      <MdSearch />
      <input onChange={(event) => handleSearchNote(event.target.value)} />
    </div>
  );
}

export default Search;
