// import functions and grab DOM elements
const form = document.querySelector('form');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    
    const user = {
        name: formData.get('username'),
        pokemon: formData.get('starters'),
        hp: 100,
        willpower: 10,
        completed: {}
    }
    
    const stringyUser = JSON.stringify(user);
    localStorage.setItem('USER', stringyUser);
    
    window.location = '../map/index.html';
});

const button = document.createElement(button);
button.textContent = 'Start your adventure!';
form.appendChild(button);