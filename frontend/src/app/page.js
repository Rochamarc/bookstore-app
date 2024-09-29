import { API_DEFAULT_HOST } from "@/app/utils/apiConfig";
import { shuffle } from "./utils/functions";
import BookCard from "./components/BookCard";

export default async function Home() {
  let books = [];
  let authors = [];
  let publishers = [];
  let genres = [];

  try {
    const bookRes = await fetch(`${API_DEFAULT_HOST}/books/?format=json`, {
      cache: 'no-store',
    });
    const authorRes = await fetch(`${API_DEFAULT_HOST}/authors/?format=json`, {
      cache: 'no-store',
    });
    const publisherRes = await fetch(`${API_DEFAULT_HOST}/publishers/?format=json`, {
      cache: 'no-store',
    });
    const genreRes = await fetch(`${API_DEFAULT_HOST}/genres/?format=json`, {
      cache: 'no-store',
    });

    if (!bookRes.ok || !authorRes.ok || !publisherRes.ok || !genreRes.ok) {
      throw new Error('Erro ao buscar dados');
    }

    books = await bookRes.json();
    authors = await authorRes.json();
    publishers = await publisherRes.json();
    genres = await genreRes.json();
  } catch (error) {
    console.error("Erro ao fazer o fetch da API:", error);
  }

  // Limitar a 5 itens de cada categoria
  shuffle(books);
  shuffle(authors);
  shuffle(publishers);
  shuffle(genres);

  const limitedBooks = books.slice(0, 5);
  const limitedAuthors = authors.slice(0, 5);
  const limitedPublishers = publishers.slice(0, 5);
  const limitedGenres = genres.slice(0, 5);

  return (
    <div style={{ padding: '20px', textAlign: 'center', color: '#f9f9f9' }}>
      {/* Seção de Livros */}
      <section style={{ marginTop: '40px' }}>
        <h1 style={{ fontSize: '36px', fontFamily: 'Georgia, serif', color: '#9e9e9e' }}>Conheça alguns livros</h1>
        {limitedBooks.length > 0 ? (
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
          {limitedBooks.map((book) => (
             <BookCard key={book.url} book={book} />
           ))}
          </div>
        ) : <p>Nenhum livro encontrado.</p>}
      </section>

      {/* Seção de Autores */}
      <section style={{ marginTop: '40px' }}>
        <h1 style={{ fontSize: '36px', fontFamily: 'Georgia, serif', color: '#9e9e9e' }}>Conheça alguns autores</h1>
        {limitedAuthors.length > 0 ? (
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
            {limitedAuthors.map((author) => (
              <div key={author.url} style={{
                backgroundColor: '#282828',
                border: '1px solid #4f4f4f',
                margin: '10px',
                padding: '20px',
                width: '300px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                color: '#f9f9f9',
              }}>
                <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '24px', color: '#9e9e9e' }}>{author.name}</h2>
                <a href={`/authors/${author.url.split('/').slice(-2, -1)}`} style={{ textDecoration: 'none', color: '#9e9e9e' }}>
                  Ver Detalhes do Autor
                </a>
              </div>
            ))}
          </div>
        ) : <p>Nenhum autor encontrado.</p>}
      </section>

      {/* Seção de Publishers */}
      <section style={{ marginTop: '40px' }}>
        <h1 style={{ fontSize: '36px', fontFamily: 'Georgia, serif', color: '#9e9e9e' }}>Conheça alguns publishers</h1>
        {limitedPublishers.length > 0 ? (
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
            {limitedPublishers.map((publisher) => (
              <div key={publisher.url} style={{
                backgroundColor: '#282828',
                border: '1px solid #4f4f4f',
                margin: '10px',
                padding: '20px',
                width: '300px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                color: '#f9f9f9',
              }}>
                <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '24px', color: '#9e9e9e' }}>{publisher.name}</h2>
              </div>
            ))}
          </div>
        ) : <p>Nenhum publisher encontrado.</p>}
      </section>

      {/* Seção de Gêneros */}
      <section style={{ marginTop: '40px' }}>
        <h1 style={{ fontSize: '36px', fontFamily: 'Georgia, serif', color: '#9e9e9e' }}>Conheça alguns gêneros</h1>
        {limitedGenres.length > 0 ? (
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
            {limitedGenres.map((genre) => (
              <div key={genre.url} style={{
                backgroundColor: '#282828',
                border: '1px solid #4f4f4f',
                margin: '10px',
                padding: '20px',
                width: '300px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                color: '#f9f9f9',
              }}>
                <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '24px', color: '#9e9e9e' }}>{genre.genre}</h2>
              </div>
            ))}
          </div>
        ) : <p>Nenhum gênero encontrado.</p>}
      </section>
    </div>
  );
}
