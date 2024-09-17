import NavBar from "../components/NavBar";

export default async function GenresPage() {
  let genres = [];

  try {
    const res = await fetch('http://backend:8000/books/genres/?format=json', {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error(`Error Fetching Genres: ${res.status}`);
    }

    genres = await res.json();
  } catch (error) {
    console.error("Error fetching API:", error);
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <NavBar />
      <h1>Genres List</h1>
      {genres.length > 0 ? (
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          padding: '20px'
        }}>
          {genres.map((genre) => (
            <div key={genre.url} style={{
              backgroundColor: 'white',
              border: '1px solid #ddd',
              margin: '10px',
              padding: '20px',
              width: '300px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}>
              <h2>{genre.genre}</h2>
            </div>
          ))}
        </div>
      ) : (
        <p>No genres found or error loading data.</p>
      )}
    </div>
  );
}
