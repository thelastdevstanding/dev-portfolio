export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <p>© {year} Amina Ahmed · Built with React + Vite</p>
    </footer>
  );
}