import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Header() {
  return (
    <header className="max-w-6xl p-5 mx-auto bg-white border-b-2 lg:px-0">
      <div className="flex flex-row justify-between">
        <div className="flex items-center">
          <a className="text-2xl font-bold">
            Mark Heeling<span className="text-blue-700">.</span>
          </a>
        </div>

        <div className="flex gap-2">
          <a
            rel="noreferrer"
            href="https://github.com/MarkHeeling"
            target="_blank"
            className="p-2 text-white delay-75 bg-blue-700 rounded-full hover:bg-blue-800"
          >
            <BsGithub />
          </a>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/markheeling/"
            target="_blank"
            className="p-2 text-white delay-75 bg-blue-700 rounded-full hover:bg-blue-800"
          >
            <BsLinkedin />
          </a>
        </div>
      </div>
    </header>
  );
}
