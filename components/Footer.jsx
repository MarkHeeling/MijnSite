function Footer() {
  return (
    <footer>
      <div className="max-w-6xl px-5 py-6 mx-auto bg-white border-t-2 md:px-0">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col">
            <p className="text-sm">© {new Date().getFullYear()} Mark Heeling</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
