/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare var tinymce: any;

declare var echarts: typeof import("/home/shankha/Projects/Multi_Tenant_App/client/node_modules/echarts/types/dist/echarts");
