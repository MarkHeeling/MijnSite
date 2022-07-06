import Spotify from "./Spotify";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl p-5 mx-auto bg-white border-t-2 lg:px-0">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row">
            <p className="text-xs sm:text-sm">
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
