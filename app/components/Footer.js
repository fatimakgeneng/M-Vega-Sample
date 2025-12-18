export default function Footer() {
  return (
    <footer className="py-8 text-center text-neutral-500 bg-neutral-950 transition-all duration-500 hover:text-neutral-300">
      <p>© {new Date().getFullYear()} Mark Vega. All Rights Reserved.</p>
    </footer>
  );
}