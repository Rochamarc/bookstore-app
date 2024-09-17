import Link from 'next/link';

async function getAuthorData(id) {
    const res = await fetch(`http://backend:8000/books/authors/${id}/?format=json`, {
      cache: 'no-store',
    });
    
    if (!res.ok) {
      throw new Error(`Erro ao buscar o autor: ${res.status}`);
    }
    
    return res.json();
  }
  
  export default async function AuthorDetail({ params }) {
    const { id } = params;
    const author = await getAuthorData(id);
  
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>{author.name}</h1>
        <p><strong>Nacionalidade:</strong> {author.nationality}</p>
  
        <h2>Livros</h2>
        <ul>
          {author.books.length > 0 ? (
            author.books.map((book) => (
              <li key={book.title}>
                <Link href={`/books/${book.url.split('/').slice(-2, -1)}`}>
                    {book.title}
                </Link>
              </li>
            ))
          ) : (
            <p>Nenhum livro encontrado.</p>
          )}
        </ul>
      </div>
    );
  }
  