import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ImmigrationComponent } from './immigration/immigration.component';
import { VisaComponent } from './visa/visa.component';
import { StudyComponent } from './study/study.component';
import { VisaAssessmentComponent } from './visa-assessment/visa-assessment.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:'consultancy', component: HomeComponent},
    {path:'consultancy/about', component: AboutComponent},
    {path:'consultancy/contact', component: ContactComponent},
    {path:'immigration', component: ImmigrationComponent},
    {path:'consultancy/visa', component: VisaComponent},
    {path:'study', component: StudyComponent},
    { path: 'vise-assessment', component: VisaAssessmentComponent },
    {path: '**', component: PageNotFoundComponent}
];
