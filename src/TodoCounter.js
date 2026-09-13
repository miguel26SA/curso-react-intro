import './TodoCounter.css';

function TodoCounter({total, completed}) {

  return (

    <h1 className="TodoCounter">
      Has completado<br />
      <strong>{completed} de {total}</strong> TODOS
    </h1>
  );
}

export { TodoCounter };