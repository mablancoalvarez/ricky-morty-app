import { useState, useEffect, useRef } from 'react';

const LazyImage = ({ src, alt, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(imgRef.current);
        }
      });
    });

    observer.observe(imgRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return <img ref={imgRef} src={isVisible ? src : ''} alt={alt} className={className} />;
};

export default LazyImage;
