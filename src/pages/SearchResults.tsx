import "./SearchResults.scss";

function SearchResults() {
  return (
    <section>
      <input
        name="search"
        id="search"
        type="text"
        placeholder="search your notes..."
      />
      <button>Search</button>
      <div>Search results go here</div>
    </section>
  );
}

export { SearchResults };
