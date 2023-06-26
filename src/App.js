import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {

  const routeLinks = [
    { href: '#projects', title: 'Quienes Somos', content: 'Quienes Somos' },
    { href: '#skills', title: 'Adopta', content: 'Adopta' },
    { href: '#contact', title: 'Contactanos', content: 'Contactanos' }
  ];

  const socialNetworks = [
    { href: 'https://www.youtube.com/channel/UCMwgYVJ0Rb8xXShqsv9u1Pw', title: 'YouTube', content: '<i class="bi bi-youtube"></i>' },
    { href: 'https://github.com/JNATOY', title: 'GitHub', content: '<i class="bi bi-github"></i>' },
    { href: 'https://www.linkedin.com/in/juan-carlos-%C3%B1ato-yepez-727061123/', title: 'LinkedIn', content: '<i class="bi bi-linkedin"></i>' },
    { href: 'https://www.instagram.com/jyepez_fit/?hl=es', title: 'Instagram', content: '<i class="bi bi-instagram"></i>' }
  ];

  return (
    <>
      <Header
        routeLinks={routeLinks}
        socialNetworks={socialNetworks}
      />
      <main>
        <Hero />
      </main>
    </>
  );
}

export default App;