import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'folder',
    loadChildren: () =>
      import('./folder/folder.module').then((m) => m.FolderPageModule),
  },
  {
    path: 'match',
    loadChildren: () =>
      import('./match/match.module').then((m) => m.MatchPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'adoption',
    loadChildren: () =>
      import('./adoption/adoption.module').then((m) => m.AdoptionPageModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./signup/signup.module').then((m) => m.SignupPageModule),
  },
  {
    path: 'forgetpass',
    loadChildren: () =>
      import('./forgetpass/forgetpass.module').then(
        (m) => m.ForgetpassPageModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfilePageModule),
  },
  {
    path: 'find',
    loadChildren: () =>
      import('./find/find.module').then((m) => m.FindPageModule),
  },
  {
    path: 'solidarity',
    loadChildren: () =>
      import('./solidarity/solidarity.module').then(
        (m) => m.SolidarityPageModule
      ),
  },
  {
    path: 'chat/:id',
    loadChildren: () =>
      import('./chat/chat.module').then((m) => m.ChatPageModule),
  },
  {
    path: 'messages',
    loadChildren: () =>
      import('./messages/messages.module').then((m) => m.MessagesPageModule),
  },
  {
    path: 'matches',
    loadChildren: () =>
      import('./matches/matches.module').then((m) => m.MatchesPageModule),
  },
  {
    path: 'advert',
    loadChildren: () =>
      import('./advert/advert.module').then((m) => m.AdvertPageModule),
  },
  {
    path: 'advertdetail/:id',
    loadChildren: () =>
      import('./advertdetail/advertdetail.module').then(
        (m) => m.AdvertdetailPageModule
      ),
  },
  {
    path: 'editprofile',
    loadChildren: () => import('./editprofile/editprofile.module').then( m => m.EditprofilePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
