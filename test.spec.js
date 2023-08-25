import { deviceSizes } from './constants';

deviceSizes.forEach((deviceName) => {
    describe(`Device Screen: ${deviceName}`, () => {
        beforeEach(() => {
            // Set the viewport to the current device size
            cy.viewport(deviceName);
        });

        it('should open ComponentName when ButtonName button is clicked', () => {
            cy.matchImageSnapshot(`PageName|FlowName|ComponentName|${deviceName}`);
        });
    });
});
