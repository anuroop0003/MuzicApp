import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import { SongProvider } from "..";
import ReactPlayer from "react-player";
import { FaPlay, FaPause } from "react-icons/fa";

export default function BasicTable() {
  const { Songs } = useContext(SongProvider);
  const [playSong, setPlaySong] = useState({ url: "", play: false });

  const handleClick = (songUrl) => {
    if (playSong.url === songUrl) {
      setPlaySong((prev) => {
        return { ...prev, play: !prev.play };
      });
    } else {
      setPlaySong((prev) => {
        return { url: songUrl, play: !prev.play };
      });
    }
    console.log(playSong);
  };

  return (
    <div>
      <ReactPlayer url={playSong.url} playing={playSong.play} controls={true} style={{display: "none"}} />
      <table>
        {Songs.map((song,i) => (
          <tbody>
            <tr key={i}>
              <td>
                <button onClick={() => handleClick(song.song)} style={{marginLeft: "20px"}}>{playSong.play && playSong.url === song.song ? <FaPause /> : <FaPlay />}</button>
              </td>
              <td>
                <Box
                  component="img"
                  src={song.image}
                  sx={{ height: 75 }}
                  padding={1}
                  borderRadius={3}
                ></Box>
              </td>
              <td>{song.title}</td>
              <td>{song.album}</td>
              <td>{song.artist}</td>
            </tr>
          </tbody>
        ))}
      </table>
      {/* <div><audio controls id="audioplayer">
            <source src="./music/RanamTitleTrack.mp3" type="audio/mpeg" />
            </audio></div> */}
    </div>
  );
}