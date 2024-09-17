import Link from 'next/link';
import NavBar from '../components/NavBar';

export default async function BooksPage() {
  let books = [];
  try {
    const res = await fetch('http://backend:8000/books/books/?format=json', {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error(`Error Searching Books: ${res.status}`);
    }

    books = await res.json();
  } catch (error) {
    console.error("Error fetching API:", error);
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <NavBar />
      <h1>Books List</h1>
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
              <p><strong>Author:</strong> {book.author_name}</p>
              <Link href={`/books/${book.url.split('/').slice(-2, -1)}`}>
                Book Deatils
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
