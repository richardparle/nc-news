import { Link } from "react-router-dom";

const ErrorHandling = ({ status, msg }) => {

  return (
    <div className="ErroHandling">
      <h1>{status}</h1>
      <p>{msg}</p>
      <button><Link to="/">Back to home</Link></button>
    </div>
  );
}

export default ErrorHandling;