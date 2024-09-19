export default async function Books() {
  let books = [];

  try {
    const res = await fetch('http://backend:8000/books/books/?format=json', {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Erro ao buscar dados');
    }

    books = await res.json();
  } catch (error) {
    console.error("Erro ao fazer o fetch da API:", error);
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center', color: '#f9f9f9' }}>
      <h1 style={{ fontSize: '36px', fontFamily: 'Georgia, serif', color: '#9e9e9e' }}>Livros</h1>
      {books.length > 0 ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
          {books.map((book) => (
            <div key={book.url} style={{
              backgroundColor: '#282828',
              border: '1px solid #4f4f4f',
              margin: '10px',
              padding: '20px',
              width: '300px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              color: '#f9f9f9',
            }}>
              <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '24px', color: '#9e9e9e' }}>{book.title}</h2>
              <a href={`/books/${book.url.split('/').slice(-2, -1)}`} style={{ textDecoration: 'none', color: '#9e9e9e' }}>
                Ver Detalhes do Livro
              </a>
            </div>
          ))}
        </div>
      ) : <p>Nenhum livro encontrado.</p>}
    </div>
  );
}
