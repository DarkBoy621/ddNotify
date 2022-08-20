var audioplayed = false
window.addEventListener('message', function(event) {
    var item = event.data;
    if (item.action == 'notification') {
        var notify
        var type = null
        var duration = 0
        var icon = null
        if(item.type == null){
            type = 'info'
            icon = 'fa-solid fa-circle-info'
        } else {
            type = item.type 
        }

        if(item.type == 'info'){
            icon = 'fa-solid fa-circle-info'
        } else if (item.type == 'success') {
            icon = 'fa-solid fa-circle-check' 
        } else if (item.type == 'error') {
            icon = 'fa-solid fa-circle-xmark' 
        } else if (item.type == 'warning') {
            icon = 'fa-solid fa-circle-exclamation' 
        }

        if(item.duration == null){
            duration = 5000
        } else {
            duration = item.duration
        }
        var audio = new Audio('./sound/popup.mp3')
        audio.loop = false
        audio.play()
        audioplayed = true
        notify = $('<div class="notification '+ item.theme +' '+ type + '"><p><i class="'+ icon +'"></i>'+ item.message +'</p></div>');

        $('.notification-wrapper').prepend(notify)
        $(notify).slideDown()

        setTimeout(function(){
            $(notify).slideUp()
        }, duration)

        setTimeout(function(){
            $(notify).css('display', 'none')
            audioplayed = false
        }, duration + 500)
    };
});