import './styles/App.css';
import { LineGraph } from './components/Line';
import Filters from './components/Filter';
import { useState } from 'react';

function App() {
    const [showFilter, setShowFilter] = useState(false);
    const [genreSelected, setGenreSelected] = useState(false);
    const [selectedGenresApp, setSelectedGenresApp] = useState([]);

    const handleGenreSelectedChange = (isSelected, selectedGenres) => {
        setGenreSelected(isSelected);
        setSelectedGenresApp(selectedGenres);
    };

    const handleChange = (event) => {
        console.log(event.target.value);
    };

    const listGenresSelected = () => {
        let genresString = selectedGenresApp.map(genre => genre).join(', ');
        return genresString;
    };

    return (
        <div className="gameStatsTracker">
            <div id='filterBarDiv'>
                <h1 id="title">
                    Game Stats Tracker
                </h1>
                <button id='filterButton' onChange={handleChange} onClick={
                    () => setShowFilter(!showFilter)
                    } value='Filtrar'>
                    Filtrar
                </button>
            </div>

            <div id='graphicDiv'>
                {showFilter && <Filters onGenreSelectedChange={handleGenreSelectedChange} />}
                
                {!genreSelected ? (
                    <ul>
                        <li>
                            <h1>Gêneros mais jogados no último mês</h1>
                            <LineGraph dataKey="month" />
                        </li>
                        <li>
                            <h1>Gêneros mais jogados do ano</h1>
                            <LineGraph dataKey="year" />
                        </li>
                        <li>
                            <h1>Gêneros mais jogados na semana</h1>
                            <LineGraph dataKey="week" />
                        </li>
                        <li>
                            <h1>Gêneros mais jogados nos últimos anos</h1>
                            <LineGraph dataKey="fiveYears" />
                        </li>
                    </ul>
                ) : (
                    <div id="chartWithFilter">
                        <h1>Gênero: {listGenresSelected()}</h1>
                        <LineGraph title={`Gênero: ${listGenresSelected()}`} dataKey={selectedGenresApp} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;