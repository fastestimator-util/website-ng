import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MarkdownModule } from 'ngx-markdown';
import { ClipboardModule } from 'ngx-clipboard';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import {MatTreeModule} from '@angular/material/tree';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { WINDOW_PROVIDERS } from './window-provider/window-provider.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { ApiComponent } from './api/api.component';
import { TocComponent } from './toc/toc.component';
import { InstallComponent } from './install/install.component';
import { CommunityComponent } from './community/community.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { ExampleComponent } from './example/example.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { SlackFormComponent } from './slack-form/slack-form.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SecurityContext } from '@angular/core'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GettingStartedComponent,
    TutorialComponent,
    ApiComponent,
    TocComponent,
    InstallComponent,
    CommunityComponent,
    SnackbarComponent,
    PageNotFoundComponent,
    ExampleComponent,
    DialogComponent,
    SearchComponent,
    FooterComponent,
    SlackFormComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    NgbModule,
    MarkdownModule.forRoot({ sanitize: SecurityContext.NONE }), // for all tag has id
    BrowserAnimationsModule,
    MatSelectModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatTreeModule,
    ClipboardModule,
    MatSnackBarModule,
    MatDialogModule,
    MatCardModule,
    MatProgressBarModule,
    MatMenuModule,
  ],
  providers: [WINDOW_PROVIDERS],
  bootstrap: [AppComponent],
  entryComponents: [SnackbarComponent, DialogComponent, SearchResultComponent]
})
export class AppModule { }
