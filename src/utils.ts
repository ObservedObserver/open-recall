// Copyright (C) 2023 observedobserver
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import { IImageKey, IMAGE_PATH } from "./constants";

export function randImageSrc(imgCatKey: string, imgIndex: number) {
    if (!(imgCatKey in IMAGE_PATH)) {
        imgCatKey = IImageKey.sport
    }
    if (!(imgIndex < IMAGE_PATH[imgCatKey as IImageKey].length)) {
        imgIndex =
            Math.round(Math.random() * IMAGE_PATH[imgCatKey as IImageKey].length) %
            IMAGE_PATH[imgCatKey as IImageKey].length;
    }
    return IMAGE_PATH[imgCatKey as IImageKey][imgIndex];
}
