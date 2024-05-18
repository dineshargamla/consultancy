import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NabBarComponent } from './nab-bar/nab-bar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ImmigrationComponent } from './immigration/immigration.component';
import { StudyComponent } from './study/study.component';
import { VisaComponent } from './visa/visa.component';
import { VisaAssessmentComponent } from './visa-assessment/visa-assessment.component';
import { MatDialog } from '@angular/material/dialog';
import { PopupDialogComponent } from '../assets/shared/popup-dialog/popup-dialog.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,NabBarComponent,FooterComponent,AboutComponent,
    ContactComponent,ImmigrationComponent,StudyComponent,VisaComponent,VisaAssessmentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent implements OnInit {

  title = 'consultancy-project';
  selectedPage = "home";


  /**
   *
   */
  constructor(public dialog:MatDialog) {
  }
  ngOnInit(): void {
    const popupShown = sessionStorage.getItem('popupShown');

    if (!popupShown) {
      // Open dialog only if popup has not been shown before
      setTimeout(() => {
        this.openDialog();
      }, 3000); 

      // Set flag in localStorage to indicate that popup has been shown
      sessionStorage.setItem('popupShown', 'true');
    }
    // Delay opening the dialog by 3 seconds
    // 3000 milliseconds = 3 seconds
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(PopupDialogComponent, {
      width: '350px', // Adjust width as needed
      data: {} // Pass any data you need to the dialog component
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
