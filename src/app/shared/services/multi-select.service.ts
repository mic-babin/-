import { Injectable } from '@angular/core';
import {
  IMultiSelectOption,
  IMultiSelectTexts,
  IMultiSelectSettings,
} from 'ngx-bootstrap-multiselect';

@Injectable({
  providedIn: 'root',
})
export class MultiSelectService {
  // Options
  provEn: IMultiSelectOption[] = [
    { id: 'British Columbia', name: 'British Columbia' },
    { id: 'Alberta', name: 'Alberta' },
    { id: 'Manitoba', name: 'Manitoba' },
    { id: 'Saskatchewan', name: 'Saskatchewan' },
    { id: 'Ontario', name: 'Ontario' },
    { id: 'Québec', name: 'Quebec' },
    { id: 'New Brunswick', name: 'New Brunswick' },
    { id: 'Nova Scotia', name: 'Nova Scotia' },
    { id: 'Newfound Land', name: 'Newfound Land' },
    { id: 'Prince Edward Island', name: 'Prince Edward Island' },
    { id: 'Northwest Territories', name: 'Northwest Territories' },
    { id: 'Yukon', name: 'Yukon' },
    { id: 'Nunavut', name: 'Nunavut' },
  ];
  provFr: IMultiSelectOption[] = [
    { id: 'British Columbia', name: 'Colombie Britannique' },
    { id: 'Alberta', name: 'Alberta' },
    { id: 'Manitoba', name: 'Manitoba' },
    { id: 'Saskatchewan', name: 'Saskatchewan' },
    { id: 'Ontario', name: 'Ontario' },
    { id: 'Québec', name: 'Québec' },
    { id: 'New Brunswick', name: 'Nouveau Brunswick' },
    { id: 'Nova Scotia', name: 'Nouvelle-Écosse' },
    { id: 'Newfound Land', name: 'Terre-Neuve' },
    { id: 'Prince Edward Island', name: 'Île du Prince-Édouard' },
    { id: 'Northwest Territories', name: 'Territoire du Nord-Ouest' },
    { id: 'Yukon', name: 'Yukon' },
    { id: 'Nunavut', name: 'Nunavut' },
  ];

  langEn: IMultiSelectOption[] = [
    { id: 'EN', name: 'English' },
    { id: 'FR', name: 'French' },
  ];
  langFr: IMultiSelectOption[] = [
    { id: 'EN', name: 'Anglais' },
    { id: 'FR', name: 'Français' },
  ];

  // Text

  textFr: IMultiSelectTexts = { defaultTitle: 'Choisir...' };
  textEn: IMultiSelectTexts = { defaultTitle: 'Select...' };

  // Settings
  settings: IMultiSelectSettings = {
    buttonClasses:
      'form-control d-flex justify-content-between align-items-center drop-down-button w-100',
    containerClasses: ' d-block',
    selectionLimit: 1,
    autoUnselect: true,
    closeOnSelect: true,
  };

  constructor() {}
}
