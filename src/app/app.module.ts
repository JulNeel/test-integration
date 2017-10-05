import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { BlogComponent } from './blog.component';
import { PostComponent } from './post.component';
import { PostService } from './post.service';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
   // InMemoryWebApiModule.forRoot(InMemoryDataService), 
    AppRoutingModule,
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }


