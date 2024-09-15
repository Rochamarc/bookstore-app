// Componente BookCard que recebe as props do livro e renderiza as informações
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
        <p><strong>Autor:</strong> {book.author_name}</p>
        <p><strong>Nacionalidade do Autor:</strong> {book.author_nationality}</p>
        <p><strong>Foi lido:</strong> {book.was_read}</p>
        <p><strong>Vezes lido:</strong> {book.times_read}</p>
        <p><strong>Comprar:</strong> {book.to_buy}</p>
        <p><strong>Criado em:</strong> {new Date(book.created_at).toLocaleDateString()}</p>
        <p><strong>Última atualização:</strong> {new Date(book.updated_at).toLocaleDateString()}</p>
      </div>
    );
  }
  