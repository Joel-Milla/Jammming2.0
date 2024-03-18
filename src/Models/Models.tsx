export interface Song {
    id: string;
    name: string;
    artist: string;
    album: string;
    uri: string;
}

export interface TrackProperties {
    song: Song;
}