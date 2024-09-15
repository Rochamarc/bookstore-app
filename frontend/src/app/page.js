import Link from 'next/link';

export default async function Home() {
  let books = [];
  try {
    const res = await fetch('http://localhost:8000/books/books/?format=json', {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error(`Erro ao buscar os livros: ${res.status}`);
    }

    books = await res.json();
  } catch (error) {
    console.error("Erro ao fazer o fetch da API:", error);
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Lista de Livros</h1>
      {books.length > 0 ? (
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          padding: '20px'
        }}>
          {books.map((book) => (
            <div key={book.url} style={{
              backgroundColor: 'white',
              border: '1px solid #ddd',
              margin: '10px',
              padding: '20px',
              width: '300px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}>
              <h2>{book.title}</h2>
              <p><strong>Autor:</strong> {book.author_name}</p>
              <Link href={`/books/${book.url.split('/').slice(-2, -1)}`}>
                Ver Detalhes do Livro
              </Link>
              <br />
              <Link href={`/authors/${book.author.split('/').slice(-2, -1)}`}>
                Ver Detalhes do Autor
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>Nenhum livro encontrado ou erro ao carregar os dados.</p>
      )}
    </div>
  );
}
