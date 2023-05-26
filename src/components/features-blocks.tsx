import Link from 'next/link'

export default function FeaturesBlocks() {
  return (
    <section className="relative pt-12">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/4 md:mt-24 lg:mt-0 bg-green-600 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Event Terbaru</h2>
            <p className="text-xl text-gray-600">Lihat dan ikuti event terbaru dari SurabayaDev</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-1 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}

            {[1, 2, 3, 4].map((id) => (
              <div className="relative flex flex-col md:flex-row items-center md:items-start bg-white rounded shadow-xl" key={id}>
                <img src="https://eventsurabaya.net/wp-content/uploads/2020/10/MP-ES-Implement-Deisgn-Thinking-In-Product-Development-SurabayaDev-Copy-500-x-500.jpg" alt="" className="md:w-64 sm:w-full h-full object-cover mb-6 md:mb-0 md:mr-6 rounded" />
                <div className="md:text-left p-4">

                  <div>
                    <a className="btn outline mr-3 outline-offset-1 outline-green-700 text-green-700 py-1 px-2 rounded inline-flex text-xs items-center">

                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"></path>
                      </svg>
                      <span className="">
                        Gratis
                      </span>
                    </a>
                    <a className="btn outline mr-3 outline-offset-1 outline-green-700 text-green-700 py-1 px-2 rounded inline-flex text-xs items-center">

                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
                      </svg>
                      <span className="">
                        Dilo Surabaya
                      </span>
                    </a>
                  </div>

                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-0 mt-3">Judul Event</h4>
                  <h4 className="text-sm text-gray-400 leading-snug tracking-tight mb-3">Minggu, 13 Juni 2023</h4>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>


                  <Link href='/event/event-detail' className="btn text-sm md:mt-15 mt-10 py-2 px-6 text-white bg-black hover:bg-green-800 rounded-full">Detail Event</Link>
                </div>
              </div>
            ))}

            <div className="text-center mt-7">
              <a className="btn text-white bg-green-900 hover:bg-gray-800 py-2 px-4 rounded inline-flex items-center" href="#0">
                <span>
                  Lihat Selengkapnya
                </span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}