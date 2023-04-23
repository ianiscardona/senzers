import * as Notifications from "expo-notifications";

export const requestNotificationPermission = async () => {
  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== "granted") {
    console.log("Permission not granted for notifications");
  }
};

export const scheduleNotification = async (content, trigger) => {
  await Notifications.scheduleNotificationAsync({
    content,
    trigger,
  });
};
