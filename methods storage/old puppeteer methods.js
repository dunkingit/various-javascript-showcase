function getUrls(){
    return Array.from(document.querySelectorAll("*")).map(element => element.href).filter(href => href); 
 }
 
 function getUrls2(){
     return Array.from(document.getElementsByTagName("a")).map(element => element).filter(href => href).filter(x => x.getAttribute("href")); 
  }

  function getText(){
   return Array.from(document.querySelectorAll("*")).map(element => element.textContent).filter(text => text);
}
 
 function main(){
    let p = getText()
    console.log(p)
 
 }
 
 main()