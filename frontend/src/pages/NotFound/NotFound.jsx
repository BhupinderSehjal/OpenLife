import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found__content">
        <p className="not-found__code">404</p>

        <h1>Page Not Found</h1>

        <p className="not-found__message">
          Looks like you've wandered off course. Let's get you back on track.
        </p>

        <Link to="/" className="not-found__button">
          Back to Home
        </Link>
      </div>
    </main>
  );
}