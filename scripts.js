document.addEventListener('DOMContentLoaded', () => {
    const playlist = document.getElementById('playlist');
    const addSongButton = document.getElementById('addSong');

    const songs = [
        { title: "Song 1", artist: "Artist 1", file: "Jaada_Aavesham_Jithu_Madhavan_Fahadh_Faasil_Sushin_Shya_HUAAYwtusLI_140.mp3" },
        { title: "Song 2", artist: "Artist 2", file: "song2.mp3" },
        { title: "Song 3", artist: "Artist 3", file: "song3.mp3" }
    ];

    function addSong(song) {
        const songElement = document.createElement('div');
        songElement.className = 'song';
        songElement.innerHTML = `  
            <h2>${song.title} - ${song.artist}</h2>
            <audio controls>
                <source src="${song.file}" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
        `;
        playlist.appendChild(songElement);
    }

    // Add initial songs
    
    songs.forEach(song => addSong(song));

    // Add a new song on button click
    
    addSongButton.addEventListener('click', () => {
        const randomSong = songs[Math.floor(Math.random() * songs.length)];
        addSong(randomSong);
    });
});