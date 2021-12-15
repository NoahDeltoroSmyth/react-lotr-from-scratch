import CharacterList from '../../components/CharacterList';
import { fetchCharacters } from '../../services/characters';
import React, { useState, useEffect } from 'react';
import Controls from '../../components/charcontrols';

export default function Characters() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [race, setRace] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters(race);
      setData(data);
    };
    fetchData();
  }, [race]);

  const handleClick = async () => {
    const data = await fetchCharacters(race, query);
    setData(data);
  };

  return (
    <div>
      <h1>Characters</h1>
      <Controls {...{ query, setQuery, race, setRace, handleClick }} />
      <CharacterList characters={data} />
    </div>
  );
}
