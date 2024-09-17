'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddAuthor() {
  const [name, setName] = useState('');
  const [nationality, setNationality] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authorData = {
      name,
      nationality,
    };

    try {
      const res = await fetch('http://localhost:8000/books/authors/', {
        method: 'POST',
        dataType: 'Json',
        headers: {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(authorData),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Failed to add author: ${res.status} - ${res.statusText}. Details: ${errorText}`);
      }

      router.push('/authors');
    } catch (error) {
      setError(`Error adding author: ${error.message}`);
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Add a New Author</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit} style={{ display: 'inline-block', textAlign: 'left' }}>
        <div style={{ marginBottom: '10px' }}>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ padding: '5px', margin: '5px', width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Nationality:</label>
          <input
            type="text"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
            required
            style={{ padding: '5px', margin: '5px', width: '100%' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px' }}>
          Add Author
        </button>
      </form>
    </div>
  );
}