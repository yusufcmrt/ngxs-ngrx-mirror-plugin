# ngxs-ngrx-mirror-plugin

This NGXS plugin will help you if you already using NGRX in your project and want to gradually switch to NGXS.


## Installation

```shell script
npm install @yusufcmrt/ngxs-ngrx-mirror-plugin
```
or if you are using `yarn`

```shell script
yarn add @yusufcmrt/ngxs-ngrx-mirror-plugin
```

## Usage

```typescript

import { NgModule } from '@angular/core';
import { NgrxMirrorPluginModule } from '@yusufcmrt/ngxs-ngrx-mirror-plugin';

@NgModule({
  imports: [
    // ...
    NgrxMirrorPluginModule.forRoot(),
  ]
})
export class AppModule {}
```


