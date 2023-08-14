/* eslint-disable @next/next/no-img-element */
'use client'
import { useEffect, useState } from "react";
import { IMAGE_BASE_URL } from "./config";
import { getMovies } from "./utilities/utilis";
interface Movie {
  id: number;
  poster_path: string;
  genre_id: number[];
  title: string;
}
type MovieData = {
  results: Movie[];
};
export default function Home() {
  const [movies, setMovies] = useState<MovieData>();
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData = await getMovies();
        setMovies(movies);
        console.log({ movies });
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <main>
      {movies?.results.map((item) => (
        <div key={item.id}>
          <img
            src={`${IMAGE_BASE_URL}${item.poster_path}`}
            alt={`Poster for ${item.title}`}
          />
        </div>
      ))}
    </main>
  );
}