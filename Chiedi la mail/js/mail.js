const userEmail = prompt('scrivi la tua mail');


const userList = ['giovannirossi@mail.com', 'alessandrofumagalli@mail.com', 'ginoginetti@mail.com', 'robrobotto@mail.com', 'pincopallo@mail.com', 'tiziocaio@mail.com'];

if (userList.includes(userEmail)) {
    console.log('accesso consentito');

} else {
    console.log('accesso negato');
}