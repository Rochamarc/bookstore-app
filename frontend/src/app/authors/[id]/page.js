import { API_DOCKER_HOST } from "@/app/utils/apiConfig";

export default async function AuthorDetail({ params }) {
  const { id } = params;
  let author = {};

  try {
    const res = await fetch(`${API_DEFAULT_HOST}/authors/${id}/?format=json`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Erro ao buscar dados do autor');
    }

    author = await res.json();
  } catch (error) {
    console.error("Erro ao fazer o fetch da API:", error);
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center', color: '#f9f9f9' }}>
      <h1 style={{ fontSize: '36px', fontFamily: 'Georgia, serif', color: '#9e9e9e' }}>{author.name}</h1>
      <p><strong>Nacionalidade:</strong> {author.nationality}</p>
      {/* Adicione outras informações que desejar */}
    </div>
  );
}
