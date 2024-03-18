import { Listbox, ListboxItem } from "@nextui-org/react";
import Track from "../Track/Track";

const SONGS = [
    {
        "id": "1",
        "name": "A Brighter Day",
        "artist": "The Sunlights",
        "album": "Morning Rays Morning Rays Morning Rays",
        "uri": "spotify:track:1"
    },
    {
        "id": "2",
        "name": "Night Drive",
        "artist": "Luna Waves",
        "album": "City Lights",
        "uri": "spotify:track:2"
    },
    {
        "id": "3",
        "name": "Eternal Summer",
        "artist": "Golden Coast",
        "album": "Endless Blue",
        "uri": "spotify:track:3"
    },
    {
        "id": "4",
        "name": "Falling Leaves",
        "artist": "Autumn Breeze",
        "album": "Seasonal Sounds",
        "uri": "spotify:track:4"
    },
    {
        "id": "5",
        "name": "Snowflakes",
        "artist": "Winter Dreams",
        "album": "Frosty Mornings",
        "uri": "spotify:track:5"
    },
    {
        "id": "6",
        "name": "Galactic Journey",
        "artist": "Star Voyagers",
        "album": "Space Odyssey",
        "uri": "spotify:track:6"
    },
    {
        "id": "7",
        "name": "Desert Mirage",
        "artist": "Sands of Time",
        "album": "Ancient Echoes",
        "uri": "spotify:track:7"
    },
    {
        "id": "8",
        "name": "Ocean Waves",
        "artist": "Sea Whisperers",
        "album": "Deep Blue",
        "uri": "spotify:track:8"
    },
    {
        "id": "9",
        "name": "Jungle Beats",
        "artist": "Tropical Vibes",
        "album": "Island Adventures",
        "uri": "spotify:track:9"
    },
    {
        "id": "10",
        "name": "Mountain Echo",
        "artist": "High Peaks",
        "album": "The Great Ascent",
        "uri": "spotify:track:10"
    },
    {
        "id": "11",
        "name": "Urban Pulse",
        "artist": "City Soundtrack",
        "album": "Metropolitan Vibes",
        "uri": "spotify:track:11"
    },
    {
        "id": "12",
        "name": "Voyage",
        "artist": "The Explorers",
        "album": "New Horizons",
        "uri": "spotify:track:12"
    },
    {
        "id": "13",
        "name": "Retro Groove",
        "artist": "Vintage Beats",
        "album": "Nostalgic Rhythms",
        "uri": "spotify:track:13"
    },
    {
        "id": "14",
        "name": "Electric Dreams",
        "artist": "Synth Pop",
        "album": "Future Sounds",
        "uri": "spotify:track:14"
    },
    {
        "id": "15",
        "name": "Silent Words",
        "artist": "Quiet Thoughts",
        "album": "Meditative State",
        "uri": "spotify:track:15"
    },
    {
        "id": "16",
        "name": "Lost in Time",
        "artist": "Ephemeral Moments",
        "album": "Temporal Flow",
        "uri": "spotify:track:16"
    },
    {
        "id": "17",
        "name": "Cosmic Love",
        "artist": "Stellar Hearts",
        "album": "Galaxy of Emotions",
        "uri": "spotify:track:17"
    },
    {
        "id": "18",
        "name": "Rainforest Mystery",
        "artist": "Nature's Whisper",
        "album": "Earthen Tales",
        "uri": "spotify:track:18"
    },
    {
        "id": "19",
        "name": "Skyline",
        "artist": "Horizon Glow",
        "album": "View from Above",
        "uri": "spotify:track:19"
    },
    {
        "id": "20",
        "name": "Dreamer's Waltz",
        "artist": "Imaginary Orchestra",
        "album": "Fantasy Suite",
        "uri": "spotify:track:20"
    }
]

function SearchResults() {
    return (
        <>
            <div className=" border-2 border-green-500 rounded-lg text-gray-500 mb-10">
                <h1 className="text-5xl text-green-500 mb-5">Results</h1>
                <Listbox
                    aria-label="Actions"
                    onAction={(key) => alert(key)}
                >
                    {SONGS.map((song) => {
                        return (
                            <ListboxItem key={song.id} color="primary"><Track song={song} /></ListboxItem>
                        )
                    })}
                </Listbox>
            </div>
        </>
    );
}

export default SearchResults;