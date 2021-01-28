//import quest data
import quests from '../data.js';

// list item target element
const ul = document.querySelector('ul');


// create quests li elements
const mapItem1 = document.createElement('li');
const mapItem2 = document.createElement('li');
const mapItem3 = document.createElement('li');

// define map item text content
mapItem1.textContent = quests[0].title;
mapItem2.textContent = quests[1].title;
mapItem3.textContent = quests[2].title;

ul.append(mapItem1, mapItem2, mapItem3);
