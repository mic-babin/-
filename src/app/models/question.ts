export class Question {
  type?: string;
  label!: string;
  col!: string;
  options?: {
    en: any[];
    fr: any[];
  };
  required?: boolean;
  pattern?: RegExp;
  selectLimit?: number;
}
