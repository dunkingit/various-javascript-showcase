let click_counter = 0
let failed_counter = 0
let text = ""

function convertDateTime(){
  const datetime = new Date();
  const originalDateTime = datetime.toLocaleString()
  const splitDateTime = originalDateTime.split(", ")
  const date = splitDateTime[0]
  const time = splitDateTime[1]
  return originalDateTime
};


function button(){
    let btn = "claimable-bonus__icon"
    try{
      document.getElementsByClassName(btn)[0].click()
      click_counter++
      text += `succeeded ${click_counter} ${convertDateTime()} clicked:${click_counter}failed:${failed_counter}\n`
      console.log(text)
    }catch(err){
	  failed_counter++
    }
}

console.log("----------Started-----------")
setInterval(button, 60000)