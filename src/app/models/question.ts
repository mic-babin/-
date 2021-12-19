import { Label } from './label';

export class Question {
  type?: string;
  label!: Label;
  col!: string;
  order?: string;
  options?: {
    en: any[];
    fr: any[];
  };
  required?: boolean;
  pattern?: RegExp;
  invalidPattern?: Label;
  selectLimit?: number;
  multi?: boolean;
  multiMax?: number;
  isHidden?: boolean;
  minLength?: number;
  maxLength?: number;
  tooltip?: Label;
  hint?: Label;
  unit?: Label;
}
