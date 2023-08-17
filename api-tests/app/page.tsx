
'use client'
import "tailwindcss/tailwind.css";
import React, { useEffect, useState } from "react";
import { getCharacters } from "@/app/utilities/utilis";
import Image from "next/image";
import Link from "next/link";

interface Character {
  id: number;
  image: string;
  name: string;
  dateOfBirth: number[];
  genre_id: number[];
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
    if (character) {
      return character.characters.filter((char) =>
        char.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return [];
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="bg-gray-800 p-4 text-black">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/potter.png" 
              alt="Logo"
              width={170} 
              height={170} 
            />
           
          </div>
          <div>
            <input
              type="text"
              placeholder="Search characters..."
              className="px-3 py-2 rounded-lg mr-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className="bg-blue-500 text-black px-4 py-2 rounded-lg"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="bg-gray-100 min-h-screen p-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {character && handleSearch().map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
                {item.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.image}
                    alt={item.name}
                    className="mx-auto rounded-lg h-64 w-64 object-cover mb-4"
                  />
                ) : (
                  <div className="h-64 w-64 flex items-center justify-center bg-gray-200 text-black">
                    No Image Available
                  </div>
                )}
                <p className="text-lg font-semibold text-center">{item.name}</p>
                <p className="text-lg text-center">Date Of Birth {item.dateOfBirth}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
