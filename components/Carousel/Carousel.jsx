import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ChevronIcon from '../ChevronIcon';
import cn from 'utils/classNames';
import styles from './Carousel.module.css';

const Carousel = ({
  slideWidth,
  slides,
  currentSlide,
  onSlideChange,
  slidesGap,
  arrowsStyle,
  indexersStyle,
}) => {
  const carouselElementRef = useRef(null);
  const slidesCount = slides.length;
  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide === slidesCount - 1;

  /** Jump to previous slide if not on the first slide  */
  const goPrev = () => {
    const { scrollLeft, scrollWidth } = carouselElementRef.current;
    const slideWidth = scrollWidth / slidesCount;
    const currentSlide = Math.round(scrollLeft / slideWidth);

    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  };

  /** Jump to next slide if not on the last slide */
  const goNext = () => {
    const { scrollLeft, scrollWidth } = carouselElementRef.current;
    const slideWidth = scrollWidth / slidesCount;
    const currentSlide = Math.round(scrollLeft / slideWidth);

    if (currentSlide < slidesCount - 1) {
      goToSlide(currentSlide + 1);
    }
  };

  const goToSlide = (slideIndex) => {
    const { scrollWidth } = carouselElementRef.current;
    const slideWidth = scrollWidth / slidesCount;
    carouselElementRef.current.scrollTo({
      left: slideWidth * slideIndex,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    // Call onSlideChange when the user scrolls to a new slide:

    const { scrollLeft, scrollWidth } = carouselElementRef.current;

    let slideIndex = Math.round((scrollLeft * slidesCount) / scrollWidth);
    slideIndex = Math.min(Math.max(slideIndex, 0), slidesCount - 1);

    onSlideChange(slideIndex);
  };

  useEffect(() => {
    carouselElementRef.current.addEventListener('scroll', handleScroll);
    return () =>
      carouselElementRef.current?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={styles.container}
    >
      <div className={styles.outter} ref={carouselElementRef}>
        {!isFirstSlide && (
          <div
            className={cn(styles.chevronContainer, styles.left, arrowsStyle)}
            onClick={goPrev}
          >
            <ChevronIcon
              type="left"
              color="white"
              className={cn(styles.chevron, styles.left)}
            />
          </div>
        )}

        <div className={styles.inner}>{slides}</div>

        {!isLastSlide && (
          <div
            className={cn(styles.chevronContainer, styles.right, arrowsStyle)}
            onClick={goNext}
          >
            <ChevronIcon
              type="right"
              color="white"
              className={cn(styles.chevron, styles.right)}
            />
          </div>
        )}
      </div>
      <div className={cn(styles.indexers, indexersStyle)}>
        {
          // Create a dot for each slide:
          slides.map((_, index) => (
            <div
              key={index}
              className={cn(
                styles.dot,
                index === currentSlide && styles.active
              )}
              onClick={() => goToSlide(index)}
            />
          ))
        }
      </div>
    </div>
  );
};

Carousel.propTypes = {
  slideWidth: PropTypes.string.isRequired,
  slides: PropTypes.arrayOf(PropTypes.element).isRequired,
  currentSlide: PropTypes.number.isRequired,
  onSlideChange: PropTypes.func.isRequired,
};

Carousel.defaultProps = {
  slideWidth: '100vw',
  slides: [],
  currentSlide: 0,
  onSlideChange: () => { },
};

export default Carousel;
