function Notify(message, type, duration)
    SendNUIMessage({
        action = 'notification',
        message = message,
        type = type,
        duration = duration,
        theme = DarkDevelopment.Theme,
    })
end

RegisterNetEvent('ddNotify:Notification', function(message, type, duration)
    Notify(message, type, duration)
end)

RegisterCommand('info', function ()
    Notify('Test Info Notify', 'info', 5000)
end)

RegisterCommand('success', function ()
    Notify('Test Success Notify', 'success', 5000)
end)

RegisterCommand('error', function ()
    Notify('Test Error Notify', 'error', 5000)
end)

RegisterCommand('warning', function ()
    Notify('Test Warning Notify', 'warning', 5000)
end)