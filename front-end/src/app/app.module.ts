import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewPastQuizzesComponent } from './view-past-quizzes/view-past-quizzes.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { HomeComponent } from './home/home.component';
import { DockerComponent } from './docker/docker.component';
import { QuizCreatorComponent } from './quiz-creator/quiz-creator.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    ViewPastQuizzesComponent,
    QuizComponent,
    QuizListComponent,
    HomeComponent,
    DockerComponent,
    QuizCreatorComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
