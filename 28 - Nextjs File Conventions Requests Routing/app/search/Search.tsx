"use client";
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";

function Search() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState<string>("");
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchValue?.trim().length === 0) return;
    router.push(`/search/${searchValue}`);
    setSearchValue("");
  };
  return (
    <div>
      <form
        style={{ display: "flex", padding: "1rem", gap: "1rem" }}
        onSubmit={handleSearch}
      >
        <input
          placeholder="Search"
          style={{ padding: "5px 10px" }}
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
        <button
          style={{
            padding: "5px 10px",
            borderRadius: "10px",
            border: "none",
            background: "darkblue",
            color: "white",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
