import './DisplayReminder.css';
import birthdays from './listOfBirthdays';
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); 
let yyyy = today.getFullYear();
today = mm + '.' + dd + '.' + yyyy;
let todaywithoutyear =  mm + '.' + dd

let birthdayToday = function(){
  let listofpersons = []
  birthdays.forEach((e)=>{
    if(e.date === todaywithoutyear){
      listofpersons.push(e.name)
    }
  })
  return listofpersons.join("\n")
}

function DisplayReminder() {
  return (
    <main>
        <h1 className='display-reminder-header'>Today is {today} and birthday have...<br/></h1> <h2 className='listofbirth'>{birthdayToday()}</h2>
    </main>
  );
}

export default DisplayReminder;