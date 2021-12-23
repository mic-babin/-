import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  constructor() {}

  getTemplate(req) {
    return [
      {
        label: { en: 'Number', fr: 'Numéro' },
        col: 'col-md-3',
        required: req,
        isHidden: false,
      },
      {
        label: { en: 'Street', fr: 'Rue' },
        col: 'col-md-9',
        required: req,
        isHidden: false,
      },
      {
        label: { en: 'City', fr: 'Ville' },
        col: 'col-md-10',
        required: req,
        isHidden: false,
      },
      {
        label: { en: 'Unit', fr: 'Apt.' },
        col: 'col-md-2',
        required: false,
        isHidden: false,
      },
      {
        label: { en: 'Province', fr: 'Province' },
        col: 'col-md-9',
        required: req,
        isHidden: false,
      },
      {
        label: { en: 'PostalCode', fr: 'Code postal' },
        col: 'col-md-3',
        required: req,
        pattern: /[A-Za-z][0-9][A-Za-z][ -]?[0-9][A-Za-z][0-9]$/,
        isHidden: false,
      },
    ];
  }
}
