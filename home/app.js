import { saveUser, makeUser } from './playerUtils.js';

// import functions and grab DOM elements
const form = document.querySelector('form');



form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    
    const userData = makeUser(formData);
    
    saveUser(userData);
    
    window.location = '../maps.index.html';
});
