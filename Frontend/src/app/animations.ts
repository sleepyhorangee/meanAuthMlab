
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

export let fadeMove = trigger('fadeMove', [
    transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('300ms', [
            animate('1s ease-in', keyframes([
                style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
                style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
                style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
            ]))]), { optional: true }),
        query(':leave', stagger('300ms', [
            animate('1s ease-in', keyframes([
                style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
                style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
                style({ opacity: 0, transform: 'translateY(-75%)', offset: 1.0 }),
            ]))]), { optional: true })
    ])
])

export let fadeMoveR = trigger('fadeMoveR', [
    transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('300ms', [
            animate('1s ease-in', keyframes([
                style({ opacity: 0, transform: 'translateX(-75%)', offset: 0 }),
                style({ opacity: .5, transform: 'translateX(35px)', offset: 0.3 }),
                style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 }),
            ]))]), { optional: true }),
        query(':leave', stagger('300ms', [
            animate('1s ease-in', keyframes([
                style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                style({ opacity: .5, transform: 'translateX(35px)', offset: 0.3 }),
                style({ opacity: 0, transform: 'translateX(-75%)', offset: 1.0 }),
            ]))]), { optional: true })
    ])
])

export let moveCols = trigger('moveCols', [
        transition('* => *', [
            query('.col', style({ opacity: 0, transform: 'translateX(-40px)' })),
            query('.col', stagger('500ms', [
                animate('800ms 1.2s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
            ])),
            query('.col', [
                animate(1000, style('*'))
            ])
        ])
    ])