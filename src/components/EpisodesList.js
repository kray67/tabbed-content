import EpisodeListItem from './EpisodeListItem'

const EpisodesList = (props) => {
    const { episodesList, onSelectEpisode } = props
    return (
        <div className="w-full h-full flex flex-col gap-y-5">
            {episodesList.map((episode) => (
                <EpisodeListItem key={episode.id} episode={episode} onSelectEpisode={onSelectEpisode} />
            ))}
        </div>
    )
}

export default EpisodesList
