const flagwords = ["porn","fuck","boobs","booty","hentaifox.com","xnxx.com","xhamster1.desi","xhamster.com","qorno.com","doujinshi","xxx","hentai","yaoi","hentaifox","qorno","xhamster","xnxx","xxvideos","mms","xnxx"];

const wordonli = ["porn","fuck","boobs","booty","hentaifox","xnxx","xhamster1","xhamster","qorno","doujinshi","xxx","hentai","yaoi","hentaifox","qorno","xhamster","xnxx","xxvideos","mms","xnxx"];



function flagged(title){
    return (flagwords.some(words => title.includes(words)));
}


const name = document.title;

if (flagwords.some(wordo => document.title.includes(wordo))){
    console.log("bad Word Found");
    browser.runtime.sendMessage({command:"CLOSE!"});
}



console.log("Checking Page....")

// const car = document.body.innerText.replaceAll(" ","").replaceAll(",","").toLowerCase().split("\n");
const car = document.body.innerText.toLowerCase().replaceAll("\n"," ").replaceAll(",","").toLowerCase().split(" ");


for (let i = 0; i < car.length; i++ ){

if (wordonli.some(word => (car[i].includes(word)))){
    document.getElementsByTagName("html")[0].remove();
    console.log("Found bad String",car[i]);
    browser.runtime.sendMessage({logmsg:"Found Bad word "+car[i]});
    browser.runtime.sendMessage({command:"CLOSE!"});
    break;

}
else {
    console.log("Page is clean ")
}


};

