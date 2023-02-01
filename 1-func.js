/** @format */

const date = new Date();

const greetings = (user) =>{
    if (date.getHours() > 1 && date.getHours() < 11) {
        console.log(`Good morning ${user}`)
    } else if (date.getHours() > 12 && date.getHours() < 15) {
        console.log(`Good afternoon ${user}`);
    } else if (date.getHours() > 16 && date.getHours() < 24) {
        console.log(`Good evening ${user}`);
    } else {
        console.log("can't find any user")
    }
}


module.exports = greetings;