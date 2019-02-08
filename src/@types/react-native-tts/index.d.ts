declare module 'react-native-tts' {
  export function getInitStatus(): Promise<boolean>;
  export function setDefaultRate(rate: number): void;
  export function speak(text: string): void;
}
