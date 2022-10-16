// Code your solutions in this file

//const name = ["Guadalupe", "Ollie", "Aki"];
//const events = ["surprise"]
function writeCards(name,events) {
    let NewArray=[];
  for (let i = 0; i < name.length; i++) {
    let message = (`Thank you, ${name[i]}, for the wonderful ${events} gift!`)
     NewArray.push(message);
  }
  return NewArray;
}

//const int =parseInt(int);
function countDown(int){
   // let int = 11;
    while (int >= 0) {
      console.log(int);
      int--;
    }

}