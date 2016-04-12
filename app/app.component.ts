import {Component} from 'angular2/core';
import {SubscriptionFormComponent} from './subscription-from.component';

@Component({
    selector: 'my-app',
    template: `
    	<h1>Subscription</h1>
    	<subscription-form></subscription-form>
    `,
    directives: [SubscriptionFormComponent]
})
export class AppComponent {
}