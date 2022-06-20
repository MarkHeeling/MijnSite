import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import qs from "qs";

export default function Spotify() {
  const [songName, setSongName] = useState();
  const [artistName, setArtistName] = useState();
  const [songUrl, setSongUrl] = useState(
    `https://open.spotify.com/embed/track/`
  );
  const client_id = "eae2dfdbde8349edac586e9a2eb2f4bf";
  const client_secret = "9ab332b1559241e7ad3b71aa55bd32a0";
  const auth_token = Buffer.from(
    `${client_id}:${client_secret}`,
    "utf-8"
  ).toString("base64");

  const getAuth = async () => {
    try {
      //make post request to SPOTIFY API for access token, sending relavent info
      const token_url = "https://accounts.spotify.com/api/token";
      const data = qs.stringify({ grant_type: "client_credentials" });

      const response = await axios.post(token_url, data, {
        headers: {
          Authorization: `Basic ${auth_token}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      //return access token
      return response.data.access_token;
      //console.log(response.data.access_token);
    } catch (error) {
      //on fail, log the error in console
      console.log(error);
    }
  };
  async function getCurrentSong() {
    //request token using getAuth() function
    const access_token = await getAuth();
    //console.log(access_token);

    const api_url = `https://api.spotify.com/v1/me/player/currently-playing`;
    //console.log(api_url);
    try {
      const response = await axios.get(api_url, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      console.log(response.data);
      setSongName(res.data.item.name);
      setArtistName(res.data.item.artists[0].name);
      setSongUrl(res.data.item.external_urls.spotify);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCurrentSong();
  }, [songName]);

  return (
    <div className="flex flex-row">
      <div className="mr-2">
        <Image src="/spotify-icon-black.png" height={22} width={22} />
      </div>
      <a className="font-medium" target="_blank" href={songUrl}>
        {songName}
      </a>
      <span className="mx-2 font-medium">-</span>
      <p>{artistName}</p>
    </div>
  );
}
