'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import TungkuTani from '~/images/supports/tungkutani.png';


export default function Anniversary11() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationFrameId: number;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      time += 0.005;
      
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, `hsl(${150 + Math.sin(time) * 10}, 65%, 40%)`);
      gradient.addColorStop(0.5, `hsl(${165 + Math.cos(time * 0.7) * 10}, 60%, 45%)`);
      gradient.addColorStop(1, `hsl(${175 + Math.sin(time * 0.5) * 10}, 55%, 48%)`);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const blobs = [
        { x: 0.2, y: 0.2, size: 300, speed: 0.3, offset: 0 },
        { x: 0.8, y: 0.3, size: 350, speed: 0.4, offset: 2 },
        { x: 0.5, y: 0.7, size: 400, speed: 0.35, offset: 4 }
      ];

      blobs.forEach(blob => {
        const x = (blob.x + Math.sin(time * blob.speed + blob.offset) * 0.1) * canvas.width;
        const y = (blob.y + Math.cos(time * blob.speed + blob.offset) * 0.1) * canvas.height;
        
        const blobGradient = ctx.createRadialGradient(x, y, 0, x, y, blob.size);
        blobGradient.addColorStop(0, 'rgba(255, 255, 255, 0.12)');
        blobGradient.addColorStop(0.5, 'rgba(74, 222, 128, 0.08)');
        blobGradient.addColorStop(1, 'rgba(20, 184, 166, 0)');
        
        ctx.fillStyle = blobGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 overflow-hidden">
      {/* Animated Canvas Background */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: 'overlay' }}
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.07]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(74, 222, 128, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(74, 222, 128, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'gridMove 25s linear infinite'
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="py-12 md:py-20">
          
          {/* Anniversary Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm text-green-600 font-bold text-2xl shadow-2xl shadow-green-500/50 ring-4 ring-green-400/30">
              11<span className="text-sm">th</span>
            </div>
          </div>

          {/* Main Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
              Surabaya Dev Anniversary
            </h2>
            <div className="inline-block bg-white/95 backdrop-blur-sm text-green-700 px-6 py-3 rounded-lg font-semibold text-xl md:text-2xl mb-4 shadow-xl">
              NextGenTechverse: Unlocking Opportunities in the Future of Technology
            </div>
          </div>

          {/* Speaker Reveal Section */}
          <div className="max-w-6xl mx-auto mb-16">
            {/* Speaker Reveal Badge */}
            <div className="text-center mb-16">
              <div className="inline-block bg-gradient-to-r from-green-500 to-teal-400 text-white px-8 py-3 rounded-full font-bold text-xl shadow-2xl shadow-green-500/50 ring-2 ring-white/30">
                Speaker Reveal
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden p-8 border border-green-200/50">
              <div className="grid lg:grid-cols-3 gap-8">
                
                {/* Speaker 1 */}
                <div className="flex flex-col items-center">
                    <div className="relative w-48 h-48 mb-4 group">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-400 rounded-full shadow-xl group-hover:shadow-2xl group-hover:shadow-green-400/50 transition-all duration-300"></div>
                        <div className="absolute inset-2 rounded-full overflow-hidden">
                            <img 
                                src="https://avatars.githubusercontent.com/u/2681894?v=4" 
                                alt="Sandhika Galih"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                        Sandhika Galih
                    </h3>
                    <p className="text-center text-gray-600 font-medium text-sm">
                        Dosen & Tech Creator
                    </p>
                    <p className="text-center text-gray-600 text-sm">
                        Founder WPU & WPUCourse.id
                    </p>
                </div>

                {/* Speaker 2 */}
                <div className="flex flex-col items-center">
                  <div className="relative w-48 h-48 mb-4 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-400 rounded-full shadow-xl group-hover:shadow-2xl group-hover:shadow-green-400/50 transition-all duration-300"></div>
                    <div className="absolute inset-2 rounded-full overflow-hidden">
                        <img 
                            src="https://raw.githubusercontent.com/nusendra/blog/master/static/profile.webp" 
                            alt="Sandhika Galih"
                            className="w-full h-full object-cover"
                        />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                    Nusendra Hanggarawan
                  </h3>
                  <p className="text-center text-gray-600 font-medium text-sm">
                    Fullstack Developer
                  </p>
                </div>

                {/* Event Details Side */}
                <div className="flex flex-col justify-center space-y-6 lg:pl-4">
                  
                  {/* Date & Time */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-100 to-teal-50 rounded-xl flex items-center justify-center shadow-md">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Sabtu, 15 November 2025</p>
                      <p className="text-gray-600">08.00-13.00 WIB</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-100 to-teal-50 rounded-xl flex items-center justify-center shadow-md">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-900 font-semibold">Gedung Graha Wiyata Lantai 9,</p>
                      <p className="text-gray-600">Universitas 17 Agustus 1945 Surabaya</p>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <div className="inline-block bg-gradient-to-r from-green-600 to-teal-500 text-white px-4 py-1 rounded-md font-semibold mb-3 shadow-lg">
                      Benefit:
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        Snack & Lunch
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        Gifts
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        e-Certificates
                      </li>
                    </ul>
                  </div>

                </div>
              </div>

              {/* CTA Button - Full Width Below */}
              <div className="mt-8">
                <a 
                  href="https://s.id/SBYDEV11TH" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center w-full px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-green-600 to-teal-500 rounded-full hover:from-green-700 hover:to-teal-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-green-500/50 transform hover:-translate-y-1"
                >
                  Grab your seat now!
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <p className="text-center mt-3 text-gray-600 text-sm font-medium">
                  🔗 s.id/SBYDEV11TH
                </p>
              </div>
            </div>
          </div>

          {/* Sponsors Section */}
          <div className="text-center mb-12">
            <br /><br />
            <h3 className="text-3xl font-bold text-white mb-8 drop-shadow-lg">
              Sponsored By
            </h3>

            {/* Sponsor */}
            <div className="mb-12">
                <br /><br />
              <div className="flex flex-wrap items-center justify-center gap-8">
                <a href="https://inixindosurabaya.id/" target='_blank'>
                    <div className="bg-white backdrop-blur-sm p-6 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-green-400/30 transition-all duration-300 transform hover:-translate-y-1">
                        <div className="w-64 h-20 bg-white rounded flex items-center justify-center">
                            <img src="https://inixindosurabaya.id/wp-content/uploads/2021/07/Inixindo-Surabaya-transparent-web-size.png" alt="Inixindo Surabaya" className="max-h-full max-w-full" />
                        </div>
                    </div>
                </a>
                <a href="https://www.dewaweb.com/" target='_blank'>
                        <div className="bg-white backdrop-blur-sm p-6 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-green-400/30 transition-all duration-300 transform hover:-translate-y-1">
                    <div className="w-64 h-20 bg-white rounded flex items-center justify-center">
                        <img src="https://www.dewaweb.com/app/views/MediaKit/2025.01.28.1/assets/img/basic-logo-dewaweb-horizontal-logo-rgb.webp" alt="Inixindo Surabaya" style={{width: '250px'}} />
                    </div>
                    </div>
                </a>
                <a href="https://www.instagram.com/tungkutani/?hl=en" target='_blank'>
                    <div className="bg-white backdrop-blur-sm p-6 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-green-400/30 transition-all duration-300 transform hover:-translate-y-1">
                    <div className="w-64 h-20 bg-white rounded flex items-center justify-center">
                        <Image src={TungkuTani} alt="Tungku Tani" style={{width: '100px'}} />
                    </div>
                    </div>
                </a>
              </div>
            </div>

            {/* Community Partner */}
            {/* <div>
              <h4 className="text-lg font-semibold text-green-100 mb-6 drop-shadow-md">Community Partner</h4>
              <div className="flex flex-wrap items-center justify-center gap-6">
                {['Alibaba', 'AWS', 'Mozilla', 'Tokopedia', 'Backend Ngalam', 'SurabayaJS', 'PasuruanDev', 'KLAS', 'PatrisDev', 'TulungagungDev'].map((partner) => (
                  <div key={partner} className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl hover:shadow-green-400/20 transition-all duration-300 transform hover:-translate-y-1">
                    <div className="w-24 h-16 bg-gray-100 rounded flex items-center justify-center text-gray-400 text-xs text-center px-2">
                      {partner}
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>

        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-40px) translateX(-10px);
          }
          75% {
            transform: translateY(-20px) translateX(-20px);
          }
        }

        @keyframes gridMove {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(60px);
          }
        }
      `}</style>
    </section>
  );
}