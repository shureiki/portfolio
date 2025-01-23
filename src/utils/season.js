const useSeason = () => {
    const seasons = [
        {
            name: 'Hiver',
            color: '#3096FF'
        },
        {
            name: 'Printemps',
            color: '#7d64ff'
        },
        {
            name: 'Été',
            color: '#FFF937'
        },
        {
            name: 'Automne',
            color: '#FF9930'
        }
    ];

    const month = (new Date().getMonth() + 1);

    const seasonIndex = 1;
    // const seasonIndex = Math.floor((month - 1) / 3) % seasons.length;
    const currentSeason = seasons[seasonIndex];

    return {
        seasons,
        currentSeason
    };
}

export default useSeason;