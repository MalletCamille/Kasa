import { useParams } from 'react-router-dom';

function Appartment() {
  const { appartmentid } = useParams();

  return (
    <div>
      <h1>Bel appartement meublé</h1>
      <p>ID de l'appartement : {appartmentid}</p>
    </div>
  );
}

export default Appartment;