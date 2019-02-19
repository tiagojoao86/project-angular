import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../auth/auth-guard.service";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipesEditComponent } from "./recipes-edit/recipes-edit.component";
import { RecipesComponent } from "./recipes.component";

const recipesRoutes: Routes = [
    { path: '', component: RecipesComponent, children: [
        { path: '', component: RecipeStartComponent},
        { path: 'new', component: RecipesEditComponent, 
                                    canActivate : [AuthGuard]},
        { path: ':id', component: RecipeDetailComponent},
        { path: ':id/edit', component: RecipesEditComponent,
                                    canActivate : [AuthGuard]}
    ]},
];

@NgModule({
    imports: [
        RouterModule.forChild(recipesRoutes)
    ],
    exports: [RouterModule]
})
export class RecipesRoutingModule {}