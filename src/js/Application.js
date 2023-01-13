import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;
    let emojisDiv = document.getElementById('emojis');
    emojisDiv.replaceChildren();

    this.addBananas();
    const para = document.createElement("p");
    para.textContent = this.emojis;
    emojisDiv.appendChild(para);
  }

  addBananas() {
    this.emojis = this.emojis.map(emoji => emoji + this.banana);
  }
}
