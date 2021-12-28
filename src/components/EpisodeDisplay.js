const EpisodeDisplay = (props) => {
    const episodeToShow = props.episodeToShow
    return (
        <div className="flex gap-x-10">
            <img className="h-full border border-white" src={`./images/${episodeToShow.cover}`} alt="Cover" />
            <div className="flex flex-col">
                <h1 className="text-5xl font-bold mb-10">{episodeToShow.title}</h1>
                <p className="text-lg mb-5">{episodeToShow.description}</p>
                <a className="group h-8 flex items-center justify-start text-yellow-300 font-mono text-lg tracking-widest" href={episodeToShow.link} target="_blank" rel="noreferrer">
                    MORE
                    <img className="group-hover:translate-x-2 transition-transform duration-300 ease-in-out" src="./images/arrow.svg" alt="More Arrow" />
                </a>
            </div>
        </div>
    )
}

export default EpisodeDisplay
