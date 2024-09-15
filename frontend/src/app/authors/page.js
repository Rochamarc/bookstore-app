import AuthorCard from '../components/AuthorCard';
import Link from 'next/link';

export default async function AuthorsPage() {
  let authors = [];
  try {
    const res = await fetch('http://localhost:8000/books/authors/?format=json', {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch authors: ${res.status}`);
    }

    authors = await res.json();
  } catch (error) {
    console.error("Error fetching authors:", error);
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Author List</h1>
      <Link href="../admin/add-authors" style={{ margin: '20px', display: 'block' }}>
        Add a New Author
      </Link>
      {authors.length > 0 ? (
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          padding: '20px'
        }}>
          {authors.map((author) => (
            <AuthorCard key={author.url} author={author} />
          ))}
        </div>
      ) : (
        <p>No authors found or error loading data.</p>
      )}
    </div>
  );
}
