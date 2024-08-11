class Journey {
  constructor(object, crew, balloons) {
    this.weight = object.weight;
    this.crew = crew;
    this.balloons = balloons;
  }

  isPossible() {
    let totWeight = this.weight + this.crew * 80;
    let balloonCap = this.balloons * 4.8 * 0.001;
    return balloonCap > totWeight;
  }
}
