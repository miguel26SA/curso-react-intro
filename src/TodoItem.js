function TodoItem(props) {
  return (
    <li className={`TodoItem ${props.completed ? 'TodoItem--completed' : ''}`}>
      <span className="TodoItem-check">✓</span>
      <p>{props.text}</p>
      <span className="TodoItem-delete">×</span>
    </li>
    
  );
}
export { TodoItem };