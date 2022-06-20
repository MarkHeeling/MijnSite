import Spotify from "./Spotify";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl px-5 py-6 mx-auto bg-white border-t-2 md:px-0">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row">
            <p className="text-sm">
              © {new Date().getFullYear()} Mark Heeling
              <span className="text-blue-700">.</span>
            </p>
          </div>
          <Spotify />
        </div>
      </div>
    </footer>
  );
}
