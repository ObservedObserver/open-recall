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

export const HISTORY_KEY = "open_call_history";

export enum IImageKey {
    default = "default",
    animalFace = "animalFace",
}

export const IMAGE_PATH: { [key in IImageKey]: string[] } = {
    [IImageKey.default]: [
        "/default/series-0-0.png",
        "/default/series-0-1.png",
        "/default/series-0-2.png",
        "/default/series-0-3.png",
        "/default/series-0-4.png",
        "/default/series-0-5.png",
    ],
    [IImageKey.animalFace]: [
        "/animals/animalface_cheetah.png",
        "/animals/animalface_panda.png",
        "/animals/animalface_usagi.png",
        "/animals/animalface_duck.png",
        "/animals/animalface_tora.png",
        "/animals/animalface_zou.png",
        "/animals/animalface_niwatori.png",
        "/animals/animalface_uma.png",
    ],
};
