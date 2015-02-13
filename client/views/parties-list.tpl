<md-list>
    <md-card ng-repeat="party in parties" layout="row" layout-align="start center">
        <md-content class="md-padding" flex>
            <a href="/parties/{{party._id}}">{{party.name}}</a>
            <!--<p>{{party.description}}</p>-->
        </md-content>
        <md-button ng-click="remove(party)">x</md-button>
    </md-card>
</md-list>
<md-button class="md-fab md-primary parties-list-btn-add" ng-click="showGridBottomSheet()" aria-label="Use Android">
    <md-icon></md-icon>
</md-button>
