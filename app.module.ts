import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule as NgRouterModule } from '@angular/router';
import { UpgradeModule as NgUpgradeModule } from '@angular/upgrade/static';
import { CoreModule, RouterModule, PluginsModule, HOOK_COMPONENTS } from '@c8y/ngx-components';
import {
  DashboardUpgradeModule,
  UpgradeModule,
  HybridAppModule,
  UPGRADE_ROUTES
} from '@c8y/ngx-components/upgrade';
import { AssetsNavigatorModule } from '@c8y/ngx-components/assets-navigator';
import { SubAssetsModule} from '@c8y/ngx-components/sub-assets';
import {
  CockpitDashboardModule,
  ReportDashboardModule
} from '@c8y/ngx-components/context-dashboard';
import { ReportsModule } from '@c8y/ngx-components/reports';
import { SensorPhoneModule } from '@c8y/ngx-components/sensor-phone';
import { BinaryFileDownloadModule } from '@c8y/ngx-components/binary-file-download';
import { SearchModule } from '@c8y/ngx-components/search';
import { WidgetDemo } from './src/demo-widget/demo-widget.component'
import { WidgetConfigDemo } from './src/demo-widget/demo-widget-config.component'

@NgModule({
  imports: [
    // Upgrade module must be the first
    UpgradeModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(),
    NgRouterModule.forRoot([...UPGRADE_ROUTES], { enableTracing: false, useHash: true }),
    CoreModule.forRoot(),
    AssetsNavigatorModule,
    ReportsModule,
    NgUpgradeModule,
    DashboardUpgradeModule,
    CockpitDashboardModule,
    SensorPhoneModule,
    ReportDashboardModule,
    BinaryFileDownloadModule,
    PluginsModule.forRoot(),
    SearchModule,
    SubAssetsModule
  ],
  declarations: [WidgetConfigDemo, WidgetDemo],
  entryComponents: [WidgetDemo, WidgetConfigDemo],
  providers: [{
    provide: HOOK_COMPONENTS,                         // 2.
    multi: true,
    useValue: [
      {
        id: 'acme.text.widget',                        // 3.
        label: 'Text widget',
        description: 'Can display a text',
        component: WidgetDemo,                         // 4.
        configComponent: WidgetConfigDemo,
      }
    ]
  }],
  
})
export class AppModule extends HybridAppModule {
  constructor(protected upgrade: NgUpgradeModule) {
    super();
  }
}
