import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HealthPageLoader = ({ 
  variant = 'heartbeat', 
  size = 'default',
  showText = true,
  className = '' 
}) => {
  const sizeClasses = {
    small: 'w-16 h-16',
    default: 'w-24 h-24',
    large: 'w-32 h-32',
    xl: 'w-40 h-40'
  };

  const textSizeClasses = {
    small: 'text-sm',
    default: 'text-base',
    large: 'text-lg',
    xl: 'text-xl'
  };

  const HeartbeatLoader = () => {
    const ecgRef = useRef(null);
    const signalRef = useRef(null);
    const dataPointsRef = useRef(null);

    useEffect(() => {
      // ECG Drawing Animation
      const ecgPath = ecgRef.current;
      if (ecgPath) {
        const pathLength = ecgPath.getTotalLength();
        
        gsap.set(ecgPath, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength
        });

        gsap.to(ecgPath, {
          strokeDashoffset: 0,
          duration: 2,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true
        });
      }

      // Signal Text Drawing Animation
      const signalSpans = signalRef.current?.children;
      if (signalSpans) {
        gsap.fromTo(signalSpans, 
          { 
            opacity: 0, 
            scale: 0,
            rotation: 180
          },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.3,
            stagger: 0.1,
            ease: "back.out(1.7)",
            repeat: -1,
            repeatDelay: 1,
            yoyo: true
          }
        );
      }

      // Data Points Flow Animation
      const dataPoints = dataPointsRef.current?.children;
      if (dataPoints) {
        gsap.fromTo(dataPoints,
          {
            scale: 0,
            opacity: 0,
            x: -20
          },
          {
            scale: 1,
            opacity: 1,
            x: 20,
            duration: 1.5,
            stagger: 0.2,
            ease: "power2.out",
            repeat: -1,
            repeatDelay: 0.5,
            yoyo: true
          }
        );
      }

      // Heartbeat Pulse Animation
      const heartFill = document.querySelector('.heart-fill');
      if (heartFill) {
        gsap.to(heartFill, {
          scale: 1.1,
          opacity: 0.4,
          duration: 0.75,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true
        });
      }

      // Pulsing Rings Animation
      const rings = document.querySelectorAll('.pulse-ring');
      rings.forEach((ring, index) => {
        gsap.to(ring, {
          scale: 1.5,
          opacity: 0,
          duration: 2,
          delay: index * 0.3,
          ease: "power2.out",
          repeat: -1
        });
      });

    }, []);

    return (
      <div className="relative">
        {/* Main heart container */}
        <div className={`${sizeClasses[size]} relative`}>
          {/* Heart outline */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="w-full h-full text-primary/30"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          
          {/* ECG Waveform with GSAP drawing animation */}
          <div className="absolute inset-0 overflow-hidden z-20">
            <svg
              viewBox="0 0 24 24"
              className="w-full h-full"
            >
              {/* ECG Line with drawing animation */}
              <path
                ref={ecgRef}
                d="M2 12 L3 12 L3.5 8 L4.5 16 L5 12 L6 12 L6.5 10 L7.5 14 L8 12 L9 12 L9.5 9 L10.5 15 L11 12 L12 12 L12.5 11 L13.5 13 L14 12 L15 12 L15.5 7 L16.5 17 L17 12 L18 12 L18.5 8 L19.5 16 L20 12 L21 12 L21.5 10 L22.5 14 L23 12 L24 12"
                stroke="url(#ecgGradient)"
                strokeWidth="0.8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ecg-path"
              />
              
              {/* Gradient for ECG line */}
              <defs>
                <linearGradient id="ecgGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ffffff3b" />
                  <stop offset="20%" stopColor="#fff" />
                  <stop offset="40%" stopColor="#fff" />
                  <stop offset="60%" stopColor="#fff" />
                  <stop offset="80%" stopColor="#fff" />
                  <stop offset="100%" stopColor="#ffffff3b" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Pulsing heart fill */}
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="absolute inset-0 w-full h-full text-primary/20 heart-fill"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>

         
           
          {/* Data points moving through with GSAP */}
          <div ref={dataPointsRef} className="absolute inset-0">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-green-400 rounded-full data-point"
                style={{
                  left: `${20 + i * 15}%`,
                  top: '50%',
                  transform: 'translateY(-50%)'
                }}
              />
            ))}
          </div>
          
          {/* Pulsing rings with GSAP */}
          <div className="absolute inset-0 border-2 border-primary/20 rounded-full pulse-ring" />
          <div className="absolute inset-2 border-2 border-primary/15 rounded-full pulse-ring" />
          <div className="absolute inset-4 border-2 border-primary/10 rounded-full pulse-ring" />
        </div>
      </div>
    );
  };

  const PulseLoader = () => (
    <div className="relative">
      <div className={`${sizeClasses[size]} flex items-center justify-center`}>
        {/* Center circle */}
        <div className="w-1/2 h-1/2 bg-primary rounded-full animate-pulse" />
        
        {/* Expanding rings */}
        <div className="absolute inset-0 border-2 border-primary/40 rounded-full animate-ping" />
        <div className="absolute inset-2 border-2 border-primary/30 rounded-full animate-ping" style={{ animationDelay: '0.2s' }} />
        <div className="absolute inset-4 border-2 border-primary/20 rounded-full animate-ping" style={{ animationDelay: '0.4s' }} />
      </div>
    </div>
  );

  const SpinnerLoader = () => (
    <div className="relative">
      <div className={`${sizeClasses[size]} border-4 border-gray-200 border-t-primary rounded-full animate-spin`} />
      
      {/* Medical cross in center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-1/3 h-1/3 bg-primary rounded-sm animate-pulse" />
      </div>
    </div>
  );

  const WaveLoader = () => (
    <div className="flex items-center justify-center space-x-1">
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="w-2 h-8 bg-primary rounded-full animate-pulse"
          style={{
            animation: 'wave 1.2s ease-in-out infinite',
            animationDelay: `${i * 0.1}s`
          }}
        />
      ))}
    </div>
  );

  const getLoader = () => {
    switch (variant) {
      case 'heartbeat':
        return <HeartbeatLoader />;
      case 'pulse':
        return <PulseLoader />;
      case 'spinner':
        return <SpinnerLoader />;
      case 'wave':
        return <WaveLoader />;
      default:
        return <HeartbeatLoader />;
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center min-h-[300px] space-y-4 ${className}`}>
      {getLoader()}
      
      {showText && (
        <div className="text-center space-y-2">
          <div className={`${textSizeClasses[size]} text-primary font-medium animate-pulse`}>
            Loading Health Community...
          </div>
          <div className="text-sm text-muted-foreground">
            Connecting you to wellness resources
          </div>
        </div>
      )}
    </div>
  );
};

export default HealthPageLoader; 