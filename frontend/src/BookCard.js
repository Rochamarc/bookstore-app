import React from "react";

function BookCard({ book }) {
  return (
    <div style={styles.bookCard}>
      <h2>{book.title}</h2>
      <p><strong>Autor:</strong> {book.author}</p>
      <p><strong>Gênero:</strong> {book.genre}</p>
      <p><strong>Literatura:</strong> {book.literature}</p>
      <p><strong>Publicado em:</strong> {book.publishedAt}</p>
      <p><strong>Foi lido:</strong> {book.wasRead ? 'Sim' : 'Não'}</p>
      <p><strong>Vezes lido:</strong> {book.timesRead}</p>
      <p><strong>Comprar:</strong> {book.toBuy ? 'Sim' : 'Não'}</p>

      {book.toBuy && (
        <a href="#" style={styles.button}>Comprar</a>
      )}
    </div>
  );
}

const styles = {
  bookCard: {
    backgroundColor: 'white',
    border: '1px solid #ddd',
    margin: '10px',
    padding: '20px',
    width: '300px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  },
  button: {
    display: 'inline-block',
    padding: '10px',
    backgroundColor: '#333',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    marginTop: '10px',
    textAlign: 'center'
  }
};

export default BookCard;
