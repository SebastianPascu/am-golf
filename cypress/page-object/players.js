import { PageElements } from "../support/selectors/page-elements";
import { Tabs } from "../support/selectors/tabs";

export class Players {
    constructor() {

    }

    selectPlayersTab() {
        Tabs.players().click({force : true});
        PageElements.playerPageHeader().should('contain', 'Players');
    }
}