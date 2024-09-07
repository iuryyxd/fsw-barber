export function Footer() {
  return (
    <footer className="w-full h-16 bg-secondary px-5 flex items-center mt-[100px]">
      <span className="regular-xs text-gray-300">
        &copy; {new Date().getFullYear()} Copyright FSW Barber
      </span>
    </footer>
  );
}
