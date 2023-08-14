// @jsxRuntime classic
// @jsxFrag React.Fragment
// @ts-nocheck
"use client";



import { useEffect, useState } from "react";
import { getMovies } from "@/app/utilities/utilis";
import { IMAGE_BASE_URL } from "./config";
import path from "path";
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
        setMovies(movies.data);
        console.log({ movies });
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, []);
  return (

  <div>
   
    //   {movies.map((item) => (
    //     <div key={item.id}>
    //       <img
    //         src={`${NEXT_PUBLIC_IMAGE_BASE_URL}${item.poster_path}`}
    //         alt={`Poster for ${item.title}`}
    //       />
    //     </div>
    //   ))}
    <div/>
    
  )
}