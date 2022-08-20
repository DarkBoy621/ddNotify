fx_version 'cerulean'
games { 'gta5' }

author 'DarkBoy (Dark Development)'
description 'Simple Notification'
version '1.0.0'

ui_page 'html/index.html'

files {
    'html/index.html',
    'html/js/*.js',
    'html/css/*.css',
    'html/sound/*.mp3'
}

client_scripts {
    'config.lua',
    'client.lua'
}

exports {
    'Notify',
}