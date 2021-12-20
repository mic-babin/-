import { Label } from './label';
import { Question } from './question';

export class Section {
  title: Label;
  advice?: Label;
  order: string;
  isHidden?: boolean;
  questions: Question[];
}
