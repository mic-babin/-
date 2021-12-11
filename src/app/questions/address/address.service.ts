import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  constructor() {}

  getTemplate(req) {
    return [
      {
        label: 'number',
        col: 'col-md-3',
        required: req,
      },
      {
        label: 'street',
        col: 'col-md-9',
        required: req,
      },
      {
        label: 'city',
        col: 'col-md-10',
        required: req,
      },
      {
        label: 'unit',
        col: 'col-md-2',
        required: false,
      },
      {
        label: 'province',
        col: 'col-md-9',
        required: req,
      },
      {
        label: 'postalCode',
        col: 'col-md-3',
        required: req,
        pattern: /[A-Za-z][0-9][A-Za-z][ -]?[0-9][A-Za-z][0-9]$/,
      },
    ];
  }
}
