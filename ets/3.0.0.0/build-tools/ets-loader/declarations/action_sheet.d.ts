/*
  * Copyright (c) 2021 Huawei Device Co., Ltd.
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *     http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */

interface SheetInfo {
    title: string | Resource;
    icon?: string | Resource;
    action: () => void;
}
declare class ActionSheetExtend<T> extends ActionSheetAttribute<T> {
}
interface ActionSheet extends ActionSheetAttribute<ActionSheet> {
}
declare class ActionSheetAttribute<T> extends CommonMethod<T> {
    show(value: {
        title: string | Resource;
        message: string | Resource;
        confirm?: {
            value: string | Resource;
            action: () => void;
        };
        cancel?: () => void;
        sheets: Array<SheetInfo>;
        autoCancel?: boolean;
        alignment?: DialogAlignment;
        offset?: {
            dx: number | string | Resource;
            dy: number | string | Resource;
        };
    });
}
declare const ActionSheet: ActionSheet;
