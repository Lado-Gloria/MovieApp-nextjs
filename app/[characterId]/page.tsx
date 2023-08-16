// @jsxRuntime classic
// @jsxFrag React.Fragment
// @ts-nocheck
"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Navigation from "../components/navigation";

type params = {
  params: {
    characterId: string;
  };
};

export default function CharacterDetail({ params: { characterId } }: params) {
  const [character, setCharacter] = useState([]);

  async function getCharacterDetails() {
    const res = await axios.get(
      `https://hp-api.onrender.com/api/character/${characterId}`
    );
    return res.data;
  }

  useEffect(() => {
    async function fetchCharacterDetail() {
      const data = await getCharacterDetails();
      setCharacter(data);
    }
    fetchCharacterDetail();
  }, []);

  return (
    <><div><Navigation/></div><div className="mt-10 w-96 mx-auto p-6 bg-gray-100 rounded-lg shadow-md">

      <Link href="/" className="block text-blue-500 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 inline-block align-middle mr-1 -mt-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a.81.81 0 01-.39-.1c-.26-.12-6.07-2.83-6.07-9.92 0-6.09 5.81-9.8 6.06-9.91a.81.81 0 011.08 0C11.27-4.92 17 0 17 7.08c0 7.09-5.81 9.8-6.06 9.91a.81.81 0 01-.39.1zm0-16.34a.81.81 0 01-.38-.09C8.17-2.09 0 1.71 0 10c0 8.29 8.17 12.09 9.62 12.43a.81.81 0 001.08 0C11.83 22.09 20 18.29 20 10c0-8.29-8.17-12.09-9.62-12.43a.81.81 0 00-.38-.09zM9.44 7.6l2.83-2.83a.75.75 0 111.06 1.06L10.5 9.18V.75a.75.75 0 111.5 0v8.43l-3.3-3.3a.75.75 0 111.06-1.06z"
            clipRule="evenodd" />
        </svg>
        Back
      </Link>
      <div className="bg-white p-6 rounded-lg shadow-md">
        {character.map((char, index) => (
          <div key={index} className="text-black mb-6">
            <div className="font-semibold mb-2">Name: {char.name}</div>
            {char.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={char.image}
                alt={char.name}
                className="h-52 w-48 bg-cover rounded-lg" />
            ) : (
              <div className="h-52 w-48 flex items-center justify-center bg-gray-200 text-black rounded-lg">
                No Image Available
              </div>
            )}
            <div>House: {char.house}</div>
            <div>
              Wand: {char.wand.wood}, {char.wand.core}
            </div>
            <div>Actor: {char.actor}</div>
            <div>Ancestry: {char.ancestry}</div>
          </div>
        ))}
      </div>
    </div></>
  );
}
