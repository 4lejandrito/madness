chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (!window.madness) {
        window.madness = window.madness = setInterval(function() {
            $("*").each(function(el) {$(this).css("background-color", "#"+((1<<24)*Math.random()|0).toString(16))});
        }, 70);
        $('.fa').addClass('fa-spin');
    } else {
        window.location.reload();
    }
});
