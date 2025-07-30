import videoBackground from './BackgroundVideo.webm';

const Promo = () => {
  return (
    <section className="promo">
      <div className="promo__background">
        <video autoPlay muted loop>
          <source src={videoBackground} type="video/webm" />
        </video>
      </div>

      <div className="promo__container">
      <h1 className="promo__title">
          <span>ООО «Югспецавтоматика»</span>
          Строительство, техперевооружение, реконструкция, пусконаладка на объектах энергетического и нефтегазового комплекса
        </h1>
      </div>
    </section>
  )
}
export{Promo}