const MWPage = require('../pageobjects/multiwindow.page');
describe('Multiple windows', () => {
	it('Open a new tab', () => {
		// navigate to the url
		MWPage.open();

		// get the Session id of the Parent tab
		MWPage.tabOne();

		// click the button to open new window
		MWPage.openNewWindow();
		
		// get the Session id of all the tabs
		MWPage.tabTwo();

		//Switch Tab
		MWPage.switchTab();

		// Check the new tab
		expect(MWPage.h3).toBeVisible();
		expect(browser).toHaveTitle('New Window')
	})
})

