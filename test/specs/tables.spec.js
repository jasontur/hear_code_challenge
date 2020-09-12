const TablesPage = require('../pageobjects/table.page');
describe('Tables', () => {
    it('Table 1 - sorting of last names by alphabetic order' , () => {
        TablesPage.open();
        TablesPage.lastnameT1();
        TablesPage.lastnameT1();
    });
    it('Table 1 - sorting of first names by alphabetic order' , () => {
        TablesPage.open();
        TablesPage.firstnameT1();
        TablesPage.firstnameT1();
    });
    it('Table 2 - sorting of last names by alphabetic order' , () => {
        TablesPage.open();
        TablesPage.lastnameT2();
        TablesPage.lastnameT2();
        
    });
    it('Table 2 - sorting of first names by alphabetic order' , () => {
        TablesPage.open();
        TablesPage.firstnameT2();
        TablesPage.firstnameT2();
    });
});

