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
    sport = "sport",
    animalFace = "animalFace",
    food = "food",
}

export const IMAGE_PATH: { [key in IImageKey]: string[] } = {
    [IImageKey.sport]: [
        "/sport/sport_american_football.png",
        "/sport/baseball_ball.png",
        "/sport/sport_tennis_ball.png",
        "/sport/soccer_ball.png",
        "/sport/sports_badminton_shuttle.png",
        "/sport/sports_ball_amefuto.png",
        "/sport/sport_basketball.png",
        "/sport/tabletennis_racket.png",
    ],
    [IImageKey.animalFace]: [
        "/animals/animalface_niwatori.png",
        "/animals/animalface_duck.png",
        "/animals/animalface_cheetah.png",
        "/animals/animalface_panda.png",
        "/animals/animalface_usagi.png",
        "/animals/animalface_tora.png",
        "/animals/animalface_zou.png",
        "/animals/animalface_uma.png",
    ],
    [IImageKey.food]: [
        "/food/food_curry_rice_blue.png",
        "/food/food_tama_konnyaku_kushi.png",
        "/food/food_ebi_fry_set.png",
        "/food/food_perimeni.png",
        "/food/food_udon_goboten.png",
        "/food/food_pi-tan_tofu.png",
        "/food/niku_manga.png",
    ],
};
