export enum KeyCodeColors {
  KeyA = 'KeyA',
  KeyS = 'KeyS',
  KeyK = 'KeyK',
  KeyL = 'KeyL'
}

type KeyCodeColorsType = { [key in KeyCodeColors]: string };

export const keyCodeColors: KeyCodeColorsType = {
  [KeyCodeColors.KeyA]: 'Yellow',
  [KeyCodeColors.KeyS]: 'Green',
  [KeyCodeColors.KeyK]: 'Red',
  [KeyCodeColors.KeyL]: 'Blue'
};
