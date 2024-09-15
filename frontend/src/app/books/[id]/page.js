// Função para buscar os dados do livro
async function getBookData(id) {
    // 
    
    const res = await fetch(`http://localhost:8000/books/books/${id}/?format=json`, {
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
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>{book.title}</h1>
        <p><strong>Author:</strong> {book.author_name}</p>
        <p><strong>Nationality:</strong> {book.author_nationality}</p>
        <p><strong>Was Read?:</strong> {book.was_read}</p>
        <p><strong>Times Read:</strong> {book.times_read}</p>
        <p><strong>To Buy:</strong> {book.to_buy}</p>      
      </div>
    );
  }

//  <p><strong>Criado em:</strong> {new Date(book.created_at).toLocaleDateString()}</p>
//  <p><strong>Última atualização:</strong> {new Date(book.updated_at).toLocaleDateString()}</p>
