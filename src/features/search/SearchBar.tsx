import * as React from "react";

type Props = {
  onSearch: (s: string) => void

}


const SearchBar = ({onSearch}: Props) => {
    const [searchText, setSearchText] = React.useState("");
    
    const handleSearch = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        onSearch(searchText)
      };
    
    return (
      <>
        <div className="searchnotes">
        <input
          className="p-4 border-2 searchnotes__input"
          name="search"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          id="search"
          type="text"
          placeholder="search your notes..."
        />
        <button className="p-4 border-2 bg-slate-700 text-gray-300" type="submit" onClick={handleSearch}>Search</button>
      </div>
      </>
    );
}

export default SearchBar;

