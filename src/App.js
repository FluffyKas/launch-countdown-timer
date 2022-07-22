import iconFacebook from './assets/images/icon-facebook.svg';
import iconPinterest from './assets/images/icon-pinterest.svg';
import iconInstagram from './assets/images/icon-instagram.svg';

function App() {
  return (
    <div className="App">
      <main>
        <h1>We're launching soon</h1>
        <div>Timer</div>
        <footer>
          <ul role="list" className="social-links">
            <li>
              <a href="#">
                <img src={iconFacebook} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={iconPinterest} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={iconInstagram} alt="" />
              </a>
            </li>
          </ul>
        </footer>
      </main>
    </div>
  );
}

export default App;
