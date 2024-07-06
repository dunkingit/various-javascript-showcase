// // async function iter_joblinks() {
// //   //https://www.indeed.com/jobs?q=developer&l=Ohio&rbl=Columbus,+OH&jlid=8ddf8cac9ee9aa9d
// //   //https://www.indeed.com/jobs?q=developer
// //   let whole = []

// //   const browser = await puppeteer.launch({ headless: false });
// //   const page = await browser.newPage();

// //   let len = job_links.length;
// //   let counter = 0;
// //   let fileCounter = 0;
// //   for (let each of job_links) {

// //       await delay(2000)
// //       counter++;

// //       if (!visited_links.includes(each)) {
// //           console.log(`Visiting ${counter} of ${len}`);
// //           try {
// //               await page.goto(each, { waitUntil: 'networkidle0' });

// //               let wholeObj = await eval_special_whole(page)
// //               if(wholeObj){
// //                 wholeObj["url"] = each
// //                 whole.push(wholeObj)
// //               }

// //               let obj = await eval_special(page);
// //               if(obj){
// //                 jobs.push(obj);
// //                 visited_links.push(each);
// //               }
// //               else{
// //                 error_links.push(each)
// //               }
// //           } catch (err) {
// //               console.error(err);
// //               console.log(`Error for url: ${each}`)
// //               error_links.push(each);
// //           }


// //           if (jobs.length % 500 === 0) {
// //             fileCounter++;
// //           }//end if length
// //         }//end if visited
// //       }//end for loop

// //   await browser.close();
// // }




// // async function test(){
// //   const testlink = "https://www.indeed.com/jobs?q=developer&l=11575&radius=10"
// //   const verify_human_class = "#challenge-running"
// //   //Verify you are human by completing the action below.
// //   const verify_is_human_textContent = "Verify you are human"

// //   const browser = await puppeteer.launch({ headless: false });
// //   const page = await browser.newPage();
// //   await page.goto(testlink, { waitUntil: 'networkidle0' });
// //   let element = await check_valid_page_no_captcha(page)
// // }


// // loaded.get_urls_from_generateSearchUrls()
// // searchSiteForJobLinks()

// //       // "truncate font-bold text-neutral-content-strong text-12 hover:underline",
// //   // "flex items-center justify-center"
// //     //     "text-tone-2 text-12 no-underline hover:underline px-xs py-xs flex ml-[3px] xs:ml-0 !bg-transparent !border-0"

// //     function main(){
// //         let test = "/r/Columbus/comments/1bpto8u/comment/kwyqj65/"
// //         let test2 = "kwyqj65"
// //         console.clear()
// //         let urls = Array.from(document.querySelectorAll("*")).map(cu => cu.href).filter(cu => cu)
        
// //         let text = ""
// //         for(let each of urls){    
// //           if(String(each).includes("comment")){
// //              text += `${each}\n`
// //         }
// //       }
// //         console.log(text)
// //       }
      
      
// //       function clicker(){
// //       let cls =[
// //       "text-secondary-weak font-normal"
// //       ]
      
// //       for(let each of cls){
// //           let arr = document.getElementsByClassName(each)
// //         for(let other of arr){
// //           try{other.click()}catch(err){}
// //         }
// //       }
// //       }
    
// //     function text(){
// //       let t = "md text-14 rounded-[8px] pb-2xs"
// //       let textArray = document.getElementsByClassName(t)
// //       for(let each of textArray){
// //         console.log(each.innerText)   
// //       }
// //     }
    
// //       function tester(){
// //       let cls =[
// //       "text-secondary-weak font-normal"
// //       ]
      
// //       for(let each of cls){
// //           let arr = document.getElementsByClassName(each)
// //           //reply and or replies
// //         for(let other of arr){
// //          console.log(other.innerText)
// //         }
// //       }
// //       }
      
// //     clicker()
// //     clicker()
// //     clicker()
// //     clicker()
// //     tester()
    
    
    
    
// //     let x = 0
// // while(x < 20){
// //   x++
// //   clicker()
// // }



// // function clicker(){
// //   let foundButton = true
// //   while(foundButton){
// //       foundButton = false
// //       let cl = "text-secondary-weak font-normal"       
// //       let arr = document.getElementsByClassName(cl)    
// //       for(let each of arr){
// // 			try{
// //         if(each.innerText.includes("replies") || each.innerText.includes("reply")){
// //           each.click();
// //         	foundButton = true;  
// //         }
// //         }catch(err){}
// // }
// // }

// // clicker()



// // function clicker(){
// //   let foundButton = false
// //   let cl = "text-secondary-weak font-normal"       
// //   let arr = document.getElementsByClassName(cl)    
// //   for(let each of arr){
// //     try{
// //       if(each.innerText.includes("replies") || each.innerText.includes("reply")){
// //         console.log(each.innerText)
// //         each.click();
// //         foundButton = true;  
// //       }
// //     }catch(err){};};
// //   if(foundButton){
// //     setTimeout(clicker, 1000)
// //   }else{return}
// // }

// // clicker()
    


// let allText = []

// function clicker(){
//   let foundButton = false
//   let cl = "text-secondary-weak font-normal"
//   let cl1 = "text-tone-2 text-12 no-underline hover:underline px-xs py-xs flex ml-[3px] xs:ml-0 !bg-transparent !border-0"
//   let cl2 = "text-tone-2 text-12 no-underline hover:underline px-xs py-xs flex ml-[3px] xs:ml-0 !bg-transparent !border-0 invisible h-0 !p-0"
//   let arr = document.getElementsByClassName(cl2)    
//   for(let each of arr){
//     try{
//       if(each.innerText.includes("replies") || each.innerText.includes("reply")){
//         console.log(each.innerText)
//         each.click();
//         foundButton = true;  
//       }
//     }catch(err){};};
// //   if(foundButton){
// // //     setTimeout(clicker, 1000)
// //     clicker()
// //   }else{return}
// }



// function text(){
//   let found = false
//   let t = "md text-14 rounded-[8px] pb-2xs"
//   let textArray = document.getElementsByClassName(t)
//   for(let each of textArray){
//     console.log(each.innerText)
//     if(!allText.includes(each.innerText)){
//       found = true
//       allText.push(each.innerText)
//     }
//   }
//   console.log(`Found: ${found}`)
// }


// function text2(){
//   let arr = Array.from(document.querySelectorAll("p")).map(cu => cu.innerText).filter(cu => cu)
//   for(let each of arr){
//     console.log(each)
    
//   }
  
// }


// function btn(){
// //   each.innerText.includes("reply")
//   let arr = Array.from(document.querySelectorAll("button"))
//   for(let each of arr){
//    try{
//       if(each.innerText.includes("replies")){
//         each.click();
//       }
//     }catch(err){};};
    
//   }


// text()
// clicker()
// setTimeout(text, 3000)



// // Create an interface for readline
// // const rl = readline.createInterface({
// //     input: process.stdin,
// //     output: process.stdout
// // });

// // // Function to prompt user input
// // function askQuestion(query) {
// //     return new Promise((resolve) => {
// //         rl.question(query, (answer) => {
// //             resolve(answer);
// //             rl.close(); // Close the readline interface after getting the input
// //         });
// //     });
// // }

// const client_id = process.env.client_id;
// const client_secret = process.env.client_secret;
// const twitch_auth_token = process.env.twitch_auth_token;
// // let config;
// // (async () => {
// //     config = await readJson("config");
// // })();
    
    
    
    
// const { response } = require("express");
// const PuppeteerHar = require('puppeteer-har');
// const print = require("./viewMethods.js");
// const exec = require('child_process');
// const { del } = require("request");
// const { stringify } = require("querystring");
// const { get } = require("https");
// const { error, time } = require("console");
// const { all } = require("axios");
// const { METHODS } = require("http");
// const path = require('node:path'); 
// const fs = require('fs')


// // let allText = []

// // function clicker(){
// //   let foundButton = false
// //   let cl = "text-secondary-weak font-normal"
// //   let cl1 = "text-tone-2 text-12 no-underline hover:underline px-xs py-xs flex ml-[3px] xs:ml-0 !bg-transparent !border-0"
// //   let cl2 = "text-tone-2 text-12 no-underline hover:underline px-xs py-xs flex ml-[3px] xs:ml-0 !bg-transparent !border-0 invisible h-0 !p-0"
// //   let arr = document.getElementsByClassName(cl2)    
// //   for(let each of arr){
// //     try{
// //       if(each.innerText.includes("replies") || each.innerText.includes("reply")){
// //         console.log(each.innerText)
// //         each.click();
// //         foundButton = true;  
// //       }
// //     }catch(err){};};
// // //   if(foundButton){
// // // //     setTimeout(clicker, 1000)
// // //     clicker()
// // //   }else{return}
// // }


// // function text(){
// //   let found = false
// //   let t = "md text-14 rounded-[8px] pb-2xs"
// //   let textArray = document.getElementsByClassName(t)
// //   for(let each of textArray){
// //     if(!allText.includes(each.innerText)){
// //       found = true
// //       allText.push(each.innerText)
// //     }
// //   }
// //   return found
// // }

// // async function main(){
// //   	let found = text()
// //     console.log(`found: ${found}`)
// //     if(found){
// //       clicker()
// //       setTimeout(() => {main()}, 3000)
// //     }
// //   }

// // await main()
// // for(let each of allText){
// //   console.log(each)
// // }


// let allText = [];

// function clicker() {
//     let foundButton = false;
//     let cl2 = "text-tone-2 text-12 no-underline hover:underline px-xs py-xs flex ml-[3px] xs:ml-0 !bg-transparent !border-0 invisible h-0 !p-0";
//     let arr = document.getElementsByClassName(cl2);    
//     for (let each of arr) {
//         try {
//             if (each.innerText.includes("replies") || each.innerText.includes("reply")) {
//                 console.log(each.innerText);
//                 each.click();
//                 foundButton = true;  
//             }
//         } catch (err) {
//             console.error(err);
//         }
//     }
//     // Enable this if you want recursive behavior
//     // if (foundButton) {
//     //     clicker();
//     // }
// }

// function text() {
//     let found = false;
//     let t = "md text-14 rounded-[8px] pb-2xs";
//     let textArray = document.getElementsByClassName(t);
//     for (let each of textArray) {
//         if (!allText.includes(each.innerText)) {
//             found = true;
//             allText.push(each.innerText);
//         }
//     }
//     return found;
// }

// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function main() {
//     let found = text();
//     console.log(`found: ${found}`);
//     if (found) {
//         clicker();
//         await delay(3000);  // Wait for 3000 ms
//         await main();       // Recursive call to main
//     }
// }

// async function run() {
//     await main();
//     // for (let each of allText) {
//     //     console.log(each);
//     // }
//     return allText
// }

// return await run();


// //==========================================================

// allText = [];

// function clicker() {
//     let foundButton = false;
//     let cl2 = "text-tone-2 text-12 no-underline hover:underline px-xs py-xs flex ml-[3px] xs:ml-0 !bg-transparent !border-0 invisible h-0 !p-0";
//     let arr = document.getElementsByClassName(cl2);    
//     for (let each of arr) {
//         try {
//             if (each.innerText.includes("replies") || each.innerText.includes("reply")) {
//                 console.log(each.innerText);
//                 each.click();
//                 foundButton = true;  
//             }
//         } catch (err) {
//             console.error(err);
//         }
//     }
//     // Enable this if you want recursive behavior
//     // if (foundButton) {
//     //     clicker();
//     // }
// }

// function text() {
//     let found = false;
//     let t = "md text-14 rounded-[8px] pb-2xs";
// //     let textArray = document.getElementsByClassName(t);
//   	let textArray = document.querySelectorAll("p")
//     for (let each of textArray) {
//         if (!allText.includes(each.innerText)) {
//             found = true;
//             allText.push(each.innerText);
//         }
//     }
//     return found;
// }

// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function main() {
//     let found = text();
//     console.log(`found: ${found}`);
//     if (found) {
//         clicker();
//         await delay(3000);  // Wait for 3000 ms
//         await main();       // Recursive call to main
//     }
// }

// async function run() {
//     await main();
//     for (let each of allText) {
//         console.log(each);
//     }
// }

// run();

    
// // // for(let i = 0; i < temp.length; i++){
    
// // // }

// // // const readline = require('node:readline');
// // // const { stdin: input, stdout: output } = require('node:process');
// // // const rl = readline.createInterface({ input, output });

// // // async function getInput(question){
// // //     let returnAnswer;
// // //     await rl.question(question, (answer) => {
// // //         // TODO: Log the answer in a database
// // //         console.log(`Thank you for your valuable feedback: ${answer}`);
// // //         console.log(getInput(question))
// // //       });
// // //       return returnAnswer
// // // }
// // // async function main(){
// // //     let q = "What do you think of Node.js?"
// // //     let a = await getInput(q)
// // //     console.log(a)

// // // }

// // // function main(){
// // //     let text = "https://chatgpt.com"
// // //     // (https|http:\/\/)?
// // //     let regex =/(https|http:\/\/)?.*/gi
// // //     console.log(regex.exec(text))
// // // }

// // // function main(test = 3, other = 5, retries = 3){
// // //     let tester = false
// // //     if(test === 2){
// // //         tester = true
// // //         return tester
// // //     }
// // //     if(retries === 0){
// // //         return tester
// // //     }else{
// // //         if(!tester){
// // //             console.log(tester)
// // //             return main(test -1 , other - 1, retries - 1)
// // //         }
// // //     }

// // // }
// // // function compare(temp, sum){
// // //     for(let i = 0; i < temp.length; i++){
// // //         let selectElement = temp.slice(i, 1)[0]
// // //         for(let j = i+1; j < temp.length; j++){
// // //             let compareElement = temp[j]
// // //             let addedTogether = selectElement + compareElement
// // //             if(addedTogether === sum){
// // //                 console.log("temp", temp)
// // //                 return [j, i].flatMap(cu => temp.splice(cu, 1))
// // //             }
// // //             // console.log(`i = ${selectElement} + j = ${compareElement} = ${addedTogether}`)
// // //         }
// // //         // console.log(`End of ${i}`)
// // //     }

// // //     return false

// // // }



// // // function birthday(paramArray, d, m) {
// // //     let temp = [...paramArray]
// // //     let save = []
// // //     let counter = 0

// // //     while(true){


// // //         counter++
// // //         if(temp.length < 2){
// // //             break
// // //         }
// // //         let pair = compare(temp, d)
// // //         if(Array.isArray(pair)){
// // //             save.push(pair)
// // //         }        if(!pair){
// // //             break
// // //         }
// // //         if(counter >= 4){
// // //             break
// // //         }
// // //     }
// // //     console.log(save)
// // // }


// // // function birthday(paramArray = [2,2,1,3,2], d=4, m = 2) {
// // //     let x = paramArray.map((mcu, ind) => paramArray.slice(ind, ind + m)).filter(cu => cu.reduce((cu, ac) => cu + ac) === d )
// // //     console.log(x)
// // // }
// // // function birthday(s, d, m) {
// // //     return s.map((mcu, ind) => s.slice(ind, ind + m)).filter(cu => cu.reduce((cu, ac) => cu + ac) === d ).length

// // // }
// // // birthday()

// // // function main(input){
// // //     let x = input.split("\n")
// // //     // let x = sp.split("").map((cu, ind) => {
// // //     //     console.log(`cu = ${cu}\nnumbar: ${ind + item.indexOf("\n") + 1}\nindex ${item.slice(ind + item.indexOf("\n") + 1)}\nnext is: ${item.slice((ind + item.indexOf("\n") + 1), (ind + item.indexOf("\n") + 2))}` )
// // //     //     return cu == item.slice((ind + item.indexOf("\n") + 1), (ind + item.indexOf("\n") + 2))?0:cu}).join("")

// // //     // console.log(input.split("\n")[0].split("").map((cu, ind) => {return cu == input.slice(ind + input.indexOf("\n") + 1, ind + input.indexOf("\n") + 2)?0:cu || input.slice(ind + input.indexOf("\n") + 1, ind + input.indexOf("\n") + 2)}).join(""))
// // //     // for(let i =0; i < x[0].length; i++){
// // //     //     let a = x[0][i]
// // //     //     let b = x[1][i]
// // //     //     console.log(a, b)
// // //     //     console.log(a ^ b)
// // //     //     }
        
// // //     console.log(input.split("\n")[0].split("").map((cu, ind) => cu ^ input.slice(ind + input.indexOf("\n") + 1, ind + input.indexOf("\n") + 2)).join(""))
// // // }   
// // // let input = ""
// // // function main(chunk){
// // //     let test = input.length == 0?chunk:chunk.split("").map((cu, ind) =>{
// // //         let a = input.slice(ind, ind+1)
// // //         let b = chunk.slice(ind, ind+1)
// // //         console.log(a, b, a ^ b)
// // //         return input.slice(ind, ind+1) ^ chunk.slice(ind, ind+1)
    
// // //     }).join("")
// // //     console.log(test)
// // //     input = test
// // //     console.log(input)
// // // }


// // // function main(chunk){
// // //     // input = input.length == 0?chunk:chunk.split("").map((cu, ind) =>{return input.slice(ind, ind+1) ^ chunk.slice(ind, ind+1)
// // //     // input = chunk.split("\n")[0].split("").map((cu, ind) =>{return chunk.split("\n")[1].slice(ind, ind+1) ^ cu}).join("")
// // //     input = chunk.split("\n")[0] ^ chunk.split("\n")[1]

// // //     console.log(String(input.split("\n")[0] ^ input.split("\n")[1]))
// // // }

// // // // return "".join([str(int(v1) ^ int(v2)) for v1, v2 in zip(s, t)])

// // // main("10101\n00101")
// // // console.log(input)

// // // function main(n){
// // //     // let x = Array.from(test).map(cu => cu == 0?1:0).join("")
// // //     let binary = "0".repeat(32 - n.toString(2).length) + n.toString(2)
// // //     console.log(parseInt(Array.from(binary).map(cu => cu == 0?1:0).join(""), 2))

// // // }

// // // main(2147483647)
// // // chunk.split("").map((cu, ind) =>{return cu ^ chunk.slice(ind +1, ind + 2)}).join("");
// // // });

// // // function main(arr){
// // //     // let x = Array.from(test).map(cu => cu == 0?1:0).join("")
// // //     let num = 0
// // //     let counted = []
// // //     let test = {}
// // //     // let arrayOfPairedNumbers = arr.map(cu => arr.filter(cu2 => cu == cu2)).filter(cu => counted.includes(cu[0])?false:counted.push(cu[0]))
// // //     // arrayOfPairedNumbers.forEach(cu => num += Math.trunc(cu.length / 2))
// // //     // console.log(num)
// // //     arr.forEach(cu => !Object.keys(test).includes(`${cu}`)? test[`${cu}`] = 1: test[`${cu}`]++)
// // //     Object.values(test).reduce((cu, ac) = { Math.trunc( / 2)})


// // // }

// // // main([1,2,1,2,1,3,2])

// // // function countBackwards(num, p){
// // //     counter = 0
// // //     for (let i = num + 1; i > 0; i = i - 2){
// // //     }
// // // }

// // // function main(n, p){
// // //     let startWithFront = p <= n / 2 
// // //     let pages = []
// // //     let page = []
// // //     for (let i = 1; i < n + 1; i++){
// // //         page.push(i)
// // //         if(i % 2 != 0){
// // //             pages.push(page)
// // //             page = []
// // //         }else if(i == n){
// // //             pages.push(page)
// // //         }
// // //     }
// // //     if(!startWithFront){
// // //         pages = pages.reverse()
// // //     }
// // //     let result = pages.findIndex((cu) => cu.includes(p))
// // //     console.log(pages)
// // //     return result

// // // }

// // // main(5, 2)

// // // function towerBreakers(n, m) {
// // //     let counter = 0
// // //     let towers = `${m}`.repeat(n).split("").flatMap(cu => Number(cu))
// // //     while(counter <= 2){
// // //         let player;
// // //         let winner;
// // //         for(let i = 1; i < 3; i++){
// // //             console.log(towers)
// // //             player = i
// // //             let checkTowers = towers.map(cu => cu % 2 == 0? cu / 2:0)
// // //             let hasLost = towers.every(cu => cu == 1)
// // //             console.log(hasLost)
// // //             if(hasLost){
// // //                 winner = i == 1?2:1
// // //                 console.log(`Winner is: ${winner}`)
// // //                 break
// // //             }
// // //             let reduceToOne = checkTowers.every(cu => cu == 0)
// // //             let y = Math.max(...checkTowers)
// // //             let r;
// // //             if(reduceToOne){
// // //                 towers[towers.findIndex(cu => cu > 1)] = towers[towers.findIndex(cu => cu > 1)] - (towers[towers.findIndex(cu => cu > 1)] - 1)
// // //             }else{                
// // //                 towers[checkTowers.indexOf(y)] = towers[checkTowers.indexOf(y)] - y
// // //             }

// // //         }
// // //         counter++

// // //         if(winner){
// // //             break
// // //         }
// // //     }
// // // }

// // // function findAnIndex(arr, greaterThan){
// // //     return arr.findIndex(cu => cu > greaterThan) 
// // // }


// // // function checkMoves(arr, moves = 0){
// // //     let testsAbove1 = arr.filter(cu => cu > 1).length
// // //     if(testsAbove1 == 1){
// // //         arr[arr.findIndex(cu => cu > 1)] = 1
// // //         return checkMoves(arr, moves == 1?2:1)
// // //     }
    

// // //     let hasLost = arr.every(cu => cu == 1)
// // //     if(hasLost){
// // //         return moves
// // //     }

// // //     let played = false

// // //     for(let i = 0; i < arr.length; i++){
// // //         let checkDivide = arr[i] % 2 == 0
// // //         if(checkDivide){
// // //             arr[i] = arr[i] / 2
// // //             played = true
// // //             break
// // //         }
        
// // // }
// // //     if(played){
// // //         return checkMoves(arr, moves == 1?2:1)
// // //     }else{
// // //         arr[arr.findIndex(cu => cu > 1)] = 1
// // //         return checkMoves(arr, moves == 1?2:1)
// // //     }
// // // }



// // // function towerBreakers(n, m) {
// // //     let counter = 0
// // //     let towers = `${m}`.repeat(n).split("").flatMap(cu => Number(cu))
// // //     while(counter <= 2){
// // //         let player;
// // //         let winner;
// // //         for(let i = 1; i < 3; i++){
// // //             console.log(towers)
// // //             player = i
// // //             let checkTowers = towers.map(cu => cu % 2 == 0? cu / 2:0)
// // //             let hasLost = towers.every(cu => cu == 1)
// // //             if(hasLost){
// // //                 winner = i == 1?2:1
// // //                 console.log(`Winner is: ${winner}`)
// // //                 break
// // //             }
// // //             let reduceToOne = checkTowers.every(cu => cu == 0)
// // //             let y = Math.max(...checkTowers)
// // //             let r;
// // //             if(reduceToOne){
// // //                 towers[towers.findIndex(cu => cu > 1)] = towers[towers.findIndex(cu => cu > 1)] - (towers[towers.findIndex(cu => cu > 1)] - 1)
// // //             }else{                
// // //                 towers[checkTowers.indexOf(y)] = towers[checkTowers.indexOf(y)] - y
// // //             }

// // //         }
// // //         counter++

// // //         if(winner){
// // //             break
// // //         }
// // //     }
// // // }



// // // function towerBreakers(n, m) {
// // //     let towers = `${m}`.repeat(n).split("").flatMap(cu => Number(cu))
// // //     let counter = 0
// // //     let moves = 0
// // //     let index =  0
// // //     while(true){
// // //         let beforeMoves = moves
// // //         let testsAbove1 = arr.filter(cu => cu > 1).length
// // //         if(testsAbove1 == 1){
// // //             towers[towers.findIndex(cu => cu > 1)] = 1
// // //         }

// // //         let temp = towers.map(cu => {
// // //             if(cu % 2 == 0){
// // //                 moves++
// // //                 return cu / 2
// // //             }else{ return cu}
// // //         })

// // //         if
// // //         // for(let i = 0; i < towers.length; i++){
// // //         //     let check = towers[i] % 2 == 0
// // //         //     if(check){
// // //         //         towers[i] = towers[i] / 2
// // //         //     }
// // //         // }
// // //         towers[index] = 
// // //         counter++


// // //     }

// // // }
// // // console.log(`letter ${each} at index ${letters.indexOf(each)} new index ${result}`)
// // // towerBreakers(887413, 561370)

// // // function finder(s, k){   
// // //     let letters = "abcdefghijklmnopqrstuvwxyz"
// // //     let text = ""
// // //     for(let each of s.split("")){
// // //         if(!/[A-Za-z]/.test(each)){
// // //             text += each
// // //             continue
// // //         }
// // //         letters = /[A-Z]/.test(each)? letters.toUpperCase():letters.toLowerCase()
// // //         let result = letters.indexOf(each) + (k > 26? k % 26:k)
// // //         if(result >= 26){
// // //             result = result % 26
// // //         }
// // //         console.log(result)
// // //         let newLetter = letters.slice(result, result + 1)
// // //         text += newLetter
// // //     }
// // //     console.log(text)
// // //     return text
// // // }
// // // finder("middle-Outz", 2)
// // // towerBreakers(1, 4)

// // // let a = [3, 6 ,34, 3, 6, 0, 29, 19]
// // // let bestChoice = [...a].sort((a, b) => b - a)[0]

// // // console.log(Math.max(...a))

// // function main(arr, k){
// //     // let least = (anArray) => anArray.sort((a, b) => a - b)
// //     // let newArray = [];
// //     // let newUnfairness = 0;
// //     // // least(arr).slice(0, k)
// //     // console.log(arr.length)
// //     // arr.map((cu, ind) => least(arr).slice(ind, ind + k)).filter(cu => cu.length == k).map(cu => Math.max(...cu) - Math.min(...cu))
// //     let least = (anArray) => anArray.sort((a, b) => a - b)
// //     arr = least(arr)
// //     let result = arr.map((cu, ind) => arr[ind + k - 1] - arr[ind]).filter(cu => cu > -1)
// //     let min = Math.min(...result)
// //     return min
// //     // for(let i = 0; i < arr.length; i++){
// //     //     let selection = least(arr).slice(i, i + k)
// //     //     let max = Math.max(...selection)
// //     //     let min = Math.min(...selection)
// //     //     let result = max - min
// //     //     if(i == 0 || result < newUnfairness){
// //     //         newUnfairness = result
// //     //         newArray = selection
// //     //     }

// //     //     let findEnd = i + k == arr.length
// //     //     if(findEnd){
// //     //         break
// //     //     }

// //     // }

// //     console.log(test)
// //     // return newUnfairness

// // }

// // // main(myarray, 10000)

// // let test2 = [
// //     1,
// // 2,
// // 1,
// // 2,
// // 1
// // ]
// // main(myarray, 10000)


// // let sum = (param) => param.length > 0? param.reduce((cu, ac) => cu + ac):0

// // function main(arr){
// //     let sum = (param) => param.length > 0? param.reduce((cu, ac) => cu + ac):0
// //     let left = 0
// //     let right = sum(arr)

// //     for(let i = 0; i < arr.length; i++){
// //         right -= arr[i]
// //         if(left == right){
// //             return "YES"
// //         }
// //         left += arr[i]

// //     }
// //     return "NO"
// // }

// // console.log(main([1,1,4,1,1]))

// // function plusMinus(arr) {
// //     let obj = {
// //         "posotive": arr.filter(cu => cu > 0),
// //         "negative": arr.filter(cu => cu < 0),
// //         "zero":arr.filter(cu => cu === 0)
// //     }

// //     let denomonator = arr.length
// //     for(let each of Object.values(obj)){
// //         let numorator = each.length
// //         let getRatio = numorator / denomonator * 10
// //         let result = `0.${getRatio}` + "0".repeat(6 - `${getRatio}`.length)
// //         console.log(result)         
// //     }

// // }

// // plusMinus([1,1,0, -1, -1])





// // let result = "NO"
// //     let sum = (param) => param.length > 0? param.reduce((cu, ac) => cu + ac):0

// //     for(let i = 0; i < arr.length; i++){
// //         let left = arr.slice(0, i)
// //         let right = arr.slice(i+1)
// //         console.log(left, right)
// //         if(sum(left) == sum(right)){
// //             result = "YES"
// //             break
// //         }
// //     }
// //     console.log(result)
// //     return result

// // // function forLoop(param){
// // //     let counter = 0
// // //     for(let i = 0; i < param; i++){
// // //         let Xor_value = param ^ i
// // //         let Calc_value = param + i
// // //         if(Xor_value == Calc_value){
// // //             counter++
// // //         }
// // //     }
// // //     console.log(counter)
// // // }

// // // function checkMoves(arr, moves = 0){
// // //     let testsAbove1 = arr.filter(cu => cu > 1).length
// // //     if(testsAbove1 == 1){
// // //         arr[arr.findIndex(cu => cu > 1)] = 1
// // //         return checkMoves(arr, moves == 1?2:1)
// // //     }
    

// // //     let hasLost = arr.every(cu => cu == 1)
// // //     if(hasLost){
// // //         return moves
// // //     }

// // //     let played = false

// // //     for(let i = 0; i < arr.length; i++){
// // //         let checkDivide = arr[i] % 2 == 0
// // //         if(checkDivide){
// // //             arr[i] = arr[i] / 2
// // //             played = true
// // //             break
// // //         }
        
// // // }
// // //     if(played){
// // //         return checkMoves(arr, moves == 1?2:1)
// // //     }else{
// // //         arr[arr.findIndex(cu => cu > 1)] = 1
// // //         return checkMoves(arr, moves == 1?2:1)
// // //     }
// // // }

// // // function towerBreakers(n, m) {
// // //     let towers = `${m}`.repeat(n).split("").flatMap(cu => Number(cu))
// // //     let player = checkMoves(towers)
// // //     console.log(player)
// // //     return player

// // // }




// // const { paperFormats } = require("puppeteer");
// // // console.log(`${n} ^ ${ind}: ${n ^ ind} == ${n + ind}`)

// // function forLoop(n){
// //     let myArray = new Array(n >0?n:1)
// //     myArray.fill(0);
// //     return myArray.filter((cu, ind) => {return (n ^ ind) == ind + n}).length

// // }

// let count = (arr, search) => arr.filter(cu => cu == search || cu == Number(search)).length
// let binaryToNumber = (param) => parseInt(param, 2)
// let getBinary = (param) => param.toString(2)
// let outputArray = (arr) => arr.forEach(cu => console.log(cu))
// let outputTable = (param) => console.table(Object.entries(param))
// let outputOwnTable = (arr) => arr.forEach((cu, ind) => console.log(`index ${ind} = value ${cu}`))
// let stringy = (param) => JSON.stringify(param, null, 2)

// // function main(n){
// //     let count = (arr, search) => arr.filter(cu => cu == search || cu == Number(search)).length
// //     let getZeros = count(n.toString(2).split(""), "0")
// //     console.log(getZeros)
// //     console.log(getBinary(n))
// //     let result = 2 ** getZeros 
// //     return n > 0? result:1

// // }


// // // function main(n){
// // //     let counter = 0
// // //     let bin;

// // //     while(n > 0){
// // //         bin = getBinary(n)
// // //         let zeros = count(bin.split(""), "0")
// // //         console.log("Counter: ", counter)
// // //         console.log("current n: ", n)
// // //         console.log("n binary before: ", bin)
// // //         console.log("zeros: ", zeros)
// // //         let check = 1 - n & 1
// // //         console.log(`1 - n: ${1 - n}(${getBinary(1 - n)}) & 1(${getBinary(1)}) = counter += ${check}`)
// // //         counter += check
// // //         console.log( n >> 1)
// // //         n >>= 1
// // //     }

// // //     console.log("final counter: ", counter)

// // //     let result = 2 ** counter
// // //     console.log(result)

// // // }
// // let example = 1000000000000000
// // let x = main(12)
// // // console.log(getBinary(32))
// // console.log(x)


// // function main(n){
// //     let bin = n.toString(2)
// //     let getZeros = count(bin.split(""), "0")
// //     console.log(n, getZeros, bin)
// //     if(n == 0){
// //         return
// //     }
// //     main(n >>= 1)

// // }


// // main(10000)


// // function main(n, m){
// //     let newArray = new Array(n).fill(m)
// //     if(newArray.length % 2 != 0){
// //         return 1
// //     }

// //     let count = (arr, search) => arr.filter(cu => cu == search || cu == Number(search)).length
// //     let turns = count(newArray[0].toString(2).split(""), "0")
// //     let check = turns % 2 == 0? 2:1
// //     console.log(newArray, turns, "check", check)
// //     let allTurns = newArray.length * turns
// //     let checkForWin = newArray.length
// //     console.log(checkForWin, allTurns)
// //     if (allTurns % 2 != 0){
// //         return 1
// //     }else{
// //         return 2
// //     }

// // }


// // let x = main(374625, 796723)
// // console.log(x)


// // async function test(){
// //     new Promise((resolve, reject) => {
// //         // Simulate an asynchronous operation using setTimeout
// //         setTimeout(() => {
// //             const success = true; // Simulate success or failure

// //             if (success) {
// //                 resolve('Operation was successful'); // Resolve the promise
// //             } else {
// //                 reject('Operation failed'); // Reject the promise
// //             }
// //         }, 1000);
// //     }).then((result) => {
// //         console.log("triggered")
// //         console.log(result); // This will run if success is true
// //     })
// //     .catch((error) => {
// //         console.error(error); // This will run if success is false
// //     });
// // }

// // test()

// function resolve(param){
//     console.log(param)
// }
// function reject(param){
//     console.log(param)
// }

// (async () => {
//     try {
//         const result = new Promise((resolve, reject) => {
//             // Simulate an asynchronous operation using setTimeout
//             setTimeout(() => {
//                 const success = true; // Simulate success or failure

//                 if (success) {
//                     resolve('Operation was successful'); // Resolve the promise
//                 } else {
//                     reject('Operation failed'); // Reject the promise

//                 }
//             }, 1000);
//         });
//     } catch (error) {
//         console.error(error); // This will run if success is false
//     }
// })();


// function main(){
// 	let array = Array.from(document.querySelectorAll("*")).map(element => element.href).filter(href => href); 
// 	let stringArray = JSON.stringify(array)
// 	console.log(stringArray)
// }

// main()


// function main(){
// 	let array = Array.from(document.getElementsByTagName("a"))
// 	let arrayselect = Array.from(document.querySelectorAll("a"))
//   for(let each of array){
// 		let objects = Object.values(each)
// 		for (const [key, value] of Object.entries(objects)) {
//   console.log(`${key}: ${value}\n${Object.values(value)}`);
// }

	
//   }}



//   function main(){
// 	let array = Array.from(document.getElementsByTagName("a"))
// 	let test = array.map(x => x.attributes)
// 	console.log(test)

// }


// main()

// function main(){
// 	let cls = "event-card-link"
// 	let array = Array.from(document.getElementsByClassName(cls))
// 	let test = array.map(x => x.attributes).map(x => x["aria-label"].nodeValue)
// 	for(let each of test){
// console.log(each)
// }
	


// }


// main()


// // // function arrayObjsAddToObject(param, obj){
// // //   for (const [key, value] of Object.entries(param)) {
// // //     if(Array.isArray(value)){ //If statement 1
// // //       if(value.length > 0){ //If statement 2
// // //           let temp = []
// // //           let name = value[0][typeInObj]
// // //       for(let each of value){
// // //         let label = each['label']
// // //         if(label){
// // //           temp.push(each['label'])
// // //         }
// // //       }
// // //         obj[key] = temp
// // //       }//End if 1
// // //     }//End if 2
// // //   }      
// // // }; 



























// // // writeJsonFiles()
// // // tester()




// // //   async function filterJobLinks(page, url) {

// // //     try{
// // //       // Assuming goto_eval navigates to the page and returns all links
// // //       const allLinks = await goto_eval(page); // This function should return an array of URLs
// // //       // Filter links that contain "/rc/"
// // //       const jobLinks = allLinks.filter(url => url.includes("/rc/"));

// // //     return jobLinks;
// // //     }catch(err){
// // //       errObj = {"url":url, "error": err}
// // //       errorArray.push(errObj)
// // //       console.log(err)
// // //       await writejsonobject(err, "error")
// // //     }
 
// // // }

// // // let filename = !name.includes(".json")? `${name}.json`: name


// //   // async function getPageLinks(page) {
// //   //   return await page.evaluate(() => {
// //   //     return  Array.from(document.querySelectorAll("*")).map(cu => cu.getAttribute("href")).filter(cu => {if(cu){return cu}})
// //   // })}



// //   // async function writeJsonFiles(){
// // //   let test = [{"test":"test", "test2": "test2"}]
// // //   let task = ["visited_links", "error_links", "job_details"]
// // //   let site = "indeed"
// // //   let files = task.map(cu => `${cu}_${site}`)
// // //   destPath = "C:\\Users\\Mainster\\Desktop\\indeed"
// // //   for(let each of files){
// // //     writejson(path.join(destPath, each), [])
// // //   }
// // // }









// // function arrayObjsListOfObject(param){
// //     return param.map(cu => cu['label']).filter(cu => cu)
// //   } 
  
// //   function placekeyvalueintoobject(param_obj, addToObj){
// //     for (const [key, value] of Object.entries(param_obj)){
// //       if(value && !Array.isArray(value) && typeof value == 'object'){
// //         if(value){placekeyvalueintoobject(value, addToObj)}
// //       }
// //       addToObj[key] = value
// //     };
// //   }
  
// //   function convertdate(param_obj){
// //       for (const [key, value] of Object.entries(param_obj)){
// //         if(key.includes('date')){
// //           const datetime = new Date(value);
// //           const splitDateTime = datetime.toLocaleString().split(", ")
// //           const date = splitDateTime[0]
// //           const time = splitDateTime[1]
// //           param_obj[`${key} date`] = date
// //           param_obj[`${key} time`] = time
// //         }
// //       };
// //     }
  
  
  
// //   function main(){
// //   let obj = {}
// //   try{
// //     let salary = window._initialData['salaryInfoModel']
// //       placekeyvalueintoobject(salary, obj)
// //       }catch(err){
// //     console.log(`Problem with ${window.location.href}\n`)
// //   }
    
// //   obj['about job posting - link'] =  window.location.href
// //   let mainobj = window._initialData["hostQueryExecutionResult"]['data']['jobData']['results'][0]['job']
  
// //   let needed = ["title","sourceEmployerName", "url", "datePublished", "expired","normalizedTitle","dateOnIndeed","isHighQualityMarketplaceMatch"]
// //   let arrayOfObjsLabel = ["jobTypes","benefits", "shiftAndSchedule", "attributes", "occupations"]  //labels
  
// //   try{
// //     let rate = mainobj['employer']["ugcStats"]['ratings']["overallRating"]
// //     let name = rate["__typename"]
// //     let count = rate['count']
// //     obj[`${name}_count`] = count
// //     obj[`${name}_ratingOfEmployer`] = rate['value']
// //   }catch(err){}
  
// //   for(let text of needed){
// //     obj[text] = mainobj[text]
// //   }
    
  
// //   let objects = ["description", "location", "hiringDemand", "employer"]  
// //   for(let text of objects){
// //     try{
// //       let keys = Object.keys(mainobj[text])
// //       if(typeof keys != "undefined"){
// //         for(let other of keys){
// //           let newname = `${text}_${other}`
// //           let item = mainobj[text][other]
// //           if(item){
// //             if(typeof item == 'object'){
// //               for (const [key, value] of Object.entries(item)) {
// //                 obj[`${newname}_${key}`] = value}
// //             }else{
// //               obj[newname] = mainobj[text][other] 
// //             }}}}
// //     }catch(err){}
// //   }
  
// //   for(let each of arrayOfObjsLabel){
// //       let temper = mainobj[each]
// //       if(temper.length > 0){
// //         let x = arrayObjsListOfObject(temper)
// //         obj[each] = x
// //       }}
// //   convertdate(obj)
// //   return obj
// //   }
  
// //   main()

// // ///////////////////////////////////////


// // // function arrayObjsListOfObject(param){
// // //     return param.map(cu => cu['label']).filter(cu => cu)
// // //   } 
  
  
// // //   function placekeyvalueintoobject(param_obj, addToObj){
// // //     for (const [key, value] of Object.entries(param_obj)){
// // //       if(value && !Array.isArray(value) && typeof value == 'object'){
// // //         if(value){placekeyvalueintoobject(value, addToObj)}
// // //       }
// // //       addToObj[key] = value
// // //     };
// // //   }
  
// // //   function convertdate(param_obj){
// // //       for (const [key, value] of Object.entries(param_obj)){
// // //         if(key.includes('date')){
// // //           const datetime = new Date(value);
// // //           const splitDateTime = datetime.toLocaleString().split(", ")
// // //           const date = splitDateTime[0]
// // //           const time = splitDateTime[1]
// // //           param_obj[`${key} date`] = date
// // //           param_obj[`${key} time`] = time
// // //         }
// // //       };
// // //     }
  
  
  
// // //   function main(){
// // //   let test1
    
// // //   let obj = {}
// // //   try{
// // //     let salary = window._initialData['salaryInfoModel']
// // //       placekeyvalueintoobject(salary, obj)
// // //       }catch(err){
// // //     console.log(`Problem with ${window.location.href}\n`)
// // //   }
    
// // //   obj['about job posting - link'] =  window.location.href
    
// // //   let mainobj = window._initialData["hostQueryExecutionResult"]['data']['jobData']['results'][0]['job']
// // //   test1 = typeof mainobj == "object"
  
// // //   let needed = ["title","sourceEmployerName", "url", "datePublished", "expired","normalizedTitle", "dateOnIndeed","isHighQualityMarketplaceMatch"]
// // //   let objects = ["description", "location", "hiringDemand", "employer"]
// // //   let arrayOfObjsLabel = ["jobTypes","benefits", "shiftAndSchedule", "attributes", "occupations"]  //labels
  
// // //   try{
// // //     let rate = mainobj['employer']["ugcStats"]['ratings']["overallRating"]
// // //     let name = rate["__typename"]
// // //     let count = rate['count']
// // //     obj[`${name}_count`] = count
// // //     obj[`${name}_ratingOfEmployer`] = 		rate['value']
// // //   }catch(err){}
  
// // //   for(let text of needed){
// // //     obj[text] = mainobj[text]
// // //   }
  
// // //   //Iter array of obj names as keys above
// // //   //Undefined sometimes
  
// // //   for(let text of objects){
// // //     try{
// // //     let keys = Object.keys(mainobj[text])
// // //     if(typeof keys != "undefined"){
// // //     for(let other of keys){
// // //     let newname = `${text}_${other}`
// // //     let item = mainobj[text][other]
// // //     if(item){
// // //     if(typeof item == 'object'){
// // //   for (const [key, value] of Object.entries(item)) {
// // //       obj[`${newname}_${key}`] = value}
// // //      }else{
// // //       obj[newname] = mainobj[text][other] 
// // //      }}}}

// // //     }catch(err){}
// // //   }
  
// // //   for(let each of arrayOfObjsLabel){
// // //   let temper = mainobj[each]
// // //   if(temper.length > 0){
// // //     let x = arrayObjsListOfObject(temper)
// // //     obj[each] = x
// // //   }}
  
// // //   convertdate(obj)
// // //   return obj
// // //   }
  
// // //   main()
  
  
// // //   //   console.log(arr.length)
// // //   //   console.log(temp.length)





// // ////////////////////////////////////////////////
// // // async function eval_special(page) {


// // // const collectedData = await page.evaluate(() => {
// // // //////////////////////////////////////////Start of eval
// // // ///////////////////////////////////////////////////////
// // // //////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // // //////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // // //////////////////////////////////////////////////////////////////////////////////////////////////////////////




// // // function arrayObjsListOfObject(param){
// // //     let temp = []
    
    
// // //     for (let each of param) {
// // //       let label = each['label']
// // //       if(label){
// // //       temp.push(each['label'])}
// // //     }
  
// // //     return temp
// // // } 

// // // function arrayObjsAddToObject(param, obj){
// // //       for (const [key, value] of Object.entries(param)) {
// // //         if(Array.isArray(value)){ //If statement 1
// // //           if(value.length > 0){ //If statement 2
// // //               let temp = []
// // //         //        try{console.log(value[0][typeInObj])}catch(err){console.log(value)}
// // //           let name = value[0][typeInObj]
// // //           for(let each of value){
// // //             let label = each['label']
// // //             if(label){
// // //               temp.push(each['label'])
// // //             }
// // //           }
// // //           obj[key] = temp
  
  
// // // }// End of if statement 2
// // // }// End of if statement 1
// // // }// End of for loopo
// // // }; //End of function       


// // // function placekeyvalueintoobject(param_obj, addToObj){
// // //   for (const [key, value] of Object.entries(param_obj)){
// // //     if(value && !Array.isArray(value) && typeof value == 'object'){
// // //       if(value){
// // //         placekeyvalueintoobject(value, addToObj) 
// // //       }
// // //     }
// // //     addToObj[key] = value
// // //   };
// // // }

// // // function convertdate(param_obj){
// // //     for (const [key, value] of Object.entries(param_obj)){
// // //       if(key.includes('date')){
// // //         const datetime = new Date(value);
// // //         const datetimestring = datetime.toLocaleString()
// // //         const splitDateTime = datetimestring.split(", ")
// // //         const date = splitDateTime[0]
// // //         const time = splitDateTime[1]
// // //         param_obj[`${key} date`] = date
// // //         param_obj[`${key} time`] = time
// // //       }
// // //     };
// // //   }



// // // function main(){
// // // let obj = {}
// // // try{
// // //   let salary = window._initialData['salaryInfoModel']
// // // placekeyvalueintoobject(salary, obj)
// // // }catch(err){console.log(`Problem with ${window.location.href}\n`)}

// // // obj['about job posting - link'] =  window.location.href
// // // let mainobj = window._initialData["hostQueryExecutionResult"]['data']['jobData']['results'][0]['job']
// // // // let typeInObj = "__typename"
// // // let needed = ["title","sourceEmployerName", "url", "datePublished",
// // //               "expired","normalizedTitle", "dateOnIndeed","isHighQualityMarketplaceMatch"]
// // // let objects = ["description", "location", "hiringDemand", "employer"]
// // // let arrayOfObjsLabel = ["jobTypes","benefits", "shiftAndSchedule", "attributes", "occupations"]  //labels

// // // try{
// // //   let rate = mainobj['employer']["ugcStats"]['ratings']["overallRating"]
// // //   let name = rate["__typename"]
// // //   let count = rate['count']
// // //   obj[`${name}_count`] = count
// // //   obj[`${name}_ratingOfEmployer`] = rate['value']
// // // }catch(err){}

// // // for(let text of needed){obj[text] = mainobj[text]}

// // // for(let text of objects){
// // // let keys = Object.keys(mainobj[text])
// // // for(let other of keys){
// // //   let newname = `${text}_${other}`
// // //   let item = mainobj[text][other]
// // //   if(item){
// // //   if(typeof item == 'object'){
// // // for (const [key, value] of Object.entries(item)) {
// // //     obj[`${newname}_${key}`] = value}
// // //    }else{
// // //     obj[newname] = mainobj[text][other] 
// // //    }}}}


// // // for(let each of arrayOfObjsLabel){
// // // let temper = mainobj[each]
// // // if(temper.length > 0){
// // //   let x = arrayObjsListOfObject(temper)
// // //   obj[each] = x
// // // }}

// // // convertdate(obj)
// // // //////
// // // //End of main
// // // //////
// // // return obj
// // // }

// // // return main()
// // // /////////////////////////////////////////End of collected data eval
// // // ///////////////////////////////////////////////////////////////////
// // // })

// // // //////////////////////////////
// // // //End of javascript eval()
// // // //////////////////////////////
// // // //////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// // // return collectedData
  

// // // //////////////////////////////
// // // //End of eval function
// // // //////////////////////////////
// // // }

















// // // async function main_puppeeter(site){
// // //   let jobLinks = []
// // //   let visited = []
// // //   let linksToVisit = new Set([site])
// // //   const browser = await puppeteer.launch({ headless: false });
// // //   const page = await browser.newPage();

// // //   for(let each of linksToVisit){
// // //     if(!visited.includes(each)){
// // //       await page.goto(each, { waitUntil: 'networkidle0' });
// // //       visited.push(each)
// // //       let jobs = await filterJobLinks(page, each)
// // //       jobLinks = [...jobLinks, ...jobs]
// // //       let links = await evalPagination(page)
// // //       linksToVisit = new Set([...linksToVisit, ...links])
// // //     }
// // //   }

// // //   await writejsonobject(jobs, 'indeed_job_details')
// // //   await writejsonobject(visited, 'visited_indeed_job_details')
// // //   await browser.close();
// // // }

















// // // testurl = "https://www.indeed.com/jobs?q=it&l=columbus+ohio&start=10&vjk=70d65cc945cd47bc"

// // // main_puppeeter(testurl)





// //     // try{
// //     //     let links1 = await goto_eval(page);
// //     //     await writejson(links1, "links1")
// //     //     await console.log("Finished test 1")
// //     // }catch(err){
// //     //     await console.log("test 1")
// //     //     await console.log(err)
// //     // } 

// //     // try{
// //     //     let links2 = await getAll_href(page)
// //     //     await writejson(links2, "links2")
// //     //     await console.log("Finished test 2")
// //     // }catch(err){
// //     //     await console.log("test 2")
// //     //     await console.log(err)
// //     // } 

// //     // try{
// //     //     let links3 = await getPageLinks(page)
// //     //     await writejson(links3, "links3")
// //     //     await console.log("Finished test 3")
// //     // }catch(err){
// //     //     await console.log("test 2")
// //     //     await console.log(err)
// //     // } 


// //         // let url2 = "https://www.indeed.com/viewjob?jk=57b8ba97e8e8ae3e&tk=1hrn5dus4jfmm875&vjs=3"

// //     // await page.goto(url2, { waitUntil: 'networkidle0' });

// //     // try{
// //     //     let obj = await eval_special(page)
// //     //     writejsonobject(obj, "indeedtest")
// //     //     await console.log(obj)
// //     //     await console.log("Finished test 3")
// //     // }catch(err){
// //     //     await console.log("test 3")
// //     //     await console.log(err)
// //     // } 











// //       // await page.goto(site, { waitUntil: 'networkidle0' });
// //   // visited.push(site)

// //   // try{
// //   //   let linksFromPage = await goto_eval(page);
// //   //   for(let each of linksFromPage){
// //   //     if(each.includes("/rc/")){
// //   //       jobLinks.push(each)
// //   //       console.log(each)
// //   //     }
// //   //   }
// //   // }catch(err){
// //   //     console.log(err)
// //   // } 

// //   // let links = await evalPagination(page)
// //   // for (let each of links){
// //   //   linksToVisit.add(each)
// //   // }




















  
// // // async function iter_joblinks(){
// // //   const jobs = []
// // //   const visited = []
// // //   const error = []
// // //   const browser = await puppeteer.launch({ headless: false });
// // //   const page = await browser.newPage();
// // //   let file = JSON.parse(fs.readFileSync('visited.json', 'utf8'));

// // //   let len = file.length
// // //   let counter = 0
// // //   let fileCounter = 0
// // //   for(let each of file){
// // //     counter++
// // //     if(counter % 1000 == 0){
// // //       fileCounter++
// // //       writeArraysToJson(jobs, error, visited, fileCounter)
// // //     }

// // //     console.log(`Visiting ${counter} of ${len}\n${each}\n`)
// // //     await page.goto(each, { waitUntil: 'networkidle0' });
// // //     try{
// // //         let obj = await eval_special(page)
// // //         jobs.push(obj)
// // //         visited.push(each)
// // //         console.log("Passed")
// // //     }catch(err){
// // //         await console.log(err)
// // //         error.push(each)
// // //     } 
  
// // //   writeArraysToJson(jobs, error, visited, fileCounter)
// // //   await delay(3000)

// // // }
// // // }


// // // function generateSearchURLs({netloc, subDirectory = 'jobs?', schema = 'https://', queryBase = 'q=' }, searchTerms) {
// // //   // "https://www.indeed.com/jobs?q=&l=columbus+ohio&vjk=0bc4d38112060ee6"    const searchTerms = ['developer', 'software'];
// // //     const urls = searchTerms.map(term => `${schema}${netloc}/${subDirectory}${queryBase}${term}`);
// // //     return urls;
// // // }











// // // asy.log_async_writer("===== before =====\n".repeat(3))

// // ////////////////////////////////////////////////////////////
// // //Start of function
// // ////////////////////////////////////////////////////////////
// // async function eval_special(page) {
// //   const collectedData = await page.evaluate(() => {
// //   function arrayObjsListOfObject(param){
// //     let temp = []
// //     for (let each of param){
// //       let label = each['label']
// //       if(label){temp.push(each['label'])}}
// //     return temp
// // } 

// // function arrayObjsAddToObject(param, obj){
// //   for (const [key, value] of Object.entries(param)) {
// //     if(Array.isArray(value)){ //If statement 1
// //       if(value.length > 0){ //If statement 2
// //           let temp = []
// //           let name = value[0][typeInObj]
// //       for(let each of value){
// //         let label = each['label']
// //         if(label){
// //           temp.push(each['label'])
// //         }
// //       }
// //         obj[key] = temp
// //       }//End if 1
// //     }//End if 2
// //   }      
// // };     


// // function placekeyvalueintoobject(param_obj, addToObj){
// //   for (const [key, value] of Object.entries(param_obj)){
// //     if(value && !Array.isArray(value) && typeof value == 'object'){
// //       if(value){placekeyvalueintoobject(value, addToObj)}
// //     }
// //     addToObj[key] = value
// //   };
// // }

// // function convertdate(param_obj){
// //     for (const [key, value] of Object.entries(param_obj)){
// //       if(key.includes('date')){
// //         const datetime = new Date(value);
// //         const splitDateTime = datetime.toLocaleString().split(", ")
// //         const date = splitDateTime[0]
// //         const time = splitDateTime[1]
// //         param_obj[`${key} date`] = date
// //         param_obj[`${key} time`] = time
// //       }
// //     };
// //   }



// // function main(){
// // let test1
  
// // let obj = {}
// // try{
// //   let salary = window._initialData['salaryInfoModel']
// //     placekeyvalueintoobject(salary, obj)
// //     }catch(err){
// //   console.log(`Problem with ${window.location.href}\n`)
// // }
  
// // obj['about job posting - link'] =  window.location.href
  
// // let mainobj = window._initialData["hostQueryExecutionResult"]['data']['jobData']['results'][0]['job']
// // test1 = typeof mainobj == "object"

// // let needed = ["title","sourceEmployerName", "url", "datePublished", "expired","normalizedTitle", "dateOnIndeed","isHighQualityMarketplaceMatch"]
// // let objects = ["description", "location", "hiringDemand", "employer"]
// // let arrayOfObjsLabel = ["jobTypes","benefits", "shiftAndSchedule", "attributes", "occupations"]  //labels

// // try{
// //   let rate = mainobj['employer']["ugcStats"]['ratings']["overallRating"]
// //   let name = rate["__typename"]
// //   let count = rate['count']
// //   obj[`${name}_count`] = count
// //   obj[`${name}_ratingOfEmployer`] = 		rate['value']
// // }catch(err){}

// // for(let text of needed){
// //   obj[text] = mainobj[text]
// // }

// // //Iter array of obj names as keys above
// // //Undefined sometimes

// // for(let text of objects){
// //   try{
// //   let keys = Object.keys(mainobj[text])
// //   if(typeof keys != "undefined"){
// //   for(let other of keys){
// //   let newname = `${text}_${other}`
// //   let item = mainobj[text][other]
// //   if(item){
// //   if(typeof item == 'object'){
// // for (const [key, value] of Object.entries(item)) {
// //     obj[`${newname}_${key}`] = value}
// //    }else{
// //     obj[newname] = mainobj[text][other] 
// //    }}}}
  
// //   }catch(err){}

// // }

// // for(let each of arrayOfObjsLabel){
// // let temper = mainobj[each]
// // if(temper.length > 0){
// //   let x = arrayObjsListOfObject(temper)
// //   obj[each] = x
// // }}

// // convertdate(obj)
// // return obj
// // }

// // return main()
// // })//End of evail  
// //   return collectedData

// // }


// //       // await asy.log_async_writer(`Updating files`)
// //       // await asy.log_async_writer(`condition localConfig.array_index_counter % 20 == 0: ${localConfig.array_index_counter % 20 == 0}`)
// //       // await asy.log_async_writer(`condition ((loaded.objectOfSets.visit_links.size - 1) == localConfig.array_index_counter) = ${((loaded.objectOfSets.visit_links.size - 1) == localConfig.array_index_counter)} `)
// // ////////////////////////////////////////////////////////////
// // //End of eval function
// // ////////////////////////////////////////////////////////////



// // // async function searchSiteForJobLinks(){
// // //   const browser = await puppeteer.launch({ headless: false });
// // //   const page = await browser.newPage();
// // //   await logger("Started Browser")

// // //   let localConfig = {
// // //     array_index_counter: 0,
// // //     captcha_counter: 0,
// // //     wait_time_in_ms: 0
// // //   }
  
// // //   for (let link of loaded.objectOfSets.visit_links){

// // //     if(localConfig.captcha_counter > 10){
// // //       break
// // //     }

// // //     localConfig["link"] = link
// // //     let status_object = {...await asy.get_object_values_len(loaded.objectOfSets), ...localConfig}
// // //     await logger(JSON.stringify(status_object,"", " "))

// // //     let wait = false;

// // //     let already_visited = loaded.objectOfSets.visited_links.has(link);

// // //     if(already_visited){
// // //       await logger(`Already visited\n\n`)
// // //       localConfig.array_index_counter++;
// // //       let updated_status_object = {...await asy.get_object_values_len(loaded.objectOfSets), ...localConfig}
// // //       console.table(await iter_objects_find_difference(status_object, updated_status_object))
// // //       continue;
// // //     }


// // //     let verifyLink = await check_link(link);
// // //     if(!verifyLink){
// // //       await asy.log_async_writer(`check link failed\n\n`)
// // //       localConfig.array_index_counter++;
// // //       let updated_status_object = {...await asy.get_object_values_len(loaded.objectOfSets), ...localConfig}
// // //       console.table(await iter_objects_find_difference(status_object, updated_status_object))
// // //       continue
// // //     }


// // //     let opened_link = await pup.try_to_goto_link(page, link, localConfig.wait_time_in_ms)
// // //     if(!opened_link){
// // //       await logger(`pup could not open link\n\n`)
// // //       localConfig.array_index_counter++;
// // //       loaded.objectOfSets.failed_links.add(link)
// // //       let updated_status_object = {...await asy.get_object_values_len(loaded.objectOfSets), ...localConfig}
// // //       console.table(await iter_objects_find_difference(status_object, updated_status_object))
// // //       continue
// // //     }


// // //     let checkForCaptcha =  await pup_eval.check_valid_page_no_captcha(page)
// // //     if(checkForCaptcha){
// // //       await asy.log_async_writer(`"captcha link, please revisit later"`)
// // //       localConfig.captcha_counter++ 
// // //       loaded.objectOfSets.captcha_links.add(link)
// // //       let updated_status_object = {...await asy.get_object_values_len(loaded.objectOfSets), ...localConfig}
// // //       console.table(await iter_objects_find_difference(status_object, updated_status_object))
// // //       continue;
// // //     }else{
// // //       localConfig.captcha_counter = 0
// // //     }

// // //     let jobs = await pup_eval.getJobLinksOnPage(page, link);
// // //     if(jobs.length == 0){
// // //       await asy.log_async_writer("Found zero job listings, please check url later.")
// // //       loaded.objectOfSets.issue_with_job_links_on_page.add(link);
// // //     }else{
// // //       await asy.log_async_writer(`Found links: ${jobs.length}`)
// // //       jobs.forEach(cu => loaded.objectOfSets.job_links.add(cu));
// // //     }


// // //     let paginationLinks = await pup_eval.evalIndeedPagination(page);
// // //     paginationLinks.forEach(cu => loaded.objectOfSets.visit_links.add(cu));

// // //     wait = true;

// // //     if(localConfig.array_index_counter % 20 == 0 || ((loaded.objectOfSets.visit_links.size - 1) == localConfig.array_index_counter)){

// // //       await asy.async_writeObjectOfArraysOrSets("indeed", loaded.objectOfSets);
// // //     }


// // //     loaded.objectOfSets.visited_links.add(link)
// // //     localConfig.array_index_counter++;
    
// // //     if(wait) {
// // //       await new Promise(resolve => setTimeout(resolve, 1000));
// // //     }

    
// // //   if(localConfig.captcha_counter % 10 == 0 && localConfig.captcha_counter != 0){
// // //     let times_divide = localConfig.captcha_counter / 10
// // //     let wait_time =  times_divide * 60000
// // //     await asy.async_writeObjectOfArraysOrSets("indeed", loaded.objectOfSets);
// // //     await asy.log_async_writer(`Wait time: ${wait_time} - ${wait_time / 60000} minutes`)
// // //     // await new Promise(resolve => setTimeout(resolve, wait_time));
// // //     localConfig.wait_time_in_ms = wait_time
// // //   }

// // //   if(localConfig.captcha_counter > 100){
// // //     await asy.log_async_writer("Program did not regain functionality. Try again. ")
// // //     break
// // //   }

// // //   let updated_status_object = {...await asy.get_object_values_len(loaded.objectOfSets), ...localConfig}
// // //   console.table(await iter_objects_find_difference(status_object, updated_status_object))
// // // }
  
// // //   await browser.close();
// // // }






// // // async function log_async_writer(param_string_content, use_seperator){
// // //   let content =  use_seperator? "=".repeat(10) + `\n${param_string_content}\n` + "=".repeat(10):param_string_content
// // //   try {
// // //       await fs.appendFile("log.txt", `${content}\n`, (err) => console.error(err));
// // //       console.log(content)
// // //   } catch (writeError) {
// // //       console.error('Failed to write due to:', writeError, `With filename: ${pathToFile}`,);
// // //       throw writeError
// // //   }
// // // }























// // //old working searchSiteForJobLinks

// // // async function searchSiteForJobLinks(){
// // //   const browser = await puppeteer.launch({ headless: false });
// // //   const page = await browser.newPage();
// // //   await logger("Started Browser")

// // //   let localConfig = {
// // //     array_index_counter: 0,
// // //     captcha_counter: 0,
// // //     wait_time_in_ms: 0
// // //   }
  
// // //   for (let link of loaded.objectOfSets.visit_links){

// // //     if(localConfig.captcha_counter > 10){
// // //       break
// // //     }

// // //     localConfig["link"] = link
// // //     let status_object = {...await asy.get_object_values_len(loaded.objectOfSets), ...localConfig}
// // //     await logger(JSON.stringify(status_object,"", " "))

// // //     let wait = false;

// // //     let already_visited = loaded.objectOfSets.visited_links.has(link);

// // //     if(already_visited){
// // //       await logger(`Already visited\n\n`)
// // //       localConfig.array_index_counter++;
// // //       let updated_status_object = {...await asy.get_object_values_len(loaded.objectOfSets), ...localConfig}
// // //       console.table(await iter_objects_find_difference(status_object, updated_status_object))
// // //       continue;
// // //     }


// // //     let verifyLink = await check_link(link);
// // //     if(!verifyLink){
// // //       await asy.log_async_writer(`check link failed\n\n`)
// // //       localConfig.array_index_counter++;
// // //       let updated_status_object = {...await asy.get_object_values_len(loaded.objectOfSets), ...localConfig}
// // //       console.table(await iter_objects_find_difference(status_object, updated_status_object))
// // //       continue
// // //     }


// // //     let opened_link = await pup.try_to_goto_link(page, link, localConfig.wait_time_in_ms)
// // //     if(!opened_link){
// // //       await logger(`pup could not open link\n\n`)
// // //       localConfig.array_index_counter++;
// // //       loaded.objectOfSets.failed_links.add(link)
// // //       let updated_status_object = {...await asy.get_object_values_len(loaded.objectOfSets), ...localConfig}
// // //       console.table(await iter_objects_find_difference(status_object, updated_status_object))
// // //       continue
// // //     }


// // //     let checkForCaptcha =  await pup_eval.check_valid_page_no_captcha(page)
// // //     if(checkForCaptcha){
// // //       await asy.log_async_writer(`"captcha link, please revisit later"`)
// // //       localConfig.captcha_counter++ 
// // //       loaded.objectOfSets.captcha_links.add(link)
// // //       let updated_status_object = {...await asy.get_object_values_len(loaded.objectOfSets), ...localConfig}
// // //       console.table(await iter_objects_find_difference(status_object, updated_status_object))
// // //       continue;
// // //     }else{
// // //       localConfig.captcha_counter = 0
// // //     }

// // //     let jobs = await pup_eval.getJobLinksOnPage(page, link);
// // //     if(jobs.length == 0){
// // //       await asy.log_async_writer("Found zero job listings, please check url later.")
// // //       loaded.objectOfSets.issue_with_job_links_on_page.add(link);
// // //     }else{
// // //       await asy.log_async_writer(`Found links: ${jobs.length}`)
// // //       jobs.forEach(cu => loaded.objectOfSets.job_links.add(cu));
// // //     }


// // //     let paginationLinks = await pup_eval.evalIndeedPagination(page);
// // //     paginationLinks.forEach(cu => loaded.objectOfSets.visit_links.add(cu));

// // //     wait = true;

// // //     if(localConfig.array_index_counter % 20 == 0 || ((loaded.objectOfSets.visit_links.size - 1) == localConfig.array_index_counter)){

// // //       await asy.async_writeObjectOfArraysOrSets("indeed", loaded.objectOfSets);
// // //     }


// // //     loaded.objectOfSets.visited_links.add(link)
// // //     localConfig.array_index_counter++;
    
// // //     if(wait) {
// // //       await new Promise(resolve => setTimeout(resolve, 1000));
// // //     }

    
// // //   if(localConfig.captcha_counter % 10 == 0 && localConfig.captcha_counter != 0){
// // //     let times_divide = localConfig.captcha_counter / 10
// // //     let wait_time =  times_divide * 60000
// // //     await asy.async_writeObjectOfArraysOrSets("indeed", loaded.objectOfSets);
// // //     await asy.log_async_writer(`Wait time: ${wait_time} - ${wait_time / 60000} minutes`)
// // //     // await new Promise(resolve => setTimeout(resolve, wait_time));
// // //     localConfig.wait_time_in_ms = wait_time
// // //   }

// // //   if(localConfig.captcha_counter > 100){
// // //     await asy.log_async_writer("Program did not regain functionality. Try again. ")
// // //     break
// // //   }

// // //   let updated_status_object = {...await asy.get_object_values_len(loaded.objectOfSets), ...localConfig}
// // //   console.table(await iter_objects_find_difference(status_object, updated_status_object))
// // // }
  
// // //   await browser.close();
// // // }



// //   // const windowsPath = 'C:\\Users\\username\\Documents\\file.txt';
// //   // const unixPath = '/home/username/Documents/file.txt';
  
// //   // console.log('Normalized Windows Path:', normalizePath(windowsPath));
// //   // console.log('Normalized Unix Path:', normalizePath(unixPath));








// // //function testing remember
// //   // function tester(){
// // //   console.log("tester activated")
// // //   destPath = ["C:", "Users", "mainster", "Desktop", "indeed", "test.txt"]
// // //   filename =  "test.txt"
// // //   // const pathsVerified = check_all_paths_to_file(destPath)
// // //   // console.table(pathsVerified)
// // //   const pathToFile = check_path_to_file(null, filename);
// // //   console.log(pathToFile)
// // // }




// // // function check_directory(pathToDirectory){
// // //   try{
// // //     let dirExists = fs.existsSync(pathToDirectory)
// // //     return dirExists
// // //   }catch(error){
// // //   console.error("failure checking path:\n", error)
// // //   }
// // // }



// // // function failed_to_read_json(arrayOfPathsToFilePath, filename, use_verify) {
// // //   try {
// // //     writer(arrayOfPathsToFilePath, filename,  []);  // Attempt to write an empty array to the path
// // //     return [];
// // //   } catch (writeError) {
// // //     console.log(writeError)
// // //     throw writeError
// // //   }
// // // }


// // /////////////////////////
// // //back up 2
// // /////////////////////////



// // // async function eval_special_whole(page){
// // //   return await page.evaluate(() => {
// // //    return window._initialData
// // //   })
// // // }


// // // ////////////////////////////////////////////////////////////
// // // //Start of function
// // // ////////////////////////////////////////////////////////////
// // // async function eval_special(page) {
// // //   const collectedData = await page.evaluate(() => {
// // //     function arrayObjsListOfObject(param){
// // //       return param.map(cu => cu['label']).filter(cu => cu)
// // //     } 
    
// // //     function placekeyvalueintoobject(param_obj, addToObj){
// // //       for (const [key, value] of Object.entries(param_obj)){
// // //         if(value && !Array.isArray(value) && typeof value == 'object'){
// // //           if(value){placekeyvalueintoobject(value, addToObj)}
// // //         }
// // //         addToObj[key] = value
// // //       };
// // //     }
    
// // //     function convertdate(param_obj){
// // //         for (const [key, value] of Object.entries(param_obj)){
// // //           if(key.includes('date')){
// // //             const datetime = new Date(value);
// // //             const splitDateTime = datetime.toLocaleString().split(", ")
// // //             const date = splitDateTime[0]
// // //             const time = splitDateTime[1]
// // //             param_obj[`${key} date`] = date
// // //             param_obj[`${key} time`] = time
// // //           }
// // //         };
// // //       }

// // //       function convertDateTime(param_obj){
// // //             const datetime = new Date(value);
// // //             const splitDateTime = datetime.toLocaleString().split(", ")
// // //             const date = splitDateTime[0]
// // //             const time = splitDateTime[1]
// // //             param_obj[`${key} date`] = date
// // //             param_obj[`${key} time`] = time
// // //         };
    
    
    
// // //     function main(){
// // //     let obj = {}
// // //     try{
// // //       let salary = window._initialData['salaryInfoModel']
// // //       placekeyvalueintoobject(salary, obj)
// // //       }catch(err){
// // //       console.log(`Problem with ${window.location.href}\n`)
// // //     }
      
// // //     obj['about job posting - link'] =  window.location.href
// // //     let mainobj = window._initialData["hostQueryExecutionResult"]['data']['jobData']['results'][0]['job']
    
// // //     let needed = ["title","sourceEmployerName", "url", "datePublished", "expired","normalizedTitle","dateOnIndeed","isHighQualityMarketplaceMatch"]
// // //     let arrayOfObjsLabel = ["jobTypes","benefits", "shiftAndSchedule", "attributes", "occupations"]  //labels
    
// // //     try{
// // //       let rate = mainobj['employer']["ugcStats"]['ratings']["overallRating"]
// // //       let name = rate["__typename"]
// // //       let count = rate['count']
// // //       obj[`${name}_count`] = count
// // //       obj[`${name}_ratingOfEmployer`] = rate['value']
// // //     }catch(err){}
    
// // //     for(let text of needed){
// // //       obj[text] = mainobj[text]
// // //     }
      
    
// // //     let objects = ["description", "location", "hiringDemand", "employer"]  
// // //     for(let text of objects){
// // //       try{
// // //         let keys = Object.keys(mainobj[text])
// // //         if(typeof keys != "undefined"){
// // //           for(let other of keys){
// // //             let newname = `${text}_${other}`
// // //             let item = mainobj[text][other]
// // //             if(item){
// // //               if(typeof item == 'object'){
// // //                 for (const [key, value] of Object.entries(item)) {
// // //                   obj[`${newname}_${key}`] = value}
// // //               }else{
// // //                 obj[newname] = mainobj[text][other] 
// // //               }}}}
// // //       }catch(err){}
// // //     }
    
// // //     for(let each of arrayOfObjsLabel){
// // //         let temper = mainobj[each]
// // //         if(temper.length > 0){
// // //           let x = arrayObjsListOfObject(temper)
// // //           obj[each] = x
// // //         }}
// // //     convertdate(obj)
// // //     return obj
// // //     }
// // //     return main()
// // // })//End of evail  
// // //   return collectedData

// // // }
// // // ////////////////////////////////////////////////////////////
// // // //End of eval function
// // // ////////////////////////////////////////////////////////////

// // // async function evalIndeedPagination(page) {
// // //   return await page.evaluate(() => {
// // //   return Array.from(document.getElementsByClassName("css-163rxa6 e8ju0x50")).map(cu => cu.href).filter(cu => cu)
// // //   })
// // // }


// // // async function get_all_href_by_qall(page) {
// // //     return await page.evaluate(() => {
// // //       return Array.from(document.querySelectorAll("*")).map(cu => cu.href).filter(cu => cu)
// // //     })}
  

// // // async function getJobLinksOnPage(page, url) {
// // //     const allLinks = await get_all_href_by_qall(page);
// // //     return allLinks.filter(cu => cu && cu.includes("/rc/"))
// // // }










// // ///////////////////////////////////////////////


// async function checkUrl(link) {
//     let verifyValidLink = true;
//     let obj = {netloc:"www.indeed.com", schema:'https://', tld:".com"}
//     for (const [key, value] of Object.entries(obj)) {
//         if(!link.includes(value)){
//           verifyValidLink = false
//           console.log(key)
//         }
//     }
//     console.log(`Link is valid: ${verifyValidLink}`)
//     return verifyValidLink
//   }

// checkUrl()

// const puppeteer = require("puppeteer");
// const fs = require("fs")
// const axios = require('axios');
// const xml2js = require('xml2js');


// async function fetchAndParseXML(url) {
//     try {
//       const response = await axios.get(url);
//       const xmlContent = response.data;
//       const parser = new xml2js.Parser();
//       const result = await parser.parseStringPromise(xmlContent);
//       const items = result.rss.channel[0].item;
//       const array = items.map(each => ({
//         name: each.title[0],
//         link: each.link[0]
//       }));
//       return array;
//     } catch (error) {
//       console.error('Error fetching or parsing XML:', error);
//       return []; // Return an empty array or handle the error as needed
//     }
//   }

// // Replace 'YOUR_XML_URL' with the actual URL of the XML content
// const mangaDir = "https://mangasee123.com/directory/"
// const samplePage = "https://mangasee123.com/manga/Azumanga-Daioh"


// async function getLinks(page){
//     const links = await page.$$eval('a', (element)=>
//     element.map((element) => ({
//     href: element.href,
//     text: element.text
// })
// ))  
//     return links
// };




// async function getNameAndXml(url){
//     const name = url.slice(url.lastIndexOf('/')+1)
//     const xmlUrl = `https://mangasee123.com/rss/${name}.xml`
//     return xmlUrl
// };

// async function browse(page, url){
//     console.log(url)
//     try {
//         await page.goto(url, {waitUntil: 'networkidle0', timeout: 60000});
//       } catch (error) {
//         console.error('Page load timed out, handling error');
//         console.log(error)
//         console.log(`URL Failed: ${url}`)
//       }
// }

// async function getLeadingZeros(num, pos){
//     let check = num.toString()
//     let len = check.length
//     let text = ""
//     for (let i = len; i < pos; i++){
//         text = text + "0"
//     }
//     return `${text}${num}`
// }


// async function getImg(chapter, picNumber){
//     let ch = await getLeadingZeros(chapter, 4)
//     let pi = await getLeadingZeros(picNumber, 3)
//     return `https://scans.lastation.us/manga/Azumanga-Daioh/${ch}-${pi}.png`
// }



// async function getChapterNumber(text){
//     return text.slice(text.lastIndexOf(' ')).trim()
// }


// async function getAllImageLinksInsideOfChapter(chapter, numberOfPages){
//         let arrayOfImageLinks = []
//         for (let i = 1; i < numberOfPages + 1; i++){
//             let link = await getImg(chapter, i)
//             arrayOfImageLinks.push(link)
//         }
//         return arrayOfImageLinks
// };


// // let im = document.getElementsByClassName('img-fluid')[0].getAttribute('src')
// async function goToChapter(page, arrayList){
//     let objs = []
//     for (let each of arrayList){
//         let url = each.link.trim()
//         if(url){
//             await browse(page, url)
//             let pageNum = await page.evaluate((ele) => {
//                 return document.getElementsByClassName('row')[3].childElementCount})
//             let chapter = await getChapterNumber(each.name)
//             let arr = await getAllImageLinksInsideOfChapter(chapter, pageNum)
            
//             let temp = {
//                 name:each.name,
//                 chapter:chapter,
//                 link:each.link,
//                 pages:pageNum,
//                 imageLinks:arr
//             }
//             objs.push(temp)
//         }}
//     return objs
// };

// async function run() {
//     const browser = await puppeteer.launch({ headless: false });
//     const page = await browser.newPage();
//     // await page.goto(samplePage, {waitUntil:'load'});
//     await browse(page, samplePage)
//     const xurl = await getNameAndXml(samplePage)
//     const arrayList = await fetchAndParseXML(xurl)
//     let objs = await goToChapter(page, arrayList)
//     let fileName = objs[0].name
//     const outputJSON = JSON.stringify(objs);
//     const jsonDocTitle = `${fileName}.json`
//     fs.writeFileSync(jsonDocTitle, outputJSON)
//     await browser.close();
// }

// run();



// // async function getPics(page){
// //     let imageUrl = await page.evaluate((ele) => {
// //         return document.getElementsByClassName('img-fluid')[0].getAttribute('src')
// //     })
// //     return imageUrl
// // };

// // async function getStartingLinks(){

// // };

//             // const links = await getLinks(page)
//                 // for (let each of objs){
//     //     console.log(each)
//     // }
//     // const outputJSON = JSON.stringify(links);
//     // const jsonDocTitle = `number.json`
//     // fs.writeFileSync(jsonDocTitle, outputJSON)





//         // let objs = []
//     // for (let each of arrayList){
//     //     let url = each.link.trim()
//     //     if(url){
//     //         await page.goto(url);
//     //         let pageNum = await page.evaluate((ele) => {
//     //             return document.getElementsByClassName('row')[3].childElementCount
//     //         })
//     //         let pages = `Pages: ${pageNum}`
//     //         let temp = {
//     //             name:each.name,
//     //             link:each.link,
//     //             pagesText:pages,
//     //         }
//     //         console.log(temp)
//     //         objs.push(temp)
//     //     }}


    
// // async function getFormattedUrl(mangaName, pageNumber){
// //     return `https://mangasee123.com/read-online/${mangaName}-page-${pageNumber}.html`
// // };

// // async function getAllImageLinksInsideOfChapter(nameOfManga, numberOfPages){
// //         let arrayOfImageLinks = []
// //         for (let i = 2; i < numberOfPages + 1; i++){
// //             arrayOfImageLinks.push(await getFormattedUrl(nameOfManga.replaceAll(" ", "-"), i))
// //         }

// //         console.log(arrayOfImageLinks)
// //         return arrayOfImageLinks
// // };
//     // console.log(`Chapter: ${ch}\nPicture Number: ${pi}`)

//     // console.log(`name: ${name}`)
//     // console.log(`xml: ${xmlUrl}`)


//     function main(q, value){
//         // Select the input element by its ID or any other unique selector
//     var input = document.querySelector(q);
    
//     // Change the value of the input
//     input.value = value;
    
//     // List of events that might be required to mimic user interaction
//     var events = ['input', 'change', 'keydown', 'keyup', 'click'];
    
//     // Dispatch each event
//     events.forEach(function(eventType) {
//         var event = new Event(eventType, {
//             bubbles: true,
//             cancelable: true,
//         });
//         input.dispatchEvent(event);
//     });
    
//     // Focus and blur to mimic complete user interaction
//     input.focus();
//     input.blur();
    
//     }
    
//     function save(){
//         let save = "css-o2qsu3 e8ju0x50"
//         let saveBtn = document.getElementsByClassName(save)
//         saveBtn[0].click()
//     }
    
//     main('#-skillName', "programming")
//     main('#-skillYears', 1)
//     save()
    
    
    
//     function basic(){
//         // let plusBtnCls = "css-mmqrvy e8ju0x50"
//     // let element = document.getElementsByClassName(plusBtnCls)[3]
//     // element.click()
    
//     let addSkill = "-skillName"
//     let element1 = document.getElementById(addSkill)
//     element1.click()
//     element1.Value = "programming"
    
//     let addYears = "-skillYears"
//     let element2 = document.getElementById(addYears)
//     element2.click()
//     element2.Value = 1
    
    
//     }
    
//     basic()


















    
    
    
    
    
    
    
    
    
    
    
    