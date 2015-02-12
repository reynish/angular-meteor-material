<!--<form ng-submit="add(newParty)">-->
    <!--<md-content layout="row" layout-sm="column">-->
        <!--<md-input-container flex>-->
            <!--<label>Name</label>-->
            <!--<input ng-model="newParty.name">-->
        <!--</md-input-container>-->
        <!--<md-input-container flex>-->
            <!--<label>Description</label>-->
            <!--<input ng-model="newParty.description">-->
        <!--</md-input-container>-->
    <!--</md-content>-->
    <!--<md-button class="md-raised md-primary" ng-click="add(newParty)">Add</md-button>-->
<!--</form>-->

<!--<div ng-include="'client/views/parties/parties-new.tpl'"></div>-->
<md-list>
    <md-item ng-repeat="party in parties">
        <md-item-content>
            <div class="md-tile-content" layout="row">
                <div flex>
                    <a href="/parties/{{party._id}}">{{party.name}}</a>
                    <p>{{party.description}}</p>
                </div>
                <md-button ng-click="remove(party)">X</md-button>
            </div>
        </md-item-content>
    </md-item>
    <md-button class="md-fab md-primary parties-list-btn-add" ng-click="showGridBottomSheet()" aria-label="Use Android">
        <md-icon md-svg-src="img/icons/android.svg"></md-icon>
    </md-button>
</md-list>
