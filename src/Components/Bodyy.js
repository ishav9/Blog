import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Bodyy = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="position-relative vh-100 overflow-hidden">
      <div 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/amazon-2_5f7c1df166f31-TF10wqHVM8HfA25bnEBP3OVkLVkSOj.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          animation: 'zoomBackground 10s infinite alternate'
        }}
      />
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex flex-column justify-content-center align-items-center text-white">
        {showMessage && (
          <h1 className="display-4 fw-bold text-center mb-4 animate__animated animate__fadeIn">
            There is no planet B
          </h1>
        )}
        <p className="lead text-center mb-4 px-3 animate__animated animate__fadeIn animate__delay-1s">
          Every second, we lose a piece of our world. Act now to protect our Earth.
        </p>
       
      </div>
      <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4">
        <div className="arrow-down"></div>
      </div>
      <style jsx>{`
        @keyframes zoomBackground {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        .animate__animated {
          animation-duration: 1s;
          animation-fill-mode: both;
        }
        .animate__fadeIn {
          animation-name: fadeIn;
        }
        .animate__delay-1s {
          animation-delay: 1s;
        }
        .animate__delay-2s {
          animation-delay: 2s;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .arrow-down {
          width: 40px;
          height: 40px;
          border-right: 4px solid white;
          border-bottom: 4px solid white;
          transform: rotate(45deg);
          animation: arrowBounce 2s infinite;
        }
        @keyframes arrowBounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0) rotate(45deg); }
          40% { transform: translateY(-30px) rotate(45deg); }
          60% { transform: translateY(-15px) rotate(45deg); }
        }
      `}</style>
    </div>
  );
};

export default Bodyy;