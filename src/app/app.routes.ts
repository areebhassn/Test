import { Routes } from '@angular/router';
import { AddEmpComponent } from './Components/add-emp/add-emp.component';
import { AdminComponent } from './Components/admin/admin.component';
import { DataBindingComponent } from './Components/data-binding/data-binding.component';
import { AttributeDirectiveComponent } from './Components/Directive/attribute-directive/attribute-directive.component';
import { StructuralDirectiveComponent } from './Components/Directive/structural-directive/structural-directive.component';
import { ForComponent } from './Components/Controll Flow/for/for.component';
import { IfelseComponent } from './Components/Controll Flow/ifelse/ifelse.component';
import { SwitchComponent } from './Components/Controll Flow/switch/switch.component';
import { PipeComponent } from './Components/Pipe/pipe/pipe.component';

export const routes: Routes = [
    {
        path : 'add-emp',
        component : AddEmpComponent
    },
    {
        path : 'admin',
        component : AdminComponent
    },
    {
        path : 'data-Binding',
        component : DataBindingComponent
    },
    {
        path : 'attribute-directive',
        component : AttributeDirectiveComponent
    },
    {
        path : 'structural-directive',
        component : StructuralDirectiveComponent
    },
    {
        path : 'for-Control',
        component : ForComponent
    },
    {
        path : 'if-else-Control',
        component : IfelseComponent
    },
    {
        path : 'switch-Control',
        component : SwitchComponent
    },
    {
        path : 'Pipe',
        component : PipeComponent
    },
];
