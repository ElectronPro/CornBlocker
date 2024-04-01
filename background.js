const { browser } = window;
const flagwords = ["porn","hentaifox.com","xnxx","xhamster1","xhamster","qorno","doujinshi","xxx","hentai","yaoi","hentaifox","qorno","xhamster","xnxx","xxvideos","mms","xnxx"];

console.clear();

function close(){
    browser.tabs.query({active:true,currentWindow:true},(tab)=>{
     if (tab === undefined){

     }
     else{
       const po = tab[0]
       browser.tabs.remove(po.id);
     }
      
    })
  };


browser.webRequest.onBeforeRequest.addListener(async(det)=>{

    const srcurl = new URL(det.url);
  
    if (srcurl.hostname ==="cornblocker.vercel.app"){
  
  
    }
    
    else {
          var api = await fetch("https://cornblocker.vercel.app/check?q="+srcurl.hostname)
          var chk = await api.text()
          console.log("===".repeat(srcurl.hostname.length))
          console.log(srcurl.hostname,"IS",chk+"ged");
          console.log("===".repeat(srcurl.hostname.length))

          if (chk ==="redflag"){
              close();
              return {cancel:true}
          }



  }
  },
  {urls:["<all_urls>"]},
  ["blocking"]);










browser.webNavigation.onBeforeNavigate.addListener(async function(details) {
  const url = new URL(details.url);
  if (url.hostname === ""){

  }
  else {
  const response = await fetch("https://cornblocker.vercel.app/check?q=" + url.hostname);
  console.log("===".repeat(url.hostname.length))
  console.log("https://cornblocker.vercel.app/check?q=" + url.hostname);
  console.log("===".repeat(url.hostname.length))
  const data = await response.text();
  console.log(data);
  console.log("===".repeat(url.hostname.length))
  console.log("We are Protecting You :) ")
  if (data === "redflag") {
    browser.windows.remove(details.windowId);
    console.log("We protected You :) ") // Close the tab
  }


  if (flagwords.some(wordo => url.pathname.includes(wordo))){

    console.log("Found bad word in ",url.pathname);

    browser.query.tabs({active:true,currentWindow:true},(tabs) =>{
      
      const fg = tabs[0];
      browser.windows.remove(fg.windowId);


    })

  }


  if (flagwords.some(wordo => url.search.includes(wordo))){
    console.log("Found Flagged word in search")
    browser.windows.remove(details.windowId);
  }



  if (flagwords.some(wordo => url.href.includes(wordo))){
    console.log("Found Flagged word in Href")
    browser.windows.remove(details.windowId);
  }


}


});
