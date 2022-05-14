import React, { useEffect, useState } from 'react';

function ListProducts() {
  const [dados, setDados] = useState({});

  useEffect(() => {
    fetch('http://localhost:3004/products')
      .then((resp) => resp.json())
      .then((resp) => setDados(resp))
      .catch();
  }, []);

  return (
    <>
      <h1>List Products</h1>
      <ul>
        {dados.length > 0 && dados.map((value) => (
          <>
            <li key={value.id}>{value.title}</li>
            <img src={value.imageUrl} alt={value.title} />
          </>
        ))}
      </ul>
    </>
  );
}

export default ListProducts;
