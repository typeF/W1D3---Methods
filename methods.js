/*
You will need to implement the following functions:

printPlaylists
printTracks
printPlaylist
addTrackToPlaylist
addTrack
addPlaylist
printSearchResults (stretch)
*/

var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  printPlaylists: function () {
    var numTracks = 0;

    for (var playlistID in this.playlists){
      var playlist = this.playlists[playlistID];

      console.log(playlistID + " " + playlist.name + " - " + playlist.tracks.length + " tracks");
      }
  },

  printTracks: function () {
  for (var tracks in this.tracks){
    var trackNum = this.tracks[tracks];
    console.log(tracks + ": " + trackNum.name + " by " + trackNum.artist + " (" + trackNum.album + ")");
    }
  },

  printPlaylist: function (playlistId) {
  playlistSelect = playlistId;
  trackSelection = this.playlists[playlistSelect];
  console.log(trackSelection.id + ": " + trackSelection.name + " - " + trackSelection.tracks.length + " tracks");
  trackId = trackSelection.tracks;
  for (var i = 0; i < trackId.length; i++){
    var track = trackId[i];
    var trackInfo = this.tracks[track];
    console.log(track + ": " + trackInfo.name + " by " + trackInfo.artist + " (" + trackInfo.album + ")");
    }
  },

  addTrackToPlaylist: function (trackId, playlistId) {
    playlistAdd = playlistId;
    trackAdd = trackId;
    this.playlists[playlistAdd].tracks.push(trackAdd);
  },

  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  addTrack: function (name, artist, album) {
    libtracks = this.tracks;
    this.tracks[this.uid()] = {
    id: this.uid(),
    name: name,
    artist: artist,
    album: album
    };

  console.log(library.tracks);
  },

  addPlaylist: function (name) {
    this.playlists[this.uid()] = {
    id: this.uid(),
    name: name,
    tracks: []
    };
  console.log(this.playlists);
  },

  printSearchResults: function(query) {
    for (var tracks in this.tracks){
        var trackNum = this.tracks[tracks];

        string = trackNum.name;
        var result = string.search(query);
        if (result > -1){
          console.log("Found result: " + trackNum.name);
          console.log(trackNum);
        }

        string = trackNum.artist;
        var result = string.search(query);
        if (result > -1){
          console.log("Found result: " + trackNum.artist);
          console.log(trackNum);
        }

        string = trackNum.album;
        var result = string.search(query);
        if (result > -1){
          console.log("Found result: " + trackNum.album);
          console.log(trackNum);
        }

    }
}

}

library.printPlaylists();
library.printTracks();
library.printPlaylist("p01");
library.addTrackToPlaylist("t01", "p01");
library.addTrack("New Name is", "New artist is", "New album is");
library.addPlaylist("New Playlist #1");
library.printSearchResults("James");
