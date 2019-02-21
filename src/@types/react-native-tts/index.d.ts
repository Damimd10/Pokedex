declare module 'react-native-tts' {
  export function getInitStatus(): Promise<boolean>;
  export function setDefaultLanguage(language: string): void;
  export function setDefaultRate(rate: number): void;
  export function speak(text: string): void;
  export function stop(): void;
}
