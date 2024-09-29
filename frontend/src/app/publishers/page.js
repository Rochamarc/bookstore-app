import { API_DOCKER_HOST } from "@/app/utils/apiConfig";

export default async function Publishers() {
  let publishers = [];

  try {
    const res = await fetch(`${API_DOCKER_HOST }/publishers/?format=json`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Erro ao buscar dados');
    }

    publishers = await res.json();
  } catch (error) {
    console.error("Erro ao fazer o fetch da API:", error);
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center', color: '#f9f9f9' }}>
      <h1 style={{ fontSize: '36px', fontFamily: 'Georgia, serif', color: '#9e9e9e' }}>Publishers</h1>
      {publishers.length > 0 ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
          {publishers.map((publisher) => (
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
    </div>
  );
}
