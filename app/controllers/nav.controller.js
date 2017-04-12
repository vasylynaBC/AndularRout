angular.module('Controllers', [])

    .controller('NavigationCtrl', [function () {
        var vm = this;
        vm.test = 'test';
        vm.testQ = [
            {
                title: 'MainPage',
                link: '#/'
            },
            {
                title: 'Blog',
                link: '#/first'
            },
            {
                title: 'NoteBook',
                link: '#/second'
            },
            {
                title: 'TaskList',
                link: '#/third'
            }
        ];
    }]);