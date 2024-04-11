import './App.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>My Money</h1>
      </header>

      <main className="main">
        <div className="balance">-5150</div>

        <form className="form">
          <input type="text" placeholder="Income or expense..." />
          <input type="number" placeholder="Amount..." />
          <select>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <button>&#43;</button>
        </form>

        <ul className="list">
          <li className="list__item">
            <div>
              <h4>Salary</h4>
              <small>Thu, Apr 11, 2024</small>
            </div>
            <div>+$5000.00</div>
          </li>

          <li className="list__item">
            <div>
              <h4>Dinner</h4>
              <small>Thu, Apr 11, 2024</small>
            </div>
            <div>-$150.00</div>
          </li>

          <li className="list__item">
            <div>
              <h4>Car</h4>
              <small>Thu, Apr 11, 2024</small>
            </div>
            <div>-$10000.00</div>
          </li>
        </ul>
      </main>

      <footer className="footer">
        This website was built for educational purpose only &#124; &copy; 2024
        Dakouri Kobri
      </footer>
    </div>
  );
}

export default App;
