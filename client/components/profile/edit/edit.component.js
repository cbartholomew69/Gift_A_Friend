import editProfileController from './edit.controller';
import editProfileTemplate from './edit.html';

const editProfileComponent = {
    controller: editProfileController,
    template: editProfileTemplate
};

angular
    .module('myApp')
    .component('editProfile', editProfileComponent);