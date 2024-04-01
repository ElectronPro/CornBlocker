function closer(request , details , sheet){
    if (request.command === "CLOSE!"){
        browser.tabs.query({active:true,currentWindow:true},(tabs) =>{

        if (tabs === undefined){
            console.log("No tabs found :(")
        }
        else {
           console.log("Guard is Online :)")
           const closerr = tabs[0];
           browser.tabs.remove(closerr.id);
        }

        });
    }

    else {
        if (request.logmsg != ""){
            console.log("Msg from content script ",request.logmsg);
        }
    }
};
browser.runtime.onMessage.addListener(closer);


