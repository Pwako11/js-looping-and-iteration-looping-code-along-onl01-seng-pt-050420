const names = ["Lisa", "Kaitlin", "Jan"]
const eventname = 'surprise'
const newArray = new Array();

function writeCards(names, eventname){
  for (let i = 0; i < names.length; i++){
  newArray.push(console.log(`Thank you ${names[i]}, for the wonderful ${eventname} gift!`))
  }
return newArray;
}
writeCards(names, eventname);

