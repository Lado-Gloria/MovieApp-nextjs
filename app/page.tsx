
"use client";
import "tailwindcss/tailwind.css";
import React, { useEffect, useState } from "react";
import { getCharacters } from "./utilities/utilis";
import Image from "next/image";
import Link from "next/link";
import Hero from "./components/Hero/Hero";

interface Character {
  id: number;
  image: string;
  name: string;
  dateOfBirth: number[];
}

type CharacterData = {
  characters: Character[];
};

export default function Home() {
  const [character, setCharacter] = useState<CharacterData | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    (async () => {
      try {
        const characterData = await getCharacters();
        setCharacter({ characters: characterData });
        console.log({ characters: characterData });
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    })();
  }, []);

  const handleSearch = () => {
    const filteredCharacters =
      character?.characters?.filter((char: Character) =>
        char.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) || [];
    return filteredCharacters;
  };

  const displayedCharacters = handleSearch().slice(0, 28); 

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="bg-gray-800 p-4 text-black">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/potter.png" alt="Logo" width={170} height={170} />
          </div>
          <div>
            <input
              type="text"
              placeholder="Search characters..."
              className="px-3 py-2 rounded-lg mr-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </nav>
      {searchQuery === "" && <Hero />}
      {/* Main Content */}
      <main className="bg-gray-100 min-h-screen p-8">
        <div className="mt-16 mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Meet the Unforgettable Characters
          </h1>
          <p className="text-4xl font-bold text-gray-800 mb-2">
            of Hogwarts School of Witchcraft and Wizardry
          </p>
        </div>
        <div className="container mx-auto">
          {displayedCharacters.length === 0 ? (
            <p className="text-lg text-center mt-8">No results found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {displayedCharacters.map((item, index) => (
                <Link key={item.id} href={`${item.id}`}>
                  <div className="bg-blue rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow">
                    <div className="h-64 w-64 mx-auto mb-4 rounded-lg overflow-hidden transform hover:scale-105 transition-transform">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={256}
                          height={256}
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center rounded-lg text-black">
                          <Image
                            src="/man.jpg"
                            alt="Default Image"
                            width={256}
                            height={256}
                          />
                        </div>
                      )}
                    </div>
                    <p className="text-lg font-semibold text-center mt-4">
                      {item.name}
                    </p>
                    <p className="text-lg text-center">
                      Date Of Birth {item.dateOfBirth}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
