const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class TablesPage extends Page {
    /**
     * define selectors using getter methods
     */
    get lastnameSortT1 () { return $('#table1 > thead > tr > th:nth-child(1) > span') }
    get firstnameSortT1 () { return $('#table1 > thead > tr > th:nth-child(2) > span') }
    get lastnameSortT2 () { return $('.last-name') }
    get firstnameSortT2 () { return $('.first-name') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    lastnameT1 () {
        this.lastnameSortT1.click();
        browser.pause(3000);
    }
    firstnameT1 () {
        this.firstnameSortT1.click();
    }
    lastnameT2 () {
        this.lastnameSortT2.click();
    }
    firstnameT2 () {
        this.firstnameSortT2.click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('tables');
    }
}

module.exports = new TablesPage();
