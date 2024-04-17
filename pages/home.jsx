import Carousel from '@/components/Carousel';
import Header from '@/components/Header/header';
import Img from '@/components/Img';
import styles from '@/styles/Home.module.css';
import { useState } from 'react';

import image1 from '../public/assets/image1.png';
import image2 from '../public/assets/image2.png';
import image3 from '../public/assets/image3.png';
import image4 from '../public/assets/image4.png';
import image5 from '../public/assets/image5.png';
import workImage from '../public/assets/workingImage2.jpg';

import mision from '../public/assets/mision.jpg';
import vision from '../public/assets/vision.jpg';
import valores from '../public/assets/valores.jpg';

import InfoCard from '@/components/InfoCard';
import WhatsAppButton from '@/components/WhatsAppButton';

const images = [
  {
    image: image1,
    text: 'Experimenta la elegancia y la comodidad con nuestras cortinas.',
  },
  {
    image: image2,
    text: 'Transforma tu espacio con nuestras cortinas a medida.',
  },
  {
    image: image3,
    text: 'Personaliza cada detalle para reflejar tu estilo único.',
  },
  {
    image: image4,
    text: 'Tus espacios se veran mas agradables.',
  },
  {
    image: image5,
    text: 'Encuentra la combinación perfecta de estilo y funcionalidad.',
  },
];

const cards = [
  {
    image: mision,
    title: 'Misión',
    text: 'Ofrecer un servicio de venta e instalación de cortinas roller, en tiempo y forma, con el objetivo de dar solución satisfactoria a nuestros clientes con precios muy competitivos',
  },
  {
    image: vision,
    title: 'Visión',
    text: 'Ser una empresa referente en Mendoza que alcance un estandar de calidad que la distinga por la excelencia de la prestación de sus servicios',
  },
  {
    image: valores,
    title: 'Valores',
    text: ['Eficiencia y calidad', 'Responsabilidad', 'Integridad', 'Pasión'],
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <main className={styles.main}>
      <Carousel
        slides={images.map((image, i) => (
          <div key={image.src} className={styles.imageCarrusel}>
            <Img
              src={image.image}
              className={styles.image}
              loading="eager"
              priority={i === currentSlide}
              width={900}
              height={600}
              alt={`slide-${i}`}
            />
            <span className={styles.text}>{image.text}</span>
          </div>
        ))}
        currentSlide={currentSlide}
        onSlideChange={setCurrentSlide}
        slideWidth="100%"
        arrowsStyle={styles.carouselArrows}
        indexersStyle={styles.carouselIndexers}
      />
      <div className={styles.info}>
        <div className={styles.hoAre}>
          <h1 className={styles.title}>¿Quiénes somos?</h1>
          <p className={styles.textInfo}>
            Somos una empresa familiar que hemos tenido la oportunidad de
            independizarnos y cumplir con nuestro deseo de ofrecer un servicio
            de exelencia en ventas, instalación, mantenimiento y limpieza de
            cortinas roller.
          </p>
        </div>

        <h2 className={styles.titleDark}>Nuestra forma de trabajo</h2>
        <div className={styles.work}>
          <p className={styles.textInfoCard}>
            Realizamos el proceso completo de ir hasta su domicilio o empresa
            para realizar las mediciones y recomendaciones necesarias.
            Posteriormente, nos encargamos de retirar las cortinas existentes y
            procedemos a instalar nuevas cortinas, garantizando que se ajusten
            perfectamente a sus necesidades y estilo. También ofrecemos
            servicios de mantenimiento y limpieza de cortinas. Además, ofrecemos
            asesoramiento personalizado para ayudarle a elegir las cortinas
            ideales para cada espacio.
          </p>
          <img src={workImage.src} alt="Trabajo" className={styles.workImage} />
        </div>
        <h2 className={styles.titleDark}>Principios que nos orientan</h2>
        <div className={styles.cardContainer}>
          {cards.map((card) => (
            <InfoCard
              key={card.text}
              srcImage={card.image}
              className={styles.card}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
        <div className={styles.containerMap}>
          <h2 className={styles.titleDark}> TE ESPERAMOS</h2>
          <iframe
            width="100%"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.0013572292337!2d-68.83492312433009!3d-32.950973573591405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0b468ea3d8c5%3A0x6a0d760266ec1d5e!2sNefesh!5e0!3m2!1ses-419!2sar!4v1711489793927!5m2!1ses-419!2sar"
            height="650"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <WhatsAppButton />
    </main>
  );
}
