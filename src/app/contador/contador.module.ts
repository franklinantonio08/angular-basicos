import {NgModule} from '@angular/core'
import { ContadorComponent } from './contador/contador.component'


@NgModule({
    declarations:[
       // HeroeComponent,
       // ListadoComponent
       ContadorComponent
    ],
    exports:[
       // ListadoComponent
       ContadorComponent
    ],
    imports:[
       // CommonModule
    ]
})


export class ContadorModule{}