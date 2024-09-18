// Função para buscar os dados do livro
async function getBookData(id) {
  const res = await fetch(`http://backend:8000/books/books/${id}/?format=json`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(`Erro ao buscar o livro: ${res.status}`);
  }

  return res.json();
}

export default async function BookDetail({ params }) {
  const { id } = params;
  const book = await getBookData(id);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>{book.title}</h1>
      <p><strong>Published At:</strong> {book.published_at}</p>
      <p><strong>Was Read?:</strong> {book.was_read}</p>
      <p><strong>Times Read:</strong> {book.times_read}</p>
      <p><strong>To Buy:</strong> {book.to_buy}</p>

      {/* Detalhes da Edição */}
      {book.book_editions.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h2>Edition Details</h2>
          {book.book_editions.map((edition, index) => (
            <div key={index} style={{
              border: '1px solid #ddd',
              padding: '10px',
              margin: '10px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}>
              <p><strong>Book Name:</strong> {edition.book_name}</p>
              <p><strong>Format Type:</strong> {edition.format_type}</p>
              <p><strong>ISBN:</strong> {edition.isbn}</p>
              <p><strong>Pages:</strong> {edition.pages}</p>
              <p><strong>Publisher:</strong> {edition.publisher_name}</p>
            </div>
          ))}
        </div>
      )}

      {/* Link para o autor */}
      <div style={{ marginTop: '20px' }}>
        <p>
          <strong>Author:</strong> 
          <a href={`/authors/${book.author.split('/').slice(-2, -1)}`} style={{ textDecoration: 'underline', color: 'blue' }}>
            {book.author_name}
          </a>
        </p>
      </div>

      {/* Gêneros */}
      {book.book_genres.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h2>Genres</h2>
          <ul>
            {book.book_genres.map((genre, index) => (
              <li key={index}>{genre}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
