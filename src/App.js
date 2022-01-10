import { useState } from 'react'
import { useTransition, animated } from '@react-spring/web'
import data from './data'
import EpisodesList from './components/EpisodesList';
import EpisodeDisplay from './components/EpisodeDisplay';

function App() {
	const [episodesList, setEpisodesList] = useState(data)
	const [episodeToShow, setEpisodeToShow] = useState(false)
	const transition = useTransition(episodeToShow, {
		from: { scale: 0.5, opacity: 0 },
		enter: { scale: 1, opacity: 1, delay: 750 },
		leave: { scale: 0.5, opacity: 0 }
	})

	const onSelectEpisode = (selected) => {
		setEpisodesList(
			episodesList.map((episode) =>
				episode.id === selected.id ? { ...episode, selected: true } : { ...episode, selected: false }
			)
		)
		window.scrollTo(0, 0)
		displayEpisode(selected.id)
	}

	const displayEpisode = (id) => {
		setEpisodeToShow(
			episodesList.find((episode) => episode.id === id )
		)
	}

	return (
		<div className="App w-full h-full flex text-white font-sans">
			<div className="flex lg:hidden flex-col items-center justify-center w-full h-screen relative overflow-hidden px-10">
				<img className="absolute top-10 left-10 w-2/3 min-w-[12rem] max-w-[15rem]" src="./images/logo.svg" alt="Compressed FM Logo" />
				<h1 className="text-2xl text-center">Mobile version coming soon...</h1>
			</div>

			<div className="hidden lg:flex w-full h-full">
				<div className="w-2/5 h-full min-h-screen flex flex-col items-start gap-y-10 py-24 pl-48 pr-9 relative border-r-4 border-yellow-300 border-solid">
					<img src="./images/logo.svg" alt="Compressed FM Logo" />
					<EpisodesList episodesList={episodesList} onSelectEpisode={onSelectEpisode} />
					<p className="text-sm font-mono">Tabbed Content App made with <br /> Create React App and TailwindCSS</p>
				</div>
				<div className="w-3/5 h-full fixed right-0 py-24 pl-20 pr-48">
					{transition((style, episodeToShow) =>
						episodeToShow
							?
							<animated.div style={style}>
								<EpisodeDisplay episodeToShow={episodeToShow} />
							</animated.div>
							:
							<animated.h1 style={style} className="flex items-center justify-center pt-60 text-3xl font-bold">Select an episode to preview.</animated.h1>
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
