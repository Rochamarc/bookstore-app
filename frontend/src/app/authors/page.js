import { API_DOCKER_HOST } from "@/app/utils/apiConfig";

export default async function Authors() {
  let authors = [];

  try {
    const res = await fetch(`${API_DEFAULT_HOST}/authors/?format=json`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Erro ao buscar dados');
    }

    authors = await res.json();
  } catch (error) {
    console.error("Erro ao fazer o fetch da API:", error);
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center', color: '#f9f9f9' }}>
      <h1 style={{ fontSize: '36px', fontFamily: 'Georgia, serif', color: '#9e9e9e' }}>Autores</h1>
      {authors.length > 0 ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
          {authors.map((author) => (
            <div key={author.url} style={{
              backgroundColor: '#282828',
              border: '1px solid #4f4f4f',
              margin: '10px',
              padding: '20px',
              width: '300px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              color: '#f9f9f9',
            }}>
              <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '24px', color: '#9e9e9e' }}>{author.name}</h2>
              <a href={`/authors/${author.url.split('/').slice(-2, -1)}`} style={{ textDecoration: 'none', color: '#9e9e9e' }}>
                Ver Detalhes do Autor
              </a>
            </div>
          ))}
        </div>
      ) : <p>Nenhum autor encontrado.</p>}
    </div>
  );
}
