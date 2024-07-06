

function writeDirectory(dirPathString){
    console.log(`Writing directory: ${dirPathString}`)
    fs.mkdirSync(dirPathString, { recursive: true }, (err) => {
      if (err) throw err;
    });
    console.log("Path created successfully")
  }
  
  
  function failedToReadJson(arrayOfPathsToFilePath, filename) {
    // console.error('Failed to write empty JSON after initial read failure:', writeError, `With filename: ${pathToFile}`);
    console.log("checking for directory")
    let pathToFolder = path.join(...arrayOfPathsToFilePath);
    const dirExists = fs.existsSync(pathToFolder)
    console.log(`dir exists: ${dirExists}`)
    if(!dirExists){
      writeDirectory(pathToFolder)
    }
  
    try {
      writejson(arrayOfPathsToFilePath, filename,  []);  // Attempt to write an empty array to the path
      return [];
    } catch (writeError) {
      throw writeError
    }
  }
  
  
  function writejson(arrayOfPathsToFilePath, filename, outputData){
    const outputJSON = JSON.stringify(outputData);
    let pathToFile = path.join(...arrayOfPathsToFilePath, filename)
    console.log("from write json")
    console.log(pathToFile)
    try {
      fs.writeFileSync(pathToFile, outputJSON)   // Attempt to write an empty array to the path
    } catch (writeError) {
      console.error('Failed to write due to:', writeError, `With filename: ${pathToFile}`,);
      throw writeError
    }
  }
  
  function read_and_parse_json(arrayOfPathsToFilePath, action, site_name){
    //Example for arrayOfPathsToFilePath ["C:", "Users", "user", "folder"]
    let filename = `${action} ${site_name}.json`
    let pathToFile = path.join(...arrayOfPathsToFilePath, filename)
    try{
      let fileContent = JSON.parse(fs.readFileSync(pathToFile, 'utf8'));
      return fileContent ? fileContent : [];
    }catch(error){
  
      console.error('Read or parse error:', error.message, `With filename: ${pathToFile}`);
  
      if (error.code === 'ENOENT') {  // Check if the error is due to the file not existing
        console.log('File not found. Creating a new file with empty array.');
      } else {
        console.log('Error parsing JSON. Resetting file with empty array.');
      }
  
      return failedToReadJson(arrayOfPathsToFilePath, filename)
    }
  
    }
  
  async function writejson(name, outputData){
    let filename = !name.includes(".json")? `${name}.json`: name
    const outputJSON = JSON.stringify(outputData);
    fs.writeFileSync(filename, outputJSON)
  }