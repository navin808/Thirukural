import './SearchForm.css';

function SearchForm({ onSearchSubmit }) {

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearchSubmit(event.target.kuralNumber.value);
  }

  return (
    <form onSubmit={handleSubmit} className="search-container">
      <input id="kuralNumber" className="search-input" placeholder="Kural number" type="number" min="1" max="1330" required />
      <button type="submit" className="search-button">Search</button>
    </form>
  );
}

export default SearchForm;
