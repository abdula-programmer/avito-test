import { makeAutoObservable } from "mobx";
import { getAllStories, getStory } from "../api/hnApi";

class Hacker {
  itemsId = [];
  items = [];

  constructor() {
    makeAutoObservable(this);
  }

  getAllStories = () => {
    getAllStories().then((res) => {
      this.itemsId = res;
      console.log(this.getEveryStory())
      this.getEveryStory();
    });
  };

  getEveryStory = () => {
    const items = this.itemsId.map((id) => {
      const item = getStory(id).then((res) => res);
      return item.then((res) => {
        return res
      });
    });
    this.items = items;
    items.forEach(item => {
      console.log(item);
    })
  };
}

export default new Hacker();
