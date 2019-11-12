import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PiplPersonComponent } from "./pipl-person/pipl-person.component";
import { PiplComponent } from "./pipl/pipl.component";
import { PiplSearchComponent } from "./pipl-search/pipl-search.component";
import { PiplResultsComponent } from "./pipl-results/pipl-results.component";
import { PiplService } from "./pipl.service";
import {
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule
} from "@angular/material";
import { LayoutModule } from "@angular/cdk/layout";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    PiplResultsComponent,
    PiplSearchComponent,
    PiplComponent,
    PiplPersonComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    LayoutModule,
    FlexLayoutModule,
    FormsModule,
    LayoutModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule
  ],
  exports: [
    PiplResultsComponent,
    PiplSearchComponent,
    PiplComponent,
    PiplPersonComponent
  ],
  providers: [PiplService]
})
export class PiplModule {}
