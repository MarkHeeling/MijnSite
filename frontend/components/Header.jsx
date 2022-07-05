export default function Header() {
  return (
    <header className="max-w-6xl px-5 py-6 mx-auto bg-white border-b-2 md:px-0">
      <div className="flex flex-row items-center justify-between">
        <div>
          <a className="text-2xl font-bold">
            Mark Heeling<span className="text-blue-700">.</span>
          </a>
        </div>

        <div>
          <a className="p-2 text-white bg-blue-700 rounded-sm">Contact</a>
        </div>
      </div>
    </header>
  );
}
