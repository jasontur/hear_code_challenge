const DynamicPage = require('../pageobjects/dynamic.page');
describe('Dynamic Controls', () => {
    it('Checkbox - Add' , () => {
        DynamicPage.open();
        DynamicPage.Add();
        expect(DynamicPage.message)
            .toHaveTextContaining("It's back!");
    });
    it('Checkbox - Remove' , () => {
        DynamicPage.open();
        DynamicPage.Remove();
        expect(DynamicPage.message)
            .toHaveTextContaining("It's gone!");
    });
    it('Input Field - Enable' , () => {
        DynamicPage.open();
        DynamicPage.Enable();
        expect(DynamicPage.message)
            .toHaveTextContaining("It's enabled!");
    });
    it('Input Field - Disable' , () => {
        DynamicPage.open();
        DynamicPage.Disable();
        expect(DynamicPage.message)
            .toHaveTextContaining("It's disabled!");
    });
});
