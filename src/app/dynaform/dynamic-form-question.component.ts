import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from '../../services/questions/question-base';

@Component({
  selector: 'app-dynamic-form-question',
  templateUrl: './dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent {
  @Input() aquestion: QuestionBase<string>;
  @Input() form: FormGroup;

  get isValid() { 
    return this.form.controls[this.aquestion.key].valid;
  }
}
