import { Link } from "react-router";

export function NotFoundPage() {
  return (
    <section className="hero">
      <h2>Page not found</h2>
      <p>There is no page at this address.</p>
      <Link to="/" className="btn">
        Back to the home page
      </Link>
    </section>
  );
}