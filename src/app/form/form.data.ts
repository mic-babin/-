import { Question } from '../models/question';
import { Section } from '../models/section';

export const formTemplate: Section[] = [
  {
    title: { en: 'Location', fr: 'Localisation' },
    questions: [
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
    questions: [
      {
        type: 'email',
        label: { en: 'Email', fr: 'Courriel' },
        col: '6',
        order: '7',
        required: true,
        pattern: /.+@.+\..+/,
        // multi: true,
        // multiMax: 2,
        isHidden: false,
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
      },
      {
        type: 'number',
        label: { en: 'Age', fr: 'Âge' },
        col: '6',
        order: '5',
        required: true,
        unit: { en: 'year(s)', fr: 'année(s)' },
        minLength: 1,
        maxLength: 5,
      },
      {
        type: 'date',
        label: { en: 'Birthday', fr: 'Date de naissance' },
        col: '6',
        order: '2',
        required: true,
        // multi: true,
        // multiMax: 2,
      },
      {
        type: 'boolean',
        label: { en: 'Veteran', fr: 'Vétéran' },
        col: '6',
        order: '3',
        required: true,
        // multi: true,
        // multiMax: 2,
      },
      {
        type: 'boolean',
        label: { en: 'Happy', fr: 'Heureux' },
        col: '6',
        order: '1',
        required: true,
        // multi: true,
        // multiMax: 2,
      },
    ],
  },
  {
    title: { en: 'Settings', fr: 'Paramètres' },
    questions: [
      {
        type: 'select',
        label: { en: 'Language', fr: 'Langue' },
        col: '4',
        order: '1',
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
        multi: true,
      },
      {
        type: 'text',
        label: { en: 'Pets', fr: 'Animaux' },
        col: '12',
        order: '1',
        required: true,
        multi: true,
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
