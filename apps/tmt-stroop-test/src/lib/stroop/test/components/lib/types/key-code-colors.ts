export enum KeyCodeColors {
  KeyN = 'KeyN',
  KeyC = 'KeyC',
  KeyZ = 'KeyZ',
  KeyX = 'KeyX'
}

type KeyCodeColorsType = { [key in KeyCodeColors]: string };

export const keyCodeColors: KeyCodeColorsType = {
  [KeyCodeColors.KeyX]: 'Yellow',
  [KeyCodeColors.KeyZ]: 'Green',
  [KeyCodeColors.KeyC]: 'Red',
  [KeyCodeColors.KeyN]: 'Blue'
};
