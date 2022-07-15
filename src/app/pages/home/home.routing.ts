import { ModuleWithProviders } from '@angular/core'
import { RouterModule } from '@angular/router'

import { HomeComponent } from './home.component'

export const HomeRoutingModule: ModuleWithProviders<any> =
  RouterModule.forChild([
    {
      path: '',
      runGuardsAndResolvers: 'always',
      component: HomeComponent,
    }
  ])
