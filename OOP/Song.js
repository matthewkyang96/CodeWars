class Song {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    this.listeners = [];
  }

  howMany(arr) {
    let count = 0;
    for (let listener of arr) {
      if (!this.listeners.includes(listener.toLowerCase())) {
        this.listeners.push(listener.toLowerCase());
        count++;
      }
    }
    return count;
  }
}
