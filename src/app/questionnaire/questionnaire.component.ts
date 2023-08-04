import { Component } from '@angular/core';

interface Question {
  text: string;
  responses: string[];
  selectedResponse: string | null;
}

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent {
  questions: Question[] = [
    { text: 'هل ينظر طفلك إليك عندما تناديه باسمه؟', responses: ['دائماً', 'عادة', 'أحياناً', 'نادراً', 'أبدا  '], selectedResponse: null },
    { text: 'ما مدى سهولة التواصل البصري مع طفلك؟', responses: ['سهل جداً', 'سهل نوعا ما', 'صعب بعض الشيء','صعب جدا', 'مستحيل'], selectedResponse: null },
    { text: 'هل يشير طفلك للإشارة إلى أنه يريد شيئا ما؟ (على سبيل المثال ، لعبة  بعيد المنال)', responses: ['عدة مرات في اليوم', 'بضع مرّاتٍ في اليوم', 'بضع مرات في الأسبوع', 'أقل من مرة في الأسبوع','أبدا'], selectedResponse: null },
    { text: 'هل يشير طفلك إلى مشاركة الاهتمام معك؟ (على سبيل المثال ، الإشارة إلى مشهد مثير للاهتمام)', responses: ['عدة مرات في اليوم', 'بضع مرّاتٍ في اليوم', 'بضع مرات في الأسبوع', 'أقل من مرة في الأسبوع','أبدا'], selectedResponse: null },
    { text: 'هل يقوم طفلك باللعب بالتظاهر؟ (على سبيل المثال، يعتني بالدمى ويتحدث عبر هاتف لعبة)', responses: ['عدة مرات في اليوم', 'بضع مرّاتٍ في اليوم', 'بضع مرات في الأسبوع', 'أقل من مرة في الأسبوع'], selectedResponse: null },
    { text: 'هل يتبع طفلك المكان الذي تنظر إليه؟', responses: ['عدة مرات في اليوم', 'بضع مرّاتٍ في اليوم', 'بضع مرات في الأسبوع', 'أقل من مرة في الأسبوع','أبدا'], selectedResponse: null },
    { text: 'هل يبدو طفلك ميالًا إلى تقديم الدعم والمواساة لك أو لأحد أفراد العائلة إذا كانوا يعانون من اضطرابات واضحة؟ (على سبيل المثال، يقوم بتمشيط شعرهم أو يعانقهم)', responses: ['دائماً', 'عادة', 'أحياناً', 'نادراً','أبدا'], selectedResponse: null },
    { text: 'كيف تصف كلمات طفلك الأولى:', responses: ['شائع جدا', 'شائع بعض الشيء', 'أحياناً', 'غير عادي بعض الشيء', 'غير اعتيادي','طفلي لا يتكلم'], selectedResponse: null },
    { text: 'هل يقوم طفلك بالتعبير عن نفسه باستخدام إيماءات بسيطة؟ (مثل إشارة الوداع)', responses: ['عدة مرات في اليوم', 'بضع مرّاتٍ في اليوم', 'بضع مرات في الأسبوع', 'أقل من مرة في الأسبوع','أبدا'], selectedResponse: null },
    { text: 'هل يحدق طفلك في أي شيء بدون غرض واضح؟', responses: ['عدة مرات في اليوم', 'بضع مرّاتٍ في اليوم', 'بضع مرات في الأسبوع', 'أقل من مرة في الأسبوع','أبدا'], selectedResponse: null }
  ];

  showOverlay: boolean = false;
  value: string = '';

  performTest() {
    this.value = 'This is the value to display!';
    this.showOverlay = true;
  }

  hideOverlay() {
    this.showOverlay = false;
  }
}
