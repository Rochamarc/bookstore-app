import BookCard from '../components/BookCard';

export default async function BooksPage() {
  let books = [];
  try {
    const res = await fetch('http://localhost:8000/books/books/?format=json', {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch books: ${res.status}`);
    }

    books = await res.json();
  } catch (error) {
    console.error("Error fetching books from API:", error);
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Book List</h1>
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
        <p>No books found or error loading data.</p>
      )}
    </div>
  );
}
