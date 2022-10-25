import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { FooterComponent } from './footer/footer.component';
import { LogInComponent } from './log-in/log-in.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  { path: '', component: LogInComponent },
  { path: 'store', component: StoreComponent, canActivate: [AuthGuard] },
  { path: 'test', component: FooterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
