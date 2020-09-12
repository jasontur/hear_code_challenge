const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DynamicPage extends Page {
    /**
     * define selectors using getter methods
     */
    get checkboxButton () { return $('#checkbox-example > button') }
    get inputButton () { return $('#input-example > button') }
    get message() { return $('#message') }
    get checkbox() { return $('#checkbox') }
    get inputbox() { return $('[type="text"]') }

    /**
     * a method to encapsule automation code to interact with the page

     */
    Enable () {
        this.inputButton.click(); 
        browser.pause(3000);
        this.inputbox.addValue('Hello World');
    }
    Disable () {
        this.inputButton.click(); 
        browser.pause(3000);
        this.inputButton.click();         
    }
    Add () {
        this.checkboxButton.click(); 
        browser.pause(3000);
        this.checkboxButton.click(); 
        this.checkbox.click();
    }
    Remove () {
        this.checkboxButton.click(); 
        browser.pause(3000);
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('dynamic_controls');
    }
}

module.exports = new DynamicPage();
