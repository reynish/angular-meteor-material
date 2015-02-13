<form ng-submit="add(newParty)">
    <md-content class="md-padding" layout="column">
        <section layout="row" layout-sm="column">
            <md-input-container flex>
                <label>Name</label>
                <input ng-model="newParty.name">
            </md-input-container>
            <md-input-container flex>
                <label>Description</label>
                <input ng-model="newParty.description">
            </md-input-container>
        </section>
        <md-button class="md-raised md-primary" ng-click="add(newParty)">Add</md-button>
    </md-content>
</form>
