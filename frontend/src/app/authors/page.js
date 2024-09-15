import Link from 'next/link';

export default async function AuthorsPage() {
  let authors = [];
  try {
    const res = await fetch('http://localhost:8000/books/authors/?format=json', {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error(`Erro ao buscar os autores: ${res.status}`);
    }

    authors = await res.json();
  } catch (error) {
    console.error("Erro ao fazer o fetch da API:", error);
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Lista de Autores</h1>
      {authors.length > 0 ? (
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          padding: '20px'
        }}>
          {authors.map((author) => (
            <div key={author.url} style={{
              backgroundColor: 'white',
              border: '1px solid #ddd',
              margin: '10px',
              padding: '20px',
              width: '300px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}>
              <h2>{author.name}</h2>
              <p><strong>Nacionalidade:</strong> {author.nationality}</p>
              <Link href={`/authors/${author.url.split('/').slice(-2, -1)}`}>
                Ver Detalhes do Autor
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>Nenhum autor encontrado ou erro ao carregar os dados.</p>
      )}
    </div>
  );
}
