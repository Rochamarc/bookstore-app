import { API_DOCKER_HOST } from "@/app/utils/apiConfig";

export default async function Genres() {
  let genres = [];

  try {
    const res = await fetch(`${API_DEFAULT_HOST}/genres/?format=json`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Erro ao buscar dados');
    }

    genres = await res.json();
  } catch (error) {
    console.error("Erro ao fazer o fetch da API:", error);
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center', color: '#f9f9f9' }}>
      <h1 style={{ fontSize: '36px', fontFamily: 'Georgia, serif', color: '#9e9e9e' }}>Gêneros</h1>
      {genres.length > 0 ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
          {genres.map((genre) => (
            <div key={genre.url} style={{
              backgroundColor: '#282828',
              border: '1px solid #4f4f4f',
              margin: '10px',
              padding: '20px',
              width: '300px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              color: '#f9f9f9',
            }}>
              <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '24px', color: '#9e9e9e' }}>{genre.genre}</h2>
            </div>
          ))}
        </div>
      ) : <p>Nenhum gênero encontrado.</p>}
    </div>
  );
}
