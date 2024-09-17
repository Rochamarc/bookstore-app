import Link from 'next/link';

const NavBar = () => {
  return (
    <nav style={{
      marginBottom: '20px',
      borderBottom: '1px solid #ddd',
      paddingBottom: '10px',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
        <h1>Welcome to the BookStore</h1>
        <Link href="/books" style={{ margin: '0 10px', textDecoration: 'none', color: '#0070f3' }}>
            Books
        </Link>
        <Link href="/authors" style={{ margin: '0 10px', textDecoration: 'none', color: '#0070f3' }}>
            Authors
        </Link>
        <Link href="/publishers" style={{ margin: '0 10px', textDecoration: 'none', color: '#0070f3' }}>
            Publishers
        </Link>
        <Link href="/genres" style={{ margin: '0 10px', textDecoration: 'none', color: '#0070f3' }}>
            Genres
        </Link>
    </nav>
  );
};

export default NavBar;
