import * as React from "react";

type Props = {
  onSearch: (s: string) => void

}


const SearchBar = ({onSearch}: Props) => {
    const [searchText, setSearchText] = React.useState("");
    
    const onSearchChange = (event: React.FormEvent<HTMLInputElement>) => {
        setSearchText(event.currentTarget.value)
        
        onSearch(searchText)
      };
    
    return (
      <>
        <div className="searchnotes">
        <input
          className="p-4 border-2 searchnotes__input"
          name="search"
          value={searchText}
          onChange={onSearchChange}
          id="search"
          type="text"
          placeholder="search your notes..."
        />
        <button className="p-4 border-2 bg-slate-700 text-gray-300" type="submit">Search</button>
        
      </div>
      </>
    );
}

export default SearchBar;

