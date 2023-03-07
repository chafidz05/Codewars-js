class User {
  constructor() {
    this.rank = -8;
    this.progress = 0;
  }
  incProgress(p) {
    if (p > 8 || p === 0 || p < -8) {
      throw new Error("Invalid rank " + p);
    }
    const dif =
      p > 0 && this.rank < 0
        ? p - this.rank - 1
        : this.rank > 0 && p < 0
        ? p - this.rank + 1
        : p - this.rank;
    if (dif > 0) {
      this.progress += 10 * dif * dif;
    } else if (dif === 0) {
      this.progress += 3;
    } else if (dif < 0) {
      this.progress += 1;
    }
    while (this.progress >= 100) {
      this.progress -= 100;
      this.rank++;
      if (this.rank === 0) {
        this.rank = 1;
      }
      if (this.rank > 8) {
        this.rank = 8;
      }
    }
    if (this.rank === 8) {
      this.progress = 0;
    }

    return this;
  }
}