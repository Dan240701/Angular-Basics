
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    songName: string;
    details: Details;

}

interface Details{
    artist: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 100,
    songDuration: 350,
    songName: 'La chona',
    details: {
        artist: 'Los tucanes de tijuana',
        year: 1995
    }
}

//Vamos a realizar una desctrucción de objetos para acceder facilmente a sus atributos
const songName = 'cheer up';

const { songName:AnotherSong, details } = audioPlayer;

//Mejor lectura
const { artist } = details;

/*
console.table(audioPlayer);
console.log('Duration: ', audioPlayer.songDuration);
console.log('Song name: ', AnotherSong);
console.log('Details:', artist, '', year);
*/ 


//desestructuración de arreglos
const [, , Trunks = 'No existe personaje'] = ['Goku', 'Vegeta'];   
console.log('Personaje 3: ', Trunks);




























export {};