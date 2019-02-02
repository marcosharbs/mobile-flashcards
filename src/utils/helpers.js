import { Notifications, Permissions } from 'expo'
import { AsyncStorage } from 'react-native'

const NOTIFICATION_KEY = 'DECKAPP:NOTIFICATIONS'

export function clearLocalNotifications() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
        if(data == null) {
            Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then(({ status }) => {
                /*
                Sei que deveria comparar se o status === granted
                mas no simulador ios o status sempre retorna "undetermined",
                mesmo eu dando Allow quando exibe a modal de permissão.
                Parece que isso é um bug (https://github.com/expo/expo/issues/516)
                */
                if(status !== 'denied') {
                    Notifications.cancelAllScheduledNotificationsAsync()

                    let today = new Date()
                    today.setHours(today.getHours() + 1)
                    today.setMinutes(0)
                    today.setMilliseconds(0)

                    Notifications.scheduleLocalNotificationAsync(
                        createNotification(),
                        { time: today }
                    )

                    AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                }
            })
        }
    })
}

function createNotification() {
    return {
        title: 'Hey!',
        body: 'You have not taked any quiz today yet!',
        ios: {
            sound: true
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true
        }
    }
}