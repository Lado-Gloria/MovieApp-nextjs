// pages/characters/[id].tsx

import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';
import { getCharacterById } from '../../utilities/utilis';
import React from 'react';

interface CharacterDetail {
    name: ReactNode;
  // Define your character detail fields here
}

export default function CharacterDetailPage() {
  const router = useRouter();
  const { id } = router.query; // Get the character ID from the URL parameter

  const [characterDetail, setCharacterDetail] = useState<CharacterDetail | null>(null);

  useEffect(() => {
    if (id) {
      (async () => {
        try {
          const characterData = await getCharacterById(id as string);
          setCharacterDetail(characterData);
          console.log('Character Detail:', characterData);
        } catch (error) {
          console.error('Error fetching character detail:', error);
        }
      })();
    }
  }, [id]);

  if (!characterDetail) {
    return <div>Loading...</div>;
  }

  // Render the character detail information
  return (
    <div>
      {/* Display the character detail information */}
      {/* Example: */}
      <h1>{characterDetail.name}</h1>
      {/* Add more details as needed */}
    </div>
  );
}
