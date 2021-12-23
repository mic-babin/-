import { Section } from '../models/section';

export const formTemplate: Section[] = [
  {
    title: { en: 'Location', fr: 'Localisation' },
    order: '3',
    advice: {
      en: 'Please enter your home address.',
      fr: "S'il-vous plait entrer votre adresse principale.",
    },
    questions: [
      {
        type: 'slider',
        label: { en: 'Couverture', fr: 'Couverture' },
        col: '12',
        order: '2',
        required: true,
        isHidden: false,
        min: 1000,
        max: 10000,
        step: 1000,
        unit: { en: '$', fr: '$' },
        // tooltip: {
        //   en: '<p>Grocery List:</p><ul><li>Milk</li><li>Tea</li><li>Coffe</li></ul>',
        //   fr: '<p>Grocery List:</p><ul><li>Milk</li><li>Tea</li><li>Coffe</li></ul>',
        // },
      },
      {
        type: 'address',
        label: { en: 'Address', fr: 'Adresse' },
        col: '12',
        order: '1',
        required: true,
        isHidden: false,
        tooltip: {
          en: '<p>Grocery List:</p><ul><li>Milk</li><li>Tea</li><li>Coffe</li></ul>',
          fr: '<p>Grocery List:</p><ul><li>Milk</li><li>Tea</li><li>Coffe</li></ul>',
        },
      },
    ],
  },
  {
    title: { en: 'Info', fr: 'Info' },
    order: '1',
    questions: [
      {
        type: 'email',
        label: { en: 'Email', fr: 'Courriel' },
        col: '6',
        order: '7',
        required: true,
        pattern: /.+@.+\..+/,
        isHidden: true,
        // multi: true,
        // multiMax: 2,
        invalidPattern: {
          en: 'Please enter a valid email address',
          fr: 'Veuillez entrer une adresse courriel valide',
        },
        // hint: {
        //   en: 'Please enter a valid email address',
        //   fr: 'Veuillez entrer une adresse courriel valide',
        // },
      },
      {
        type: 'text',
        label: { en: 'Name', fr: 'Nom' },
        col: '6',
        order: '6',
        required: true,
        minLength: 4,
        isHidden: true,
        // maxLength: 10,
        // multi: true,
        // multiMax: 2,
      },
      {
        type: 'text',
        label: { en: 'Phone', fr: 'Téléphone' },
        col: '6',
        order: '6',
        required: true,
        mask: '(000) 000-0000',
        isHidden: true,
        // multi: true,
        // multiMax: 2,
      },
      {
        type: 'password',
        label: { en: 'Password', fr: 'Mot de passe' },
        col: '6',
        order: '4',
        required: true,
        pattern:
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/,
        // multi: true,
        // multiMax: 2,
        invalidPattern: {
          en: 'Your password must contain 8 to 12 characters, one uppercase letter, one lowercase letter, one number and one special character',
          fr: 'Votre mot de passe doit contenir 8 à 12 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial',
        },
        isHidden: true,
      },
      {
        type: 'number',
        label: { en: 'Age', fr: 'Âge' },
        col: '6',
        order: '5',
        required: true,
        unit: { en: 'year(s)', fr: 'année(s)' },
        min: 18,
        max: 100,
        isHidden: true,
        // hint: {
        //   en: 'You must be 18 years old.',
        //   fr: 'Vous devez avoir 18 ans.',
        // },
      },
      {
        type: 'date',
        label: { en: 'Birthday', fr: 'Date de naissance' },
        col: '6',
        order: '2',
        required: true,
        isHidden: true,
        // multi: true,
        // multiMax: 2,
      },
      {
        type: 'boolean',
        label: { en: 'Veteran', fr: 'Vétéran' },
        col: '6',
        order: '3',
        required: true,
        isHidden: true,
        // multi: true,
        // multiMax: 2,
      },
      {
        type: 'boolean',
        label: { en: 'Happy', fr: 'Heureux' },
        col: '6',
        order: '1',
        required: true,
        isHidden: false,
        show: {
          answer: 1,
          questions: [
            'Veteran',
            'Birthday',
            'Age',
            'Password',
            'Phone',
            'Name',
          ],
        },
        // multi: true,
        // multiMax: 2,
      },
    ],
  },
  {
    title: { en: 'Settings', fr: 'Paramètres' },
    order: '3',
    questions: [
      {
        type: 'select',
        label: { en: 'Language', fr: 'Langue' },
        col: '4',
        order: '2',
        required: false,
        isHidden: true,
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
      {
        type: 'text',
        label: { en: 'Pets', fr: 'Animaux' },
        col: '12',
        order: '3',
        required: true,
        multi: true,
        isHidden: false,
      },
    ],
  },

  // {
  //   type: 'file',
  //   label: 'Driver Licence',
  //   col: '6',
  //   required: true,
  // },
];
