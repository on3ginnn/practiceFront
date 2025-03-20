import { atom, useSetAtom, useAtom } from 'jotai';
import { lightTheme, darkTheme } from './themes';

const themeAtom = atom(lightTheme);
const themeModeAtom = atom('light');

export { themeAtom, themeModeAtom };
export function useTheme() {
  return useAtom(themeAtom);
}
export function useSetThemeMode() {
  return useSetAtom(themeModeAtom);
}
export function useSetTheme() {
  return useSetAtom(themeAtom);
}
