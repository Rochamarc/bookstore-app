import { API_DEFAULT_HOST } from "@/app/utils/apiConfig";
import BookCard from "../components/BookCard";

export default async function Books() {
  let books = [];

  try {
    const res = await fetch(`${API_DEFAULT_HOST}/books/?format=json`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Erro ao buscar dados');
    }

    books = await res.json();
  } catch (error) {
    console.error("Erro ao fazer o fetch da API:", error);
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center', color: '#f9f9f9' }}>
      <h1 style={{ fontSize: '36px', fontFamily: 'Georgia, serif', color: '#9e9e9e' }}>Livros</h1>
      {books.length > 0 ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
          {books.map((book) => (
            
            // Show a book
            <BookCard key={book.url} book={book} />
            
          ))}
        </div>
      ) : <p>Nenhum livro encontrado.</p>}
    </div>
  );
}
