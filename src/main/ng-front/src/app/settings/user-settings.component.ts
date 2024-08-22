import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select'; // Add this import
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Add this import
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    MatCardModule, 
    MatFormFieldModule, 
    MatNativeDateModule, 
    ReactiveFormsModule, 
    MatSlideToggleModule, 
    MatSelectModule, 
    MatInputModule,
    FormsModule, 
    MatButtonModule
  ], // Add MatSelectModule and FormsModule to the imports array
  template: `
      <div class="settings-container">
        <!-- User Data Section -->
        <mat-card appearance="raised">
          <mat-card-header>Your Data</mat-card-header>
          <mat-card-content>
            <button mat-button (click)="exportAsCSV()">Export as CSV</button>
            <button mat-button color="warn" (click)="deleteMyData()">Delete My Data</button>
            <button mat-button color="warn" (click)="deleteMyAccount()">Delete My Account</button>
          </mat-card-content>
        </mat-card>

        <!-- Preferences Section -->
        <mat-card appearance="raised">
          <mat-card-header>Contact Preferences</mat-card-header>
          <mat-card-content>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
            <label class="form-check-label" for="flexCheckIndeterminate">
                Allow us to email you
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
            <label class="form-check-label" for="flexCheckIndeterminate">
                Allow us to sms you
            </label>
          </div>
          </mat-card-content>
        </mat-card>

        <!-- Theme Section -->
        <mat-card appearance="raised">
          <mat-card-header>Appearance</mat-card-header>
          <mat-card-content>
            <mat-form-field appearance="fill">
              <mat-label>Theme</mat-label>
              <select [(ngModel)]="selectedTheme">
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="system">System Default</option>
              </select>
            </mat-form-field>
          </mat-card-content>
        </mat-card>

        <!-- Privacy Section -->
        <mat-card appearance="raised">
          <mat-card-header>Privacy</mat-card-header>
          <mat-card-content>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
            <label class="form-check-label" for="flexCheckIndeterminate">
                Share data with out partners
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
            <label class="form-check-label" for="flexCheckIndeterminate">
                Track my activity on this site
            </label>
          </div>
          </mat-card-content>
        </mat-card>
    <!-- Notification Settings -->
      <mat-card appearance="raised">
        <mat-card-header>Notifications</mat-card-header>
        <mat-card-content>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
            <label class="form-check-label" for="flexCheckIndeterminate">
                Enable push notifications
            </label>
          </div>
          <mat-form-field appearance="fill">
            <mat-label>Notification Frequency</mat-label>
            <select [(ngModel)]="notificationFrequency">
              <option value="instant">Instant</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
            </select>
          </mat-form-field>
        </mat-card-content>
      </mat-card>

    <!-- Language and Region -->
    <mat-card appearance="raised">
      <mat-card-header>Language and Region</mat-card-header>
      <mat-card-content>
        <mat-form-field appearance="fill">
          <mat-label>Language</mat-label>
          <select [(ngModel)]="selectedLanguage">
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <!-- Add more languages -->
          </select>
        </mat-form-field>
        <mat-form-field appearance="fill">
          <mat-label>Time Zone</mat-label>
          <input matInput [(ngModel)]="timeZone" placeholder="e.g., GMT-5">
        </mat-form-field>
      </mat-card-content>
    </mat-card>

    <!-- Security Settings -->
    <mat-card appearance="raised">
      <mat-card-header>Security</mat-card-header>
      <mat-card-content>
      <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
            <label class="form-check-label" for="flexCheckIndeterminate">
                Enable 2FA
            </label>
      </div>
        <button mat-button (click)="updateSecurityQuestions()">Update Security Questions</button>
      </mat-card-content>
    </mat-card>

  <!-- Accessibility Options -->
  <mat-card appearance="raised">
    <mat-card-header>Accessibility</mat-card-header>
    <mat-card-content>
    <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
        <label class="form-check-label" for="flexCheckIndeterminate">
            Enable High Contrast Mode
        </label>
    </div>
    </mat-card-content>
  </mat-card>
</div>
  `,
  styles: `
    .settings-container{
      display: flex;
      justify-content: space-evenly;
      align-items: space-evenly;
      height: 100%;
      padding-top: 100px;
      padding-bottom: 50px;
      flex-wrap: wrap; 
      width: 100%;
      flex-direction: row;
    }
    mat-card{
      width: calc(50% - 20px);
      width: 250px;
      flex-basis: 100%;
      min-width: 250px;
      box-sizing: border-box;
      display: inline-block;
    }
  `
})
export class SettingsComponent {
  emailNotifications = true;
  smsNotifications = false;
  selectedTheme = 'light';
  shareDataWithPartners = false;
  trackActivity = true;
  // Notification Settings
  pushNotifications: boolean = true;
  notificationFrequency: string = 'daily';

  // Language and Region
  selectedLanguage: string = 'en';
  timeZone: string = 'GMT-5';

  // Security Settings
  twoFactorAuth: boolean = false;

  // Accessibility Options
  highContrastMode: boolean = false;
  screenReaderSupport: boolean = false;

  // Methods for handling user actions
  exportAsCSV() {
    console.log('Exporting data as CSV...');
    // Implement export logic here
  }

  deleteMyData() {
    console.log('Deleting user data...');
    // Implement delete data logic here
  }

  deleteMyAccount() {
    console.log('Deleting user account...');
    // Implement delete account logic here
  }

  changeTheme(theme: string) {
    console.log(`Changing theme to ${theme}...`);
    // Implement theme change logic here
  }

  changePassword() {
    console.log('Changing password...');
    // Implement password change logic here
  }

  updateProfile() {
    console.log('Updating profile...');
    // Implement profile update logic here
  }

  updateSecurityQuestions() {
    console.log('Updating security questions...');
    // Implement security questions update logic here
  }

}
