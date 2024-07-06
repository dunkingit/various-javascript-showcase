import fetch from 'node-fetch';

async function getFlexVersion() {
    const host = "https://logistics.amazon.com";
    const url = host + "/app/download-app-direct/android";
    const headers = {
        "Host": "logistics.amazon.com",
        "Connection": "keep-alive",
        "sec-ch-ua-platform": "Android",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent": "Mozilla/5.0 (Linux; Android 13; SM-G998U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Mobile Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Dest": "document",
        "Referer": "https://logistics.amazon.com/app/download-app",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9",
    };

    try {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
        const response = await fetch(url, { headers: headers, rejectUnauthorized: false });
        if(response.length < 0){
            console.log("failed to get version")
            return
        }
        const amzFlexFull = response.url.split("/").filter(cu => cu.toLowerCase().includes("amazonflex"))[0]
        let version = amzFlexFull.split("-")

        console.log(version[1])

    } catch (error) {
        console.log(error)
        let err = error.message
        let num = err.indexOf('AmazonFlex') + 11
        let shortend1 = err.slice(num)
        let num2 = shortend1.indexOf('-') + num
        let ver = err.slice(num, num2)
        return ver
    }
}


let version = getFlexVersion();
console.log(version)





        // let version = body.substring(versionIndex + 11);
        // const endVersionIndex = version.indexOf("-");
        // version = version.substring(0, endVersionIndex);
        // let num = version.indexOf('AmazonFlex')
        // let ver = version.slice(num, 11)


        // const versionIndex = body.indexOf("AmazonFlex");
        // if (versionIndex === -1) {
        //     console.log("Error retrieving Flex app version\n", "Response status code: " + response.status);
        //     console.log("Response text: " + body);
        //     return;
        // }
