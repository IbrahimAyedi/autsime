import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  child: any = {
    name: '',
    age: null,
    sex: 'm',
    ethnicity: 'تونس',
    jaundice: 'no',
    familyASD: 'no'
  };

  ageExceedsLimit(): boolean {
    return this.child.age !== null && this.child.age > 36;
  }

  saveChild() {
    if (this.child.name && this.child.age && this.child.sex && this.child.ethnicity) {
      if (this.child.age >= 0 && !this.ageExceedsLimit()) { // Check for age not negative and not exceeding 36 months
        console.log(this.child);
      }
    }
  }
}
