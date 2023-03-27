import { trigger, style, transition, animate } from '@angular/animations';

export const fade = trigger('fade', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('0.2s', style({ opacity: 1 })),
  ]),
  transition(':leave', [animate('0.2s', style({ opacity: 0 }))]),
]);
