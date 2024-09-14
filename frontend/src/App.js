import React from "react";
import BookCard from "./BookCard";
import books from "./books";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Minha Biblioteca</h1>
      </header>
      <section id="book-list" style={styles.bookList}>
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </section>
    </div>
  );
}

const styles = {
  bookList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: '20px'
  }
};

export default App;
