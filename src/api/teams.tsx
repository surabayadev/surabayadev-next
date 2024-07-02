type Team = {
  image: string;
  name: string;
  role: string;
  linkedin: string;
};

type Division = {
  name: string;
  members: Team[];
};

const teams: Division[] = [
  {
    name: 'Founder',
    members: [
      {
        image:
          '/images/teams/aryangga.webp',
        name: 'Arryangga Aliev P',
        role: 'Software Engineer',
        linkedin: 'https://www.linkedin.com/in/arryanggaputra/',
      },
      {
        image:
          '/images/teams/antoni.webp',
        name: 'Antoni Putra',
        role: 'Software Engineer',
        linkedin: 'https://www.linkedin.com/in/antoniputra/',
      },
      {
        image:
          '/images/teams/fatoni.webp',
        name: 'Achmad Fatoni',
        role: 'Software Engineer',
        linkedin: 'https://www.linkedin.com/in/achmadfatoni/',
      },
    ]
  },
  {
    name: "Facilitator",
    members: [
      {
        image:
          '/images/teams/sawitry.webp',
        name: 'Sawitry Dyah Kusuma',
        role: 'Community Manager',
        linkedin: 'https://www.linkedin.com/in/sawitry/',
      },
      {
        image: '/images/teams/putra.webp',
        name: 'Putra Wahyu Utama Istianto',
        role: 'Collaboration Community',
        linkedin: 'https://www.linkedin.com/in/putra-wahyu-utama-istianto-5a9966171/',
      },
      {
        image: '/images/teams/puspa.webp',
        name: 'Tri Puspa Rinjeni',
        role: 'Community Partnership',
        linkedin: 'https://www.linkedin.com/in/puspa-rinjeni-31186411a/',
      },
      {
        image: '/images/teams/adam.jpg',
        name: 'Adam Alyafi',
        role: 'Tech Support, Cloud',
        linkedin: 'https://www.linkedin.com/in/mochammad-adam-alyafi',
      },
      {
        image: '/images/teams/fiqri.webp',
        name: 'Achmada Fiqri A',
        role: 'Tech Support, Dev',
        linkedin: 'https://www.linkedin.com/in/fiqriachmada/',
      },
      {
        image: '/images/teams/mazwin.jpg',
        name: 'Nur Mazuwinas',
        role: 'Community Support',
        linkedin: 'https://www.linkedin.com/in/mazwin-riana',
      },
      {
        image: '/images/teams/femmy.jpeg',
        name: 'Femmy Liana',
        role: 'Design Support, UI/UX',
        linkedin: 'https://www.linkedin.com/in/femmy-liana-purnomo',
      },
    ]
  },
  {
    name: "Lead & Co-Lead",
    members: [
        {
          image:
            '/images/teams/musa.png',
          name: 'Musa Al Farid',
          role: 'Lead',
          linkedin: 'https://www.linkedin.com/in/musaalfarid77/',
        },
          {
            image:
              '/images/teams/huda-new.jpg',
            name: 'Miftahul Huda',
            role: 'Co-Lead',
            linkedin: 'https://www.linkedin.com/in/iniakunhuda/',
          },

    ]
  },
  {
    name: "Social Media & Content Creative",
    members: [
        {
              image:
                '/images/teams/lisa.jpeg',
              name: 'Aprilian Lisa',
              role: 'Design (Coordinator)',
              linkedin: 'https://www.linkedin.com/in/aprilianlisam/',
        },
        {
          image:
            '/images/teams/qisthi.jpg',
          name: 'Aghni Qisthina',
          role: 'Design',
          linkedin: 'https://www.linkedin.com/in/aghni-qisthina-al-rahma//',
        },
        {
          image:
            '/images/teams/itok.jpg',
          name: 'Bessotu Putra',
          role: 'Design',
          linkedin: 'https://www.linkedin.com/in/bessotu-itok/',
        },
        {
          image:
            '/images/teams/batara.jpg',
          name: 'Rahmat Batara',
          role: 'Design',
          linkedin: 'https://www.linkedin.com/in/batarazakaria/',
        },
    ]
  },
  {
    name: "Research & Development", 
    members: [
        {
              image:
                '/images/teams/yudha.jpg',
              name: 'Kurniawan Try Yudha',
              role: 'Software Engineer',
              linkedin: 'https://www.linkedin.com/in/ktyudha/',
        },
        {
              image:
                '/images/teams/jeffry.jpeg',
              name: 'Michael Jeffry',
              role: 'Software Engineer',
              linkedin: 'https://www.linkedin.com/in/michael-jeffry-setiawan/',
        },
        {
              image:
                '/images/teams/soni.png',
              name: 'Ahmad Shonhaji',
              role: 'Software Engineer',
              linkedin: 'https://www.linkedin.com/in/ahmadshonhaji/',
        },
    ]
  },
  {
    name: "Event Management", 
    members: [
        {
          image:
            '/images/teams/mulia.jpg',
          name: 'Mulia Hartawan Negara',
          role: 'Event (Coordinator)',
          linkedin: 'https://www.linkedin.com/in/muliahartawan/',
        },
        {
              image:
                '/images/teams/sendhy.jpg',
              name: 'M Alfian Sendhy',
              role: 'Event',
              linkedin: 'https://www.linkedin.com/in/sendhyrama/',
        },
        {
              image:
                '/images/teams/elriyani.jpeg',
              name: 'Elriyani Faradilla',
              role: 'Event',
              linkedin: 'https://www.linkedin.com/in/elriyani/',
        },
    ]
  },
  {
    name: "Admin & Logistic", 
    members: [
        {
              image:
                '/images/teams/ucup.jpeg',
              name: 'Yusup Maulana',
              role: 'Admin & Logistic (Coordinator)',
              linkedin: 'https://www.linkedin.com/in/yusupmaulana/',
        },
        {
              image:
                '/images/teams/fery.jpg',
              name: 'Fery Yulia R',
              role: 'Logistic',
              linkedin: 'https://www.linkedin.com/in/feryyuliarahman/',
        },
        {
              image:
                '/images/teams/devano.jpg',
              name: 'Devano Alif',
              role: 'Logistic & MC',
              linkedin: 'https://www.linkedin.com/in/devano-alif-ramadhan-9b7035258/',
        },
    ]
  }
]

// const teams = [
//   {
//     image:
//       'https://media.licdn.com/dms/image/C5103AQEH3-b02cjjHQ/profile-displayphoto-shrink_400_400/0/1571975739515?e=1720051200&v=beta&t=vKcjppY8f3v_WqH4LcMXTnVKpUNWMQRaAP9bK0JjsUI',
//     name: 'Arryangga Aliev Pratamaputra',
//     role: 'Founder',
//     linkedin: 'https://www.linkedin.com/in/arryanggaputra/',
//   },
//   {
//     image:
//       'https://media.licdn.com/dms/image/C5603AQHdpi1wd5w5DQ/profile-displayphoto-shrink_400_400/0/1641633511025?e=1720051200&v=beta&t=FTgLG2hSEH01U5WRuzLYDiVh728ZOTg_lgVXdkp2Zl4',
//     name: 'Antoni Putra',
//     role: 'Founder',
//     linkedin: 'https://www.linkedin.com/in/antoniputra/',
//   },
//   {
//     image:
//       'https://media.licdn.com/dms/image/C4D03AQGtHB355lg82Q/profile-displayphoto-shrink_400_400/0/1571707279364?e=1720051200&v=beta&t=8xrLgZ27ch3v9o91h4DC0Vu5d501RyAMzTGk0PIp7eU',
//     name: 'Achmad Fatoni',
//     role: 'Founder',
//     linkedin: 'https://www.linkedin.com/in/achmadfatoni/',
//   },
//   {
//     image:
//       'https://media.licdn.com/dms/image/D5603AQGPaNOJ2sJvcw/profile-displayphoto-shrink_400_400/0/1678358033652?e=1720051200&v=beta&t=UZFyh-81u5AegmdpUJpXWv406g-8cLA0dr1XjSGmRbY',
//     name: 'Sawitry Dyah Kusuma Wardhani',
//     role: 'Community Manager',
//     linkedin: 'https://www.linkedin.com/in/sawitry/',
//   },
//   {
//     image:
//       'https://media.licdn.com/dms/image/D5603AQG7-lhZ05IBNA/profile-displayphoto-shrink_400_400/0/1664204737972?e=1720051200&v=beta&t=6eqsgdz5fA0jACfuMmDERievAvKWxQMIHbTsczC1xys',
//     name: 'Putra Wahyu Utama Istianto',
//     role: 'Community Lead',
//     linkedin:
//       'https://www.linkedin.com/in/putra-wahyu-utama-istianto-5a9966171/',
//   },
//   {
//     image:
//       'https://media.licdn.com/dms/image/D5603AQFzQuNkb3R1_A/profile-displayphoto-shrink_400_400/0/1681354870593?e=1720051200&v=beta&t=axm8KarAv1Y93OOudAmcjl9c7E1fw7zbcG7_bhrDfiE',
//     name: 'Puspa Rinjeni',
//     role: 'Event Division',
//     linkedin: 'https://www.linkedin.com/in/puspa-rinjeni-31186411a/',
//   },
//   {
//     image:
//       'https://media.licdn.com/dms/image/D5603AQEc66DxO6nYUw/profile-displayphoto-shrink_400_400/0/1698599560985?e=1720051200&v=beta&t=3sj8EIE0sIzVjxFZligXLkFlsofJ6B8upeB1lODnph8',
//     name: 'Yusup Maulana',
//     role: 'Logistic Division',
//     linkedin: 'https://www.linkedin.com/in/yusupmaulana/',
//   },
//   {
//     image:
//       'https://media.licdn.com/dms/image/D5603AQEHGEjQkNC3_w/profile-displayphoto-shrink_400_400/0/1685327745703?e=1720051200&v=beta&t=E9p36-6u7fRDaG2nM4LmKPjwSVSuLR0V72WLHXCqXeo',
//     name: 'Miftahul Huda',
//     role: 'R&D Division',
//     linkedin: 'https://www.linkedin.com/in/iniakunhuda/',
//   },
//   {
//     image:
//       'https://media.licdn.com/dms/image/D5635AQHi0goHKpc9qw/profile-framedphoto-shrink_400_400/0/1710137135864?e=1715191200&v=beta&t=TChxFA0pVlYK-9wGevW1tL_4yj3q5RfrZjFbqYM8Q9g',
//     name: 'Mulia Hartawan Negara',
//     role: 'Event Manager',
//     linkedin: 'https://www.linkedin.com/in/muliahartawan/',
//   },
//   {
//     image:
//       'https://media.licdn.com/dms/image/D5603AQEi1T6QF9OUxQ/profile-displayphoto-shrink_400_400/0/1696606971436?e=1720051200&v=beta&t=_Y-ihN0Bkk4hQ0iaxsnyJFyDpZ8RMo-99f4kO7mG-6Y',
//     name: 'Aprilian Lisa',
//     role: 'Design Division',
//     linkedin: 'https://www.linkedin.com/in/aprilianlisam/',
//   },
//   {
//     image:
//       'https://media.licdn.com/dms/image/D5635AQFO8eF9eMOF0w/profile-framedphoto-shrink_400_400/0/1710875563484?e=1715191200&v=beta&t=4G487LR6iYDCnqp2m5OHMIUHotZdcxHwN1rh27pqUL8',
//     name: 'Musa Al Farid',
//     role: 'Design Division',
//     linkedin: 'https://www.linkedin.com/in/musaalfarid77/',
//   },
//   {
//     image:
//       'https://media.licdn.com/dms/image/C5603AQEmAjf5WtWp-g/profile-displayphoto-shrink_400_400/0/1648529133935?e=1720051200&v=beta&t=9sxzIvqau9l8-8O_bsQWqvRZ923UardcUi0kKD3Aw4c',
//     name: 'Achmada Fiqri A Rasyad',
//     role: 'Member',
//     linkedin: 'https://www.linkedin.com/in/fiqriachmada/',
//   },
// ];

export default teams;
