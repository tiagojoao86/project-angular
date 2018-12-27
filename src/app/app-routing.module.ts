import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipesEditComponent } from "./recipes/recipes-edit/recipes-edit.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { AuthGuard } from "./auth/auth-guard.service";


const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full'},    
    { path: 'recipes', component: RecipesComponent, children: [
        { path: '', component: RecipeStartComponent},
        { path: 'new', component: RecipesEditComponent, 
                                    canActivate : [AuthGuard]},
        { path: ':id', component: RecipeDetailComponent},
        { path: ':id/edit', component: RecipesEditComponent,
                                    canActivate : [AuthGuard]}
    ]},
    { path: 'shopping-list', component: ShoppingListComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'signin', component: SigninComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}