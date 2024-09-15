import Link from 'next/link';

export default function BookCard({ book }) {
  return (
    <div style={{
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
      <p><strong>Author Nationality:</strong> {book.author_nationality}</p>
      <p><strong>Was Read:</strong> {book.was_read}</p>
      <p><strong>Times Read:</strong> {book.times_read}</p>
      <p><strong>To Buy:</strong> {book.to_buy}</p>
      <Link href={`/books/${book.url.split('/').slice(-2, -1)}`}>
        View Book Details
      </Link>
      <br />
      <Link href={`/authors/${book.author.split('/').slice(-2, -1)}`}>
        View Author Details
      </Link>
    </div>
  );
}
