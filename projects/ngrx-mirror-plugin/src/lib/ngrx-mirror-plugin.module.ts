import {ModuleWithProviders, NgModule} from '@angular/core';
import {NGXS_PLUGINS} from '@ngxs/store';
import {NgrxUpdateService} from './ngrx-update.service';
import {NgxsUpdateService} from './ngxs-update.service';


@NgModule()
export class NgrxMirrorPluginModule {

  constructor(ngrxUpdateService: NgrxUpdateService) {
  }

  static forRoot(): ModuleWithProviders<NgrxMirrorPluginModule> {
    return {
      ngModule: NgrxMirrorPluginModule,
      providers: [
        {provide: NGXS_PLUGINS, useClass: NgxsUpdateService, multi: true},
        NgrxUpdateService,
      ],
    };
  }
}
