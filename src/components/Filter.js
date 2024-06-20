import React, { useState, useEffect } from 'react';

function Filters({ onGenreSelectedChange }) {
    const arrayGenre = [
        "Ação", "Aventura", "RPG", "Simulação", "Estratégia", "Esportes",
        "Quebra-cabeça", "Corrida", "Luta", "Tiro", "Plataforma",
        "Sobrevivência", "Terror", "Sandbox", "MMORPG", "Música",
        "Roguelike", "Visual Novel", "Stealth", "Metroidvania",
        "Battle Royale", "Party", "Jogo de cartas", "MOBA"
    ];

    const [selectedGenres, setSelectedGenres] = useState(() => {
        const saved = localStorage.getItem('selectedGenres');
        return saved ? JSON.parse(saved) : [];
    });

    const [, setGenreSelected] = useState(false);
    const [limitReached, setLimitReached] = useState(false);

    useEffect(() => {
        localStorage.setItem('selectedGenres', JSON.stringify(selectedGenres));
        const isSelected = selectedGenres.length > 0;
        setGenreSelected(isSelected);
        onGenreSelectedChange(isSelected, selectedGenres);
    }, [selectedGenres, onGenreSelectedChange]);

    const handleCheckboxChange = (genre) => {
        if (selectedGenres.includes(genre)) {
            setSelectedGenres(selectedGenres.filter(g => g !== genre));
        } else if (selectedGenres.length < 3) {
            setSelectedGenres([...selectedGenres, genre]);
        } else {
            setLimitReached(true);
            setTimeout(() => {
                setLimitReached(false);
            }, 2000); 
        }
    };

    const divFilters = () => {
        return arrayGenre.map((genre, index) => (
            <div id='selection' key={index}>
                <input 
                    type="checkbox" 
                    name="genre" 
                    value={genre} 
                    className="filter-checkbox" 
                    checked={selectedGenres.includes(genre)} 
                    onChange={() => handleCheckboxChange(genre)} 
                />
                <h1>{genre}</h1>
            </div>
        ));
    };

    return (
        <div id="filter">
            {divFilters()}
            {limitReached && (
                <div id="limit" className="limit-message">
                    Limite de 3 gêneros atingido
                </div>
            )}
        </div>
    );
}

export default Filters;