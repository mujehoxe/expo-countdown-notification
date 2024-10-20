import ExpoCountdownNotificationModule from 'expo-countdown-notification/src/ExpoCountdownNotificationModule';

export function display(reminderTime: number, message: string, keepAfterFor: number): void {
  return ExpoCountdownNotificationModule.display(reminderTime, message, keepAfterFor);
}
