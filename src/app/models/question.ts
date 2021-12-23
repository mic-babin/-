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
  isHidden: boolean;
  show?: {
    answer: any;
    questions: string[];
  };
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  step?: number;
  tooltip?: Label;
  hint?: Label;
  unit?: Label;
  mask?: string;
}
