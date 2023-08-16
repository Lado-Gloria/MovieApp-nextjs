'use client'
import React, { useEffect, useState } from "react";
import { getCharacters } from "./utilities/utilis";
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
    const filteredCharacters =
      character?.characters?.filter(
        (character) =>
          character.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) || [];
    return filteredCharacters;
  };

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
          {handleSearch().length === 0 ? (
            <p className="text-lg text-center mt-8">No results found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {handleSearch().map((item, index) => (
                <Link key={item.id} href={`${item.id}`}>
                  <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow">
                    <div className="h-64 w-64 mx-auto rounded-lg overflow-hidden">
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
                            src="/harry.jpeg"
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
