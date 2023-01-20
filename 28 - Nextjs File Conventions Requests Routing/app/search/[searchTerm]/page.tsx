import { SearchResults } from "@/typings";

type searchTermProps = {
  params: {
    searchTerm: string;
  };
};
const getSearchResults = async (searchTerm: string) => {
  const res = await fetch(
    `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`
  );
  const searchData: SearchResults = await res.json();
  return searchData;
};

async function SearchResults({ params: { searchTerm } }: searchTermProps) {
  const searchList: SearchResults = await getSearchResults(searchTerm);
  return (
    <div style={{ display: "flex", gap: "3rem" }}>
      {searchList.organic_results.map((item: any, index: number) => {
        return (
          <div key={index}>
            <h4>Title: {item.title}</h4>
            <p>Description: {item.snippet}</p>
          </div>
        );
      })}

      <h1>x</h1>
    </div>
  );
}

export default SearchResults;
