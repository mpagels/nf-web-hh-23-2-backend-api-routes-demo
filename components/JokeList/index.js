import useSWR from "swr";

export default function JokeList() {
  const { data } = useSWR("/api/jokes");

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <ul>
      {data.map((joke) => (
        <li key={joke.id}>
          <button type="button" onClick={() => router.push(`/${joke.id}`)}>
            {joke.joke}
          </button>
        </li>
      ))}
    </ul>
  );
}
