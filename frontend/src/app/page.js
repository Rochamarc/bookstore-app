import Link from 'next/link';

import NavBar from './components/NavBar';

const API_URL = "http://backend:8000/books/books/?format=json";

export default async function Home() {
  let books = [];
  try {
    const res = await fetch(API_URL, {
      cache: 'no-store',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log(res.headers);
    console.log(res.status);
    console.log(res.body);

    if (!res.ok) {
      throw new Error(`Error fetching books: ${res.status}`);
    }

    books = await res.json();
  } catch (error) {
    console.error("Error fetching API:", error);
  }

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <NavBar />
      <h2>Books List</h2>
      {books.length > 0 ? (
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          padding: '20px'
        }}>
          {books.map((book) => (
            <div key={book.url} style={{
              backgroundColor: '#f9f9f9',
              border: '1px solid #ddd',
              margin: '10px',
              padding: '20px',
              width: '300px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease',
            }}>
              <h3 style={{ fontSize: '18px', margin: '0 0 10px' }}>{book.title}</h3>
              <p><strong>Author:</strong> {book.author_name}</p>
              <div>
                <Link href={`/books/${book.url.split('/').slice(-2, -1)}`} style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 'bold' }}>
                  View Book Details
                </Link>
                <br />
                <Link href={`/authors/${book.author.split('/').slice(-2, -1)}`} style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 'bold' }}>
                  View Author Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No books found or error loading data.</p>
      )}
    </div>
  );
}
