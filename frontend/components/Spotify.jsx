import useSWR from "swr";
import { BsSpotify } from "react-icons/bs";

export default function Spotify() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/getCurrentSong", fetcher);
  return (
    <>
      <a
        target="_blank"
        rel="noreferrer"
        href={
          data?.isPlaying
            ? data.songUrl
            : "https://open.spotify.com/user/1188579834?si=860b60e03a0b4dc3"
        }
        className="flex items-center w-auto p-2 border rounded-sm "
      >
        <div className="flex items-center">
          <BsSpotify />
          <p className="ml-2 text-xs font-bold sm:text-sm">
            {data?.isPlaying ? data.title + " -" : "Momenteel luister ik niks"}
          </p>
          <p className="ml-1 text-xs sm:text-sm font-dark">
            {data?.isPlaying ? data.artist : ""}
          </p>
        </div>
      </a>
    </>
  );
}
