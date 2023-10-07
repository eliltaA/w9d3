import { API, broadcast } from "./util";

export default class FollowToggle {
  constructor(toggleButton) {
    // Your code here
    this.toggleButton = toggleButton;
    this.toggleButton.addEventListener("click", this.handleClick.bind(this))
  }

  async handleClick(event) {
    event.preventDefault();
    console.log(this.followState);
    if (this.followState === "followed"){
      await this.unfollow();
    }else if (this.followState === "unfollowed"){
      await this.follow()
    }
  }

  async follow() {
    this.followState = "followed";
  }

  async unfollow() {
    // Your code here
    this.followState = "unfollowed"
  }

  render() {
    switch (this.followState) {
      case "followed":
        this.toggleButton.innerText = "Unfollow!"
        break;
        case "unfollowed":
          this.toggleButton.innerText = "Follow!";
        break;
    }
  }

  get followState() {
    return this.toggleButton.dataset.followState;
  }

  set followState(newState) {
    this.toggleButton.dataset.followState = newState;
    this.render();
  }
}