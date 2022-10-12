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
        <div className="mx-auto max-w-3xl flex inset-0 center">
        <input
          className="w-full"
          name="search"
          value={searchText}
          onChange={
            e => setSearchText(e.target.value)

          }
          id="search"
          type="text"
          placeholder="search your notes..."
        />
        <button className="mr-24 w-md p-4 border-2 bg-slate-700 text-gray-300" type="submit" onClick={handleSearch}>Search</button>
      </div>
      </>
    );
}

export default SearchBar;

