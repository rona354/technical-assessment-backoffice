import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' }, // redirect to `first-component`
  {
    path: 'signin',
    loadChildren: () =>
      import('./pages/signin/signin.module').then((m) => m.SigninModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'add-employee',
    loadChildren: () =>
      import('./pages/add-employee/add-employee.module').then(
        (m) => m.AddEmployeeModule
      ),
  },
  { path: 'detail-employee', 
		loadChildren: () => 
			import('./pages/detail-employee/detail-employee.module').then(
				m => m.DetailEmployeeModule
			), 
	},
  { path: '**', redirectTo: '' }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
