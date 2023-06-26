const Hero = () => {
  return (
    <article className="hero">
      <img src="https://i.postimg.cc/Hns4RBT8/fondoportada.jpg" alt="Fondo de portada" className="img img--background"/>
      <div className="container g-layout g-layout--center md:g-layout--1-1 gap-md">
        <div className="card">
          <div className="card__body">
            <h1 className="card__subtitle">!hola</h1>
            <h2 className="card__title">amante de los gatitos!</h2>
            <p className="card__text">"No vamos a cambiar el mundo ayudando a un animal, pero al menos el mundo habrá cambiado para él".</p>
            <div className="d-flex gap-2xs">
              <a href="https://i.pinimg.com/originals/34/1a/94/341a9423bbc8463c09109e63b3b75fa0.jpg" target="_blank"
                rel="noopener noreferrer" class="button button--outline-primary">Beneficios de adoptar</a>
              <button className="button button--primary">Quiero Adoptar</button>
            </div>
          </div>
        </div>
        <div className="hero__images">
          <img src="https://i.postimg.cc/8cxcMmPr/perfil.png" alt="Imagen de portada" width={256} height={256} className="img img--hero" />
          <div className="hero__technologies">
            <img src="https://www.svgrepo.com/show/436056/cat-5.svg" alt="gato1" width={64} height={64} className="hero__technology" />
            <img src="https://www.svgrepo.com/show/436055/cat-4.svg" alt="gato2" width={64} height={64} className="hero__technology" />
            <img src="https://www.svgrepo.com/show/436054/cat-3.svg" alt="gato3" width={64} height={64} className="hero__technology" />
            <img src="https://www.svgrepo.com/show/436053/cat-1.svg" alt="gato4" width={64} height={64} className="hero__technology" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Hero;