import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {

  return (
    <div className="">
      <h1 className="text-lg md:text-3xl text-white m-4">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex m-4">
          {movies?.map((movie) => {return(
            <MovieCard key={movie.id} posterPath={movie.poster_path} title={movie.title} backdropPath={movie.backdrop_path} showRedLine={title!== "Upcoming" ? true : false}/>
          )})}
        </div>
      </div>
    </div>
  );
};
export default MovieList;