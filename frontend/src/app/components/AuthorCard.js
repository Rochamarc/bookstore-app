import Link from 'next/link';

export default function AuthorCard({ author }) {
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
      <h2>{author.name}</h2>
      <p><strong>Nationality:</strong> {author.nationality}</p>
      <Link href={`/authors/${author.url.split('/').slice(-2, -1)}`}>
        Ver Detalhes do Autor
      </Link>
    </div>
  );
}

// <p><strong>Criado em:</strong> {new Date(author.created_at).toLocaleDateString()}</p>
// <p><strong>Última atualização:</strong> {new Date(author.updated_at).toLocaleDateString()}</p>
