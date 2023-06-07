import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Event Detail - Surabayadev',
  description: 'Page description',
}

export default function EventDetail() {
  return (
    <section>
      <div className="relative pb-20 pt-32 sm:py-24">
        <br /><br />
        <div className="absolute inset-x-0 -bottom-14 -top-48 overflow-hidden bg-green-50">
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white">
          </div>
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white">
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
            <h1 className="font-display text-5xl font-bold tracking-tighter text-green-600 sm:text-7xl">Judul Materi
            </h1>
            <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-green-900">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis distinctio maxime nisi ad consequuntur, illo sint non quo unde, necessitatibus aperiam libero minus voluptas minima ducimus nostrum excepturi alias est aut ipsum quos sapiente repudiandae expedita. Omnis iure laboriosam eligendi, illo dolorem impedit error, sapiente laborum possimus quis quos nulla id?
              </p>
            </div>
            <Link className="inline-flex justify-center rounded-2xl bg-green-600 p-4 text-base font-semibold text-white hover:bg-green-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 active:text-white/70 mt-10 w-full" href="/#">
              Daftar
            </Link>
            <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
              <div>
                <dt className="font-mono text-sm text-green-600">Peserta
                </dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-green-900">Umum
                </dd>
              </div>
              <div>
                <dt className="font-mono text-sm text-green-600">Speakers
                </dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-green-900">3 orang
                </dd>
              </div>
              <div>
                <dt className="font-mono text-sm text-green-600">Jadwal
                </dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-green-900">25 Mei 2023
                </dd>
              </div>
              <div>
                <dt className="font-mono text-sm text-green-600">Tempat
                </dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-green-900">Staples Center
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <section id="speakers" aria-labelledby="speakers-title" className="py-20 sm:py-32"><svg aria-hidden="true" width="0" height="0">
        <defs>
          <clipPath id=":R9m:-0" clipPathUnits="objectBoundingBox">
            <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0">
            </path>
          </clipPath>
          <clipPath id=":R9m:-1" clipPathUnits="objectBoundingBox">
            <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7"></path></clipPath><clipPath id=":R9m:-2" clipPathUnits="objectBoundingBox"><path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0">
            </path>
          </clipPath>
        </defs>
      </svg>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 id="speakers-title" className="font-display text-4xl font-medium tracking-tighter text-green-600 sm:text-5xl">Speakers</h2>
            <p className="mt-4 font-display text-2xl tracking-tight text-green-900">Belajar dari pemateri professional di bidangnya</p>
          </div>
          <div className="mt-14 grid grid-cols-1 items-start gap-x-8 gap-y-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4">
            <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
              <div className="absolute bottom-0 left-0.5 top-2 hidden w-px bg-slate-200 lg:block">
              </div>
              <div className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4 sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left" role="tablist" aria-orientation="vertical">
                <div className="relative lg:pl-8">
                  <svg aria-hidden="true" viewBox="0 0 6 6" className="absolute left-[-0.5px] top-[0.5625rem] hidden h-1.5 w-1.5 overflow-visible lg:block fill-green-600 stroke-green-600">
                    <path d="M3 0L6 3L3 6L0 3Z" strokeWidth="2" strokeLinejoin="round"></path>
                  </svg>
                  <div className="relative">
                    <div className="font-mono text-sm text-green-600">
                      <button className="[&amp;:not(:focus-visible)]:focus:outline-none" id="headlessui-tabs-tab-:R1j6l9m:" role="tab" type="button" aria-selected="true" data-headlessui-state="selected" aria-controls="headlessui-tabs-panel-:Rql9m:">
                        <span className="absolute inset-0">
                        </span>
                        Opening Day
                      </button>
                    </div>
                    <time className="mt-1.5 block text-2xl font-semibold tracking-tight text-green-900">April 4</time>
                  </div>
                </div>
              </div>
            </div>

            {/* Speakers */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3 [&:not(:focus-visible)]:focus:outline-none">
                <div>
                  <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                    <div className="absolute bottom-6 left-0 right-4 top-0 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6 border-green-300"></div><div className="absolute inset-0 bg-indigo-50">
                      <Image alt="" width="1120" height="560" decoding="async" data-nimg="1" className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110" sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw" src="https://media.licdn.com/dms/image/C5603AQHdpi1wd5w5DQ/profile-displayphoto-shrink_400_400/0/1641633510561?e=1690416000&v=beta&t=cYTGOq78VNGd1lVUimOY06dFuhd6XJ-hQkY0wrZAedw" />
                    </div>
                  </div>
                  <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">Steven McHail</h3>
                  <p className="mt-1 text-base tracking-tight text-slate-500">Designer at Globex Corporation</p>
                </div>
                <div>
                  <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                    <div className="absolute bottom-6 left-0 right-4 top-0 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6 border-green-300"></div><div className="absolute inset-0 bg-indigo-50">
                      <Image alt="" width="1120" height="560" decoding="async" data-nimg="1" className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110" sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw" src="https://media.licdn.com/dms/image/C5603AQHdpi1wd5w5DQ/profile-displayphoto-shrink_400_400/0/1641633510561?e=1690416000&v=beta&t=cYTGOq78VNGd1lVUimOY06dFuhd6XJ-hQkY0wrZAedw" />
                    </div>
                  </div>
                  <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">Steven McHail</h3>
                  <p className="mt-1 text-base tracking-tight text-slate-500">Designer at Globex Corporation</p>
                </div>
                <div>
                  <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                    <div className="absolute bottom-6 left-0 right-4 top-0 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6 border-green-300"></div><div className="absolute inset-0 bg-indigo-50">
                      <Image alt="" width="1120" height="560" decoding="async" data-nimg="1" className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110" sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw" src="https://media.licdn.com/dms/image/C5603AQHdpi1wd5w5DQ/profile-displayphoto-shrink_400_400/0/1641633510561?e=1690416000&v=beta&t=cYTGOq78VNGd1lVUimOY06dFuhd6XJ-hQkY0wrZAedw" />
                    </div>
                  </div>
                  <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">Steven McHail</h3>
                  <p className="mt-1 text-base tracking-tight text-slate-500">Designer at Globex Corporation</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </section>
  )
}
