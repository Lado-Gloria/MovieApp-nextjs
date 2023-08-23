// @jsxRuntime classic
// @jsxFrag React.Fragment
// @ts-nocheck
"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Navigation from "../components/navigation";
import { FaLessThan } from "react-icons/fa"; 

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
  }, );

  return (
    <>
      <div>
        <Navigation />
      </div>
      <div className="mt-10 w-96 mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
        <Link href="/" className="block text-blue-500 mb-4 flex items-center">
          <FaLessThan className="h-5 w-5 inline-block align-middle mr-1 -mt-1" />  Back
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
                  className="h-52 w-48 bg-cover rounded-lg"
                />
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
      </div>
    </>
  );
}
