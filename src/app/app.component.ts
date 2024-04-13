import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NabBarComponent } from './nab-bar/nab-bar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ImmigrationComponent } from './immigration/immigration.component';
import { StudyComponent } from './study/study.component';
import { VisaComponent } from './visa/visa.component';
import { VisaAssessmentComponent } from './visa-assessment/visa-assessment.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,NabBarComponent,FooterComponent,AboutComponent,ContactComponent,ImmigrationComponent,StudyComponent,VisaComponent,VisaAssessmentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'consultancy-project';
  selectedPage = "home";
}
