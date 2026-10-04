const browserVersion ='chrome'
function getBrowserVersion() {
    if (browserVersion === 'chrome') {
        let browserVersion ='firefox'
        console.log('BrowserVersion inside the function',browserVersion);
        
        
    }
    console.log('BrowserVersion outside the block',browserVersion);
    
    
}
getBrowserVersion()
