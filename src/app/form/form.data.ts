import { Question } from '../models/question';

export const formTemplate: Question[] = [
  {
    type: 'address',
    label: 'Address',
    col: 'col-md-12',
    required: true,
  },
  {
    type: 'email',
    label: 'Email',
    col: 'col-md-6',
    required: true,
    pattern: /.+@.+\..+/,
  },
  {
    type: 'text',
    label: 'Name',
    col: 'col-md-6',
    required: true,
  },
  {
    type: 'number',
    label: 'Age',
    col: 'col-md-6',
    required: true,
  },
  {
    type: 'date',
    label: 'Birthday',
    col: 'col-md-4',
    required: true,
  },
  {
    type: 'boolean',
    label: 'Veteran',
    col: 'col-md-4',
    required: true,
  },
  {
    type: 'select',
    label: 'Language',
    col: 'col-md-4',
    required: true,
    selectLimit: 2,
    options: {
      en: [
        { id: 'EN', name: 'English' },
        { id: 'FR', name: 'French' },
      ],
      fr: [
        { id: 'EN', name: 'Anglais' },
        { id: 'FR', name: 'Français' },
      ],
    },
  },
  // {
  //   type: 'file',
  //   label: 'Driver Licence',
  //   col: 'col-md-6',
  //   required: true,
  // },
];
