import { Offers } from '../types/types';

const mockOffers: Offers = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.50,
        longitude: 2.20,
        zoom: 8
      }
    },
    location: {
      latitude: 48.4909553943509,
      longitude: 2.86309666406197,
      zoom: 8
    },
    isFavorite: false,
    isPremium: true,
    rating: 4,
    previewImage: '/img/apartment-01.jpg'
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f01',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 200,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.50,
        longitude: 2.20,
        zoom: 8
      }
    },
    location: {
      latitude: 48.3909553943503,
      longitude: 2.85309666406191,
      zoom: 8
    },
    isFavorite: false,
    isPremium: true,
    rating: 5,
    previewImage: '/img/apartment-01.jpg'
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f02',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 300,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.50,
        longitude: 2.20,
        zoom: 8
      }
    },
    location: {
      latitude: 48.1909553943508,
      longitude: 2.81309666406198,
      zoom: 8
    },
    isFavorite: false,
    isPremium: true,
    rating: 2,
    previewImage: '/img/apartment-01.jpg'
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f03',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.5632,
        longitude: 6.5728,
        zoom: 8
      }
    },
    location: {
      latitude: 50.3909553943508,
      longitude: 6.85309666406198,
      zoom: 8
    },
    isFavorite: false,
    isPremium: true,
    rating: 4,
    previewImage: '/img/apartment-01.jpg'
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f04',
    title: 'Wood and stone place',
    type: 'room',
    price: 80,
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.5048,
        longitude: 4.2109,
        zoom: 8
      }
    },
    location: {
      latitude: 50.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 4,
    previewImage: '/img/apartment-02.jpg'
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f05',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 132,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.2223,
        longitude: 4.5334,
        zoom: 8
      }
    },
    location: {
      latitude: 51.3909553943508,
      longitude: 5.929309666406198,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: '/img/apartment-03.jpg'
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f06',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    price: 180,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.2223,
        longitude: 4.5334,
        zoom: 8
      }
    },
    location: {
      latitude: 51.2,
      longitude: 5.5,
      zoom: 8
    },
    isFavorite: false,
    isPremium: true,
    rating: 5,
    previewImage: '/img/room.jpg'
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f07',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    price: 100,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.2223,
        longitude: 4.5334,
        zoom: 8
      }
    },
    location: {
      latitude: 51.1,
      longitude: 5.3,
      zoom: 8
    },
    isFavorite: false,
    isPremium: true,
    rating: 2,
    previewImage: '/img/room.jpg'
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f08',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    price: 200,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.2223,
        longitude: 4.5334,
        zoom: 8
      }
    },
    location: {
      latitude: 51.6,
      longitude: 5.7,
      zoom: 8
    },
    isFavorite: false,
    isPremium: true,
    rating: 3,
    previewImage: '/img/room.jpg'
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f09',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.33,
        longitude: 10.00,
        zoom: 8
      }
    },
    location: {
      latitude: 53.3909553943508,
      longitude: 10.85309666406198,
      zoom: 8
    },
    isFavorite: false,
    isPremium: true,
    rating: 4,
    previewImage: '/img/apartment-01.jpg'
  },
  // {
  //   id: '6af6f711-c28d-4121-82cd-e0b462a27f10',
  //   title: 'Beautiful & luxurious studio at great location',
  //   type: 'apartment',
  //   price: 120,
  //   city: {
  //     name: 'Dusseldorf',
  //     location: {
  //       latitude: 51.1252,
  //       longitude: 6.4621,
  //       zoom: 8
  //     }
  //   },
  //   location: {
  //     latitude: 51.3909553943508,
  //     longitude: 6.85309666406198,
  //     zoom: 8
  //   },
  //   isFavorite: false,
  //   isPremium: true,
  //   rating: 4,
  //   previewImage: '/img/apartment-01.jpg'
  // },
];

export { mockOffers };
