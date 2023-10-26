import ModalVideo from '@/components/ModalVideo'

import VideoThumb from '~/images/sbydev-team.png'

export default function Hero() {
  return (
    <section className='relative'>
      {/* Illustration behind hero content */}
      <div
        className='-z-1 pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 transform'
        aria-hidden='true'
      >
        <svg
          width='1360'
          height='578'
          viewBox='0 0 1360 578'
          xmlns='http://www.w3.org/2000/svg'
        >
          <defs>
            <linearGradient
              x1='50%'
              y1='0%'
              x2='50%'
              y2='100%'
              id='illustration-01'
            >
              <stop stopColor='#FFF' offset='0%' />
              <stop stopColor='#16a34a' offset='77.402%' />
              <stop stopColor='#16a34a' offset='100%' />
            </linearGradient>
          </defs>
          <g fill='url(#illustration-01)' fillRule='evenodd'>
            <circle cx='1232' cy='128' r='128' />
            <circle cx='155' cy='443' r='64' />
            <foreignObject x='1180' y='80' width='100' height='100'>
              <svg
                className='text-white'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.5'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5'
                ></path>
              </svg>
            </foreignObject>
            <foreignObject x='130' y='410' width='60' height='60'>
              <svg
                className='text-white'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.5'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42'
                ></path>
              </svg>
            </foreignObject>
          </g>
        </svg>
      </div>

      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        {/* Hero content */}
        <div className='pb-12 pt-32 md:pb-20 md:pt-40'>
          {/* Section header */}
          <div className='pb-12 text-center md:pb-16'>
            <h1
              className='leading-tighter mb-4 text-5xl font-extrabold tracking-tighter md:text-6xl'
              data-aos='zoom-y-out'
            >
              Komunitas IT Arek Suroboyo,{' '}
              <span className='bg-gradient-to-r from-green-600 to-teal-400 bg-clip-text text-transparent'>
                SurabayaDev
              </span>
            </h1>
            <div className='mx-auto max-w-3xl'>
              <p
                className='mb-8 text-xl text-gray-600'
                data-aos='zoom-y-out'
                data-aos-delay='150'
              >
                SurabayaDev merupakan komunitas IT yang berdomisili di Kota
                Surabaya yang memiliki agenda kegiatan bertema edukasi teknologi
                saling bersinergi berkolaborasi.
              </p>
              <div
                className='mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center'
                data-aos='zoom-y-out'
                data-aos-delay='300'
              >
                <div>
                  <a
                    className='btn mb-4 w-full bg-green-600 text-white hover:bg-green-700 sm:mb-0 sm:w-auto'
                    href='http://t.me/SurabayaDev' target={'_blank'}
                  >
                    Join Telegram
                  </a>
                </div>
                {/* <div>
                  <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Learn more</a>
                </div> */}
              </div>
            </div>
          </div>

          {/* Hero image */}
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={600}
            thumbHeight={300}
            thumbAlt='Modal video thumbnail'
            video='/videos/video.mp4'
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>
    </section>
  );
}