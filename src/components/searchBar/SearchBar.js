import React, { useEffect, useRef, useState } from "react";
import { Button } from "semantic-ui-react";

function SearchBar() {
  const [searchText, setSearchText] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    const input = inputRef.current;
    const datalist = input.list;

    input.addEventListener("input", () => {
      const value = input.value.toLowerCase();
      const options = Array.from(datalist.options);

      options.forEach((option) => {
        option.classList.toggle(
          "hidden",
          !option.value.toLowerCase().includes(value)
        );
      });
    });
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchText) {
      let searchTextFormatted = searchText.toLowerCase();
      if (
        searchTextFormatted === "vati" ||
        searchTextFormatted === "bhasma" ||
        searchTextFormatted === "arishta"
      ) {
        searchTextFormatted =
          searchTextFormatted.charAt(0).toUpperCase() +
          searchTextFormatted.slice(1);
        window.location.href = `/medicine/getByMedicineCategory/${searchTextFormatted}`;
      } else {
        window.location.href = `/medicine/search?name=${searchTextFormatted}`;
      }
    }
  };

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <form className="form-inline my-2 my-lg-0" onSubmit={handleSearch}>
      <input
        className="form-control mr-sm-2"
        type="text"
        placeholder="Search"
        autoComplete="on"
        list="search-options"
        ref={inputRef}
        value={searchText}
        onChange={handleInputChange}
      />
      <datalist id="search-options">
        <option value="vati" />
        <option value="bhasma" />
        <option value="arishta" />
        {/* <option value="Dabur" />
        <option value="Patanjali" />
        <option value="Ayur Med" /> */}
      </datalist>

      <Button
        className="Button-search-new"
        inverted
        color="green"
        type="submit"
      >
        Search
      </Button>
    </form>
  );
}

export default SearchBar;
