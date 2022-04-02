class RInterface {
  constructor() {
    if (!this.routes) {
      throw new Error("Router class must have routes");
    }
  }
}

export default RInterface;
