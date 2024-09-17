
import NavBar from "../components/NavBar";


export default async function PublishersPage() {
  let publishers = [];

  try {
    const res = await fetch('http://backend:8000/books/publishers/?format=json', {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error(`Error Fetching Publishers: ${res.status}`);
    }

    publishers = await res.json();
  } catch (error) {
    console.error("Error fetching API:", error);
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <NavBar />
      <h1>Publishers List</h1>
      {publishers.length > 0 ? (
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          padding: '20px'
        }}>
          {publishers.map((publisher) => (
            <div key={publisher.url} style={{
              backgroundColor: 'white',
              border: '1px solid #ddd',
              margin: '10px',
              padding: '20px',
              width: '300px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}>
              <h2>{publisher.name}</h2>
            </div>
          ))}
        </div>
      ) : (
        <p>No publishers found or error loading data.</p>
      )}
    </div>
  );
}
