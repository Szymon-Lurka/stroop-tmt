import { SelectOption } from '../../../../../../../lib/core-form/models/select-option';
import { SexConfig } from '../configs/sex-config/sex-config';
import { EducationConfig } from '../configs/education-config/education-config';
import { ResidenceConfig } from '../configs/residence-config/ResidenceConfig';
import { FinancialSituationConfig } from '../configs/financial-situation-config/FinancialSituationConfig';
import { PlayingGamesConfig } from '../configs/is-playing-games-config/PlayingGamesConfig';
import { TopPopularGameConfig } from '../configs/top-popular-game-config/TopPopularGameConfig';
import { FutureGamingConfig } from '../configs/future-in-gaming-config/FutureGamingConfig';

enum SelectConfigsEnum {
  sex = 'sex',
  education = 'education',
  residence = 'residence',
  financial = 'financial',
  playingGames = 'playingGames',
  topPopularGame = 'topPopularGame',
  futureGaming = 'futureGaming',
}

type SelectConfigsType = {
  [k in SelectConfigsEnum]: SelectOption[]
}

export const SelectConfigs: SelectConfigsType = {
  [SelectConfigsEnum.sex]: SexConfig,
  [SelectConfigsEnum.education]: EducationConfig,
  [SelectConfigsEnum.residence]: ResidenceConfig,
  [SelectConfigsEnum.financial]: FinancialSituationConfig,
  [SelectConfigsEnum.playingGames]: PlayingGamesConfig,
  [SelectConfigsEnum.topPopularGame]: TopPopularGameConfig,
  [SelectConfigsEnum.futureGaming]: FutureGamingConfig,
}
