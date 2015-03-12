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

                $scope.editEntity = function (entityIndex, newName) {
                    $scope.entities[entityIndex] = {
                        name: newName
                    };
                };

                $scope.deleteEntity = function (entityIndex) {
                    $scope.entities.splice(entityIndex, 1);
                };

                $scope.addTransaction = function (entityIndex, value) {
                    $scope.entities[entityIndex].transactions.push(value);
                    $scope.entities[entityIndex].total += value;
                };

                $scope.deleteTransaction = function (entityIndex, transactionIndex) {
                    var oldValue = $scope.entities[entityIndex].trasactions.splice(transactionIndex, 1);
                    $scope.entities[entityIndex].total -= oldValue;
                };

                $scope.editTransaction = function (entityIndex, transactionIndex, newValue) {
                    var oldValue = $scope.entities[entityIndex].transactions[transactionIndex];
                    $scope.entities[entityIndex].transactions[transactionIndex] = newValue;
                    $scope.entities[entityIndex].total += (newValue - oldValue);
                };

                $scope.$watch($scope.entities, function () {
                    $scope.creditTotal = 0;
                    $scope.debitTotal = 0;
                    $scope.netTotal = 0;

                    angular.forEach($scope.entities, function (entity) {
                        entity.kind === 'c' ? $scope.creditTotal += entity.total : $scope.debitTotal += entity.total;
                    });

                    $scope.netTotal = $scope.creditTotal - $scope.debitTotal;
                });
            }]);