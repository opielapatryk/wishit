import './App.css';

function App() {
  return (
    <main>
        <header>
          <h1 clas>
          WishIT! :)
          </h1>
          <h3>
          Here you can add new birthday reminders!
          </h3>
        </header>
        <section>
          <label for="birthday-date">Select birthday date: </label>
          <input type="date" id="birthday-date"/><br/>
          <label for="birthday-name">Select birthday name: </label>
          <input type="text" id="birthday-name" placeholder="Insert name of your friend"/><br/>
          <input type='submit' id='submit' value='Add!'/>
        </section>        
    </main>
  );
}

export default App;