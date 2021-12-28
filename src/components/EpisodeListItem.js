const EpisodeListItem = (props) => {
    const { episode, onSelectEpisode } = props
    return (
        <div className={`${episode.selected ? 'selected-episode' : ''} relative group cursor-pointer`} onClick={() => onSelectEpisode(episode)}>
            <p className="text-yellow-300 font-bold uppercase tracking-widest">{`Episode ${episode.id}`}</p>
            <p className="group-hover:text-purple-600 transition-colors duration-150 ease-in font-bold text-2xl">{episode.title}</p>
        </div>
    )
}

export default EpisodeListItem
