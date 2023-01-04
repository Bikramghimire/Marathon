import React from "react";
import { debounce } from "lodash";

export default function Debounce() {
  const [characters, setCharacters] = React.useState<string[]>([]);

  async function search(criteria: string) {
    const response = await fetch(
      `https://swapi.dev/api/people/?search=${criteria}`
    );
    const body = await response.json();
    return body.results.map((result: any) => result.name);
  }

  const debouncedSearch = React.useRef(
    debounce(async (criteria) => {
      setCharacters(await search(criteria));
    }, 300)
  ).current;

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    debouncedSearch(e.target.value);
  }
  React.useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return (
    <div className="App">
      <input
        type="search"
        placeholder="Enter your search"
        onChange={handleChange}
      />
      <ul>
        {characters.map((character) => (
          <li key={character}>{character}</li>
        ))}
      </ul>
    </div>
  );
}
