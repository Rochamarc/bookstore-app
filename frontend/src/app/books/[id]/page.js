import { API_DOCKER_HOST } from "@/app/utils/apiConfig";
import BookCard from "@/app/components/BookCard";

// Função para buscar os dados do livro
async function getBookData(id) {
  const res = await fetch(`${API_DOCKER_HOST }/books/${id}/?format=json`, {
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
    <div style={{ padding: '20px', textAlign: 'center', color: '#f9f9f9' }}>
      <h1 style={{ fontSize: '36px', fontFamily: 'Georgia, serif', color: '#9e9e9e' }}>{book.title}</h1>
        
        {/* Link para o autor */}
        <div style={{ marginTop: '20px' }}>
          <a href={`/authors/${book.author.split('/').slice(-2, -1)}`} style={{ textDecoration: 'none', color: '#9e9e9e' }}>
            <h2 style={{ fontSize: '26px', fontFamily: 'Georgia, serif', }}>{book.author_name}</h2>
          </a>
      </div>

      <p><strong>Published At:</strong> {book.published_at}</p>
      <p><strong>Was Read?:</strong> {book.was_read}</p>
      <p><strong>Times Read:</strong> {book.times_read}</p>
      <p><strong>To Buy:</strong> {book.to_buy}</p>
      
      {/* Gêneros */}
      {book.book_genres.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h2 style={{ fontSize: '28px', fontFamily: 'Georgia, serif', color: '#9e9e9e' }}>Genres</h2>
          
          {book.book_genres.map((genre, index) => (
            <p key={index} style={{ pstStyle: 'none', fontSize: '18px', textAlign: 'center' }}>{genre}</p>
          ))}
          
        </div>
      )}

  

      {/* Detalhes da Edição */}
      {book.book_editions.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h2 style={{ fontSize: '28px', fontFamily: 'Georgia, serif', color: '#9e9e9e' }}>Editions</h2>

          {book.book_editions.map((edition, index) => (
            <div key={index} style={{
              border: '1px solid #4f4f4f',
              padding: '10px',
              margin: '10px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              backgroundColor: '#282828',
              color: '#f9f9f9',
            }}>

              {/* Exibir a capa do livro */}
              <div style={{ marginTop: '10px' }}>
                <img 
                  src={edition.book_cover ? edition.book_cover : '/images/book_cover.png'} 
                  alt={edition.book_name}
                  style={{ width: '250px', height: 'auto', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}
                />
              </div>
            
              {/* <p><strong>Book Name:</strong> {edition.book_name}</p> */}
              <p><strong>Publisher:</strong> {edition.publisher_name}</p>
              <p><strong>Format Type:</strong> {edition.format_type}</p>
              <p><strong>ISBN:</strong> {edition.isbn}</p>
              <p><strong>Pages:</strong> {edition.pages}</p>

            </div>
          ))}
        </div>
      )}

    </div>
  );
}
