import useSWR from "swr";

export default function Spotify() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/spotify", fetcher);
  return (
    <>
      <section className="bg-gray-600">
        <main className="flex items-center justify-center">
          {console.log(data)}
          <p>test</p>
        </main>
      </section>
    </>
  );
}
