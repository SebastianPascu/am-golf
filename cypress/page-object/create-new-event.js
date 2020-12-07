import { Buttons } from "../support/selectors/buttons";
import { Fields } from "../support/selectors/fields";
import { Messages } from "../support/selectors/messages";
import { OrganizationTabs } from "../support/selectors/organization-tabs";
import { PageElements } from "../support/selectors/page-elements";
import { Tabs } from "../support/selectors/tabs";
import { ElementVisibility } from "./shared/element-is-visible";

export class CreateEvent {
    constructor() {

    }

    selectClubsAndOrgsTab() {
        Tabs.clubsAndOrganizations().click();
    }

    selectOrganization(organizationName) {
        debugger;
        PageElements.organizationsList().contains(organizationName).click();
    }

    selectorganizationTab(tabName) {
        switch (tabName) {
            case 'Admins':
                OrganizationTabs.admins().click();
                OrganizationTabs.admins().should('have.attr', 'aria-selected', 'true');
                break;
            case 'About':
                OrganizationTabs.about().click();
                OrganizationTabs.about().should('have.attr', 'aria-selected', 'true');
                break;
            case 'Community':
                OrganizationTabs.community().click();
                OrganizationTabs.community().should('have.attr', 'aria-selected', 'true');
                break;
            case 'Events':
                OrganizationTabs.events().click();
                OrganizationTabs.events().should('have.attr', 'aria-selected', 'true');
                break;
            case 'Members':
                OrganizationTabs.members().click();
                OrganizationTabs.members().should('have.attr', 'aria-selected', 'true');
                break;
            case 'Membership':
                OrganizationTabs.membership().click();
                OrganizationTabs.membership().should('have.attr', 'aria-selected', 'true');
                break;

            default:
                throw new Error(`The ${tabName} tab is not in the tab list`);
        }
    }

    selectAddEvent() {
        Buttons.addEvent().click({force: true});
        PageElements.createEventPage().should('be.visible').and('contain', 'Create event');
    }

    updateCreateEventForm() {
        Fields.eventName().type('Test 1');
    }

    selectSaveEvent() {
        Buttons.saveEvent().click();
        PageElements.createEventPopUp().should('be.visible');
    }

    confirmCreateEventPopUp() {
        Buttons.createEvent().click({force: true});
        PageElements.createEventPopUp().should('not.be.visible');
    }

    verifySaveEventConfirmationMessage() {
        Messages.successfullySavedEventMessage().should('be.visible');
        cy.fixture('appMessages').then((message) => {
            Messages.successfullySavedEventMessage().should('contain', message.saveEventConfirmationMessage);
        })
    }


}
