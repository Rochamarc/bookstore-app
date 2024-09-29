export default function BookCard({ book }) {
  return (
    <div style={{
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
      <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '18px', color: '#d0d0d0' }}>{book.author_name}</h2>
      <a href={`/books/${book.url.split('/').slice(-2, -1)}`} style={{ textDecoration: 'none', color: '#FFFFFF' }}>
        See book details
      </a>
    </div>
  );
}
