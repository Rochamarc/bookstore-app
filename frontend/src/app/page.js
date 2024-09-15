// Página principal que faz o fetch dos livros e os exibe
export default async function Home() {
  const res = await fetch('http://localhost:8000/books/books/?format=json', {
    cache: 'no-store', // Faz o fetch sempre no lado do servidor (SSR) sem cache
  });
  const books = await res.json();

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Lista de Livros</h1>
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
            <p><strong>Nacionalidade do Autor:</strong> {book.author_nationality}</p>
            <p><strong>Foi lido:</strong> {book.was_read}</p>
            <p><strong>Vezes lido:</strong> {book.times_read}</p>
            <p><strong>Comprar:</strong> {book.to_buy}</p>
            <p><strong>Criado em:</strong> {new Date(book.created_at).toLocaleDateString()}</p>
            <p><strong>Última atualização:</strong> {new Date(book.updated_at).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
