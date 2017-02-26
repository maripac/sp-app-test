(function () {
'use strict';


angular.module('ShoppingListApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buyList = this;

  buyList.items = ShoppingListCheckOffService.getItems();

  buyList.removeItem = function (itemIndex) {
  	ShoppingListCheckOffService.removeItem(itemIndex);
  };

}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;

  boughtList.itemsBought = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService () {
	var service = this;

	var items = [
	{
		name: "cookies",
		quantity: 10
	},
	{
		name: "donuts",
		quantity: 3
	},
	{
		name: "milk",
		quantity: 7
	},
	{
		name: "sugar",
		quantity: 3
	},
	{
		name: "chocolate",
		quantity: 9
	}];

	var itemsBought = [];
	
	service.getItems = function () {
    	return items;


  	};
  	service.getBoughtItems = function () {
    	return itemsBought;


  	};

	service.removeItem = function (itemIndex) {

		itemsBought.push(items[itemIndex]);
		items.splice(itemIndex, 1);
	};
};



})();