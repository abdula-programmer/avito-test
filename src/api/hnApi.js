import axios from "axios";

const url = 'https://hacker-news.firebaseio.com/v0/';
const storiesUrl = `${url}topstories.json`
const storyUrl = `${url}/item/`

export const getAllStories = async () => {
    const data = axios.get(storiesUrl).then(res => res.data.slice(0, 100));
    return data;
}

export const getStory = async (id) => {
    const story = await axios.get(`${storyUrl}${id}.json`).then(res => res.data);
    return story;
}
