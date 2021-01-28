export function makeUser(formData) {
    const user = {
        name: formData.get('username'),
        starter: formData.get('starters'),
        hp: 100,
        willpower: 10,
        completed: {}
    };
    console.log(user);
}