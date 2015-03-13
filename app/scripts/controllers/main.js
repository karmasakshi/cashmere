'use strict';

/**
 * @ngdoc function
 * @name cashmereApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cashmereApp
 */

angular.module('cashmereApp')
        .controller('MainCtrl', ['$scope', function ($scope) {
                /* MODELS */
                $scope.creditTotal = 0;
                $scope.debitTotal = 0;
                $scope.netTotal = 0;

                $scope.entities = [];

                /* FUNCTIONS */
                $scope.addEntity = function (name, kind) {
                    if (typeof name !== 'undefined' && name !== '') {
                        $scope.entities.push({
                            name: name,
                            kind: kind, // 'c' (creditor) || 'd' (debtor)
                            total: 0,
                            transactions: []
                        });
                    } else {
                        alert('You didn\'t mention a name.');
                    }
                };

                $scope.deleteEntity = function (entityIndex) {
                    $scope.entities.splice(entityIndex, 1);
                };

                $scope.addTransaction = function (entityIndex, amount) {
                    var regex = new RegExp(/\d/);
                    if (regex.test(amount)) {
                        $scope.entities[entityIndex].transactions.push(amount);
                        $scope.entities[entityIndex].total += amount;
                        $scope.updateTotals();
                    } else {
                        alert('You didn\'t mention a valid amount.');
                    }
                };

                $scope.deleteTransaction = function (entityIndex, transactionIndex) {
                    var oldAmount = $scope.entities[entityIndex].transactions.splice(transactionIndex, 1);
                    $scope.entities[entityIndex].total -= oldAmount;
                    $scope.updateTotals();
                };

                $scope.editTransaction = function (entityIndex, transactionIndex, newAmount) {
                    var oldAmount = $scope.entities[entityIndex].transactions[transactionIndex];
                    $scope.entities[entityIndex].transactions[transactionIndex] = newAmount;
                    $scope.entities[entityIndex].total += (newAmount - oldAmount);
                    $scope.updateTotals();
                };

                $scope.updateTotals = function () {
                    $scope.creditTotal = 0;
                    $scope.debitTotal = 0;
                    $scope.netTotal = 0;

                    angular.forEach($scope.entities, function (entity) {
                        entity.kind === 'c' ? $scope.creditTotal += entity.total : $scope.debitTotal += entity.total;
                    });

                    $scope.netTotal = $scope.creditTotal - $scope.debitTotal;
                };
            }]);