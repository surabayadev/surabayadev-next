import Image from 'next/image';

import teams from '@/api/teams';

export default function TeamsSection() {
    return (
        <section>
            <div className='container mx-auto'>
              <div className='py-12 text-center lg:pt-24'>
                <h2 className='mb-0 text-2xl font-semibold text-gray-900 md:text-3xl lg:text-4xl'>
                  Pengurus SurabayaDev
                </h2>
              </div>
              {teams.map((team) => (
                <>
                <div className='mb-12 text-center'>
                  <br /><br /><br />
                  <h1 className='mb-5 text-2xl font-semibold text-gray-900'>
                    {team.name}
                  </h1>
                </div><div className='grid grid-cols-2 md:grid-cols-[repeat(auto-fit,_20%)] gap-4 justify-center'>
                    {team.members.map((detail) => (
                      <a href={detail.linkedin}
                      target='_blank'
                        key={detail.name}
                      >
                      <div
                        className='flex flex-col overflow-hidden rounded-lg border bg-white hover:shadow-xl'
                      >
                        <Image
                          src={detail.image}
                          width={250}
                          height={250}
                          className='object-cover hover:opacity-70'
                          style={{ height: '250px' }}
                          alt={detail.name + ' ' + detail.role} />
                        <div className='flex-column flex p-2 pb-6'>
                          <div className='flex flex-grow flex-col pt-3 text-center'>
                            <span
                              className='text-md mb-0 line-clamp-2 font-medium text-green-600  hover:font-medium hover:opacity-70'
                            >
                              {detail.name}
                            </span>
                            <span className='text-sm'>
                              <span>{detail.role}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      </a>
                    ))}
                  </div></>
                ))}
            </div>
          </section>
    );
}