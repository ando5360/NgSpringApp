import { Component } from '@angular/core';


/*
  Dont want to be creating a model for each type. 
  of message as I'm trying to follow the standalone model 
  that's best practise.
  
- Error Notification
- Success Confirmation
- Informational Message
- Warning Alerts
- Promotional Offers
- Feedback Request
- Password Reset
- Verification Prompt
- Security Alerts
- System Maintenance Notification
- User Invitation
- Survey Invitation
- Event Reminder */

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [],
  template: `
    <p>
      dynamic-form works!
    </p>
  `,
  styles: ``
})

export class DynamicFormComponent {

}
