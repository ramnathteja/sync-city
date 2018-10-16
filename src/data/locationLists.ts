export default [
  {
    locations: [
      {
        id: '1A',
        arrival: 'YoungTong youk',
        metro: {
          exist: 'true',
          icon: 'train',
          stations: [
            {
              id: 'wangsimni',
              station: 'seoul',
              url: '/metro/SN_intracitybus_seoul'
            },
            {
              id: 'wangsimni',
              station: 'Gacheonuniv',
              url: '/metro/SN_intracitybus_Ansanstation'
            },
            {
              id: 'wangsimni',
              station: 'Amili',
              url: '/metro/SN_intracitybus_Ansanstation'
            }
          ]
        },
        intra_bus: {
          exist: 'true' /* notice FALSE and station[] ARRAY EMPTY */,
          icon: 'bus' /*this could happen any of the inter, intra and metro */,
          stations: [
            {
              id: 'bus_3000',
              station: 'ima',
              url: '/intra/SN_intracitybus_Ansanstation'
            }
          ]
        },
        inter_bus: {
          exist: 'true',
          icon: 'bus',
          stations: [
            {
              id: 'bus_dongdaegu',
              station: 'Ansanstation',
              url: '/interbus/SN_intercitybus_Ansanstation'
            },
            {
              id: 'bus_dongdaegu',
              station: 'Gacheonuniv',
              url: '/interbus/SN_intercitybus_Ansanstation'
            },
            {
              id: 'bus_dongdaegu',
              station: 'Amili',
              url: '/interbus/SN_intercitybus_Ansanstation'
            }
          ]
        }
      },
      {
        id: '2B',
        arrival: 'Yatap youk',
        metro: {
          exist: 'true',
          icon: 'train',
          stations: [
            {
              id: '1BM',
              station: 'seoul',
              url: '/metro/SN_intracitybus_seoul'
            },
            {
              id: '2BM',
              station: 'Gacheonuniv',
              url: '/metro/SN_intracitybus_Ansanstation'
            },
            {
              id: '3BM',
              station: 'Amili',
              url: '/metro/SN_intracitybus_Ansanstation'
            }
          ]
        },
        intra_bus: {
          exist: 'true' /* notice FALSE and station[] ARRAY EMPTY */,
          icon: 'bus' /*this could happen any of the inter, intra and metro */,
          stations: [
            {
              id: 'bus_3000',
              station: 'ima',
              url: '/intra/SN_intracitybus_Ansanstation'
            }
          ]
        },
        inter_bus: {
          exist: 'true',
          icon: 'bus',
          stations: [
            {
              id: 'bus_dongdaegu',
              station: 'Ansanstation',
              url: '/interbus/SN_intercitybus_Ansanstation'
            },
            {
              id: 'bus_dongdaegu',
              station: 'Gacheonuniv',
              url: '/interbus/SN_intercitybus_Ansanstation'
            },
            {
              id: 'bus_dongdaegu',
              station: 'Amili',
              url: '/interbus/SN_intercitybus_Ansanstation'
            }
          ]
        }
      }
    ]
  }
];
