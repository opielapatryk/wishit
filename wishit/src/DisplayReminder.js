import './DisplayReminder.css';

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); 
let yyyy = today.getFullYear();
today = mm + '.' + dd + '.' + yyyy;
let birthdayToday = ['someone', 'somebody']
function DisplayReminder() {
  return (
    <main>
        <h1 className='display-reminder-header'>Today is {today} and birthday have...<br/> {birthdayToday.join(', ')}</h1>
    </main>
  );
}

export default DisplayReminder;