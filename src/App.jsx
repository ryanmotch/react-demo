import { episodeList } from "./data";
import {useState} from "react"

export default function App() {
  const [episodes] = useState(episodeList);
    const [selectedEpisode, setSelctedEpisode] = useState();

//selected details

 function EpisodeDetails() {
    if (!selectedEpisode) {
      return (
        <section className="details">
          <h2>Episode Details</h2>
          <p>Select an episode to learn more.</p>
        </section>
      );
    }


    return (
      <section className="details">
        <h2>{selectedEpisode.id}</h2>
        <p>
          {selectedEpisode.title}.
        </p>
        
        <address>{selectedPuppy.description}</address>
      </section>
    );
  }

  //roster of episodes

  function Roster() {
    return (
      <section className="roster">
        <h2>Roster</h2>
        <ul className="roster">
          {episodes.map((episode) => (
            <li key={epipsode.id} onClick={() => setSelectedEpisode(Episode)}>
              {episode.name}
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <>
      <header>
        <h1>Episodes</h1>
      </header>
      <main>
        <Roster />
        <EpisodeDetails />
      </main>
    </>
  );
}












