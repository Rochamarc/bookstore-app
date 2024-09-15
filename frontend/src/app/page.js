import BookCard from './components/BookCard';

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
            <BookCard key={book.url} book={book} />
          ))}
        </div>
      ) : (
        <p>Nenhum livro encontrado ou erro ao carregar os dados.</p>
      )}
    </div>
  );
}
