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

module.exports = function (context) {
    if (this.query == undefined || this.query.pkgName == undefined) {
        throw Error("custom loader haven't recv the pkgName");
    }
    return context.replace(
        /import (\w+) from [\'\"]{1}@system\.(\w+)[\'\"]{1}/g,
        `var $1 = requireNative('${this.query.pkgName}','$2')`
    );
};
