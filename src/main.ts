import "zone.js"
import "./main.tsx"
import {bootstrapApplication} from '@angular/platform-browser';
import {AngularAppComponent} from "./angular/app.component.ts";
bootstrapApplication(AngularAppComponent).catch(console.error)
