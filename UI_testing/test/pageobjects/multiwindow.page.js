const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MWPage extends Page {
    /**
     * define selectors using getter methods
     */
    get link () { return $('=Click Here') }
    get h3 () { return $('h3') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    tabOne () {
        var parentGUID = browser.getWindowHandle();
        console.log("Window one ID: "+ parentGUID);
        console.log("Page title before Switching : "+ browser.getTitle());
    }
    tabTwo () {
        var allGUID = browser.getWindowHandles();
        console.log("All Window IDs: "+ allGUID);
        console.log("Total Tabs : "+allGUID.length);
    }
    switchTab () {
        var parentGUID = browser.getWindowHandle();
        var allGUID = browser.getWindowHandles();
        // iterate the values in the set
        for(var i = 0; i< allGUID.length;i++){
            // one enter into if blobk if the GUID is not equal to parent window's GUID
            if(allGUID[i] != parentGUID){
      		// switch to the guid
      		browser.switchToWindow(allGUID[i]);
            // break the loop
            break;
            }
        }
    }
    openNewWindow() {
        this.link.click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('windows');
    }
}

module.exports = new MWPage();
