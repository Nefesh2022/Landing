import styles from './InfiniteScrollContainer.module.css';
import { useEffect } from 'react';
import cn from '@/utils/classNames';
import PropTypes from 'prop-types';

const InfiniteScrollContainer = ({
  children,
  handleFetch,
  hasMoreRef,
  className,
  containerRef,
}) => {
  //This function verify when u need a fetch new items
  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      //scrollTop: Represents the number of pixels that the element's content has been scrolled vertically from the top
      //scrollHeight: Represents the total height of the element's content, including content that is not visible due to scrolling. It is the full height of the content, including the part that is hidden.
      //clientHeight: Represents the height of the element's visible content area. It is the height of the content's visible window not including scrolling.
      const { scrollTop, scrollHeight, clientHeight } = container;
      let viewScroll = scrollTop + clientHeight >= scrollHeight - 20;
      //This calculation represents that when there are 20 pixels left to reach the end, it will search for the data
      if (viewScroll && hasMoreRef.current) {
        handleFetch();
      }
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);

      return () => {
        container.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <div ref={containerRef} className={cn(styles.container, className)}>
      {children}
    </div>
  );
};

InfiniteScrollContainer.propTypes = {
  children: PropTypes.element,
  handleFetch: PropTypes.func,
  hasMoreRef: PropTypes.object,
  className: PropTypes.object,
  containerRef: PropTypes.object,
};

InfiniteScrollContainer.defaultProps = {
  children: <></>,
  handleFetch: () => {},
  hasMoreRef: false,
  className: {},
  containerRef: {},
};

export default InfiniteScrollContainer;
