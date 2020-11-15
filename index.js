const names = ["Lisa", "Kaitlin", "Jan"]
const eventname = 'surprise'
let countDown = []

function writeCards(names, eventname){
  for (let i = 0; i < names.length; i++){
  countDown.push(console.log(`Thank you ${names[i]}, for the wonderful ${eventname} gift!`))
  }
return(countDown);
}
writeCards(names, eventname);

countDown;
