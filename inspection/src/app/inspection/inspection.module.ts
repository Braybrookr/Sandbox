import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { inspectionComponent } from './containers/inspection/inspection.component'

@NgModule({
    declarations: [
        inspectionComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        inspectionComponent
    ]

})

export class inspectionModule { }
