
import { MOVIE_BACKDROP_URL } from "../../utils/constants";

const MovieCard = ({ posterPath, title, backdropPath, showRedLine}) => {
  if (!posterPath) return null;

  const randomNum = Math.random();
  const showWatchHistory = randomNum < 0.3;

  const randomWidth = Math.floor(Math.random() * 100);

  return (
    <div className="w-screen md:w-80 p-1 rounded-lg hover:scale-105 relative px-2 cursor-pointer">
      <img className="rounded-lg object-cover" alt={title+" poster"} src={MOVIE_BACKDROP_URL + backdropPath} />
      <div className="relative mt-2">
        {showRedLine && showWatchHistory && (
          <>
            <div className="bg-zinc-400 h-1 w-full"></div>
            <div
              className="bg-red-500 h-1 w-full"
              style={{ width: `${randomWidth}%`, position: "absolute", top: 0 }}
            ></div>
          </>
        )}
      </div>
      <h1 className="text-white mt-2 text-lg">{title}</h1>
    </div>
  );
};
export default MovieCard;