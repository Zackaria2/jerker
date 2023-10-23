import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const properties = [...Array(5)].map((_, index) => ({
  id: faker.string.uuid(),
  avatarUrl: `/assets/images/properties/property${index + 1}.jpg`,
  name: sample(['AOOXXOO1', 'AOOXXOO2', 'AOOXXOO3', 'AOOXXOO4', 'AOOXXOO5']),
  company: sample(['Fond 1', 'Fond 2', 'Fond 3', 'Fond 4', 'Fond 5']),
  isVerified: sample(['9 000', '28 800', '36 450', '11 700', '24 500']),
  status: sample(['Ja', 'Nej']),
  role: sample([
    'Anders Andersson',
    'Anders Andersson',
    'Anders Andersson',
    'Anders Andersson',
    'Anders Andersson',
  ]),
  yta: sample([
    '45 000','33 000','35 400','34 690','34 000'
  ]),
  loa: sample([
    '27 000','30 090','29 500','28 900','28 250'
  ]),
  installerad: sample([
    '-','100','125','100','-'
  ]),
  geoenergi: sample(['Ja', 'Nej']),

}));
