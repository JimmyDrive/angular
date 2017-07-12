angular.module('starter.controllers', [])

    .controller('HomeCtrl', function ($scope, HomeGoodlistRow, $ionicSideMenuDelegate, HomeNewLists, HomechooseLists) {
        /*轮播假数据*/
        $scope.lunbopics = [
            {
                'id': 0,
                'imgsrc': 's3lideimage01.png'
            },
            {
                'id': 1,
                'imgsrc': 'slideimage02.png'
            },
            {
                'id': 2,
                'imgsrc': 'slideimage03.png'
            }
        ];
        //好评榜
        $scope.HomeGoodlistRows = HomeGoodlistRow.all();
        console.log($scope.HomeGoodlistRows);
        //侧滑
        $scope.toggleLeftSideMenu = function () {
            $ionicSideMenuDelegate.toggleLeft();
        };
        //课程列表
        $scope.Lessonlists = HomeNewLists.all();
        console.log($scope.Lessonlists);
        //猜你喜欢
        $scope.HomechooseList = HomechooseLists.all();
        console.log($scope.HomechooseList);
        /*跳转到子页面 study*/
        $scope.tz_study = function (myid) {
            alert(1)
            window.location = '#/tab/homeStudy' + myid;
        }

    })
    .controller('HomeStudy', function ($scope, pingjiaList, $ionicModal) {
        $scope.pingjiaLists = pingjiaList.all();
        $scope.Lshow = true;
        $scope.Rshow = false;
        $scope.Lcolor = {
            'color': '#63a'
        }
        $scope.Lclick = function () {
            $scope.Lshow = true;
            $scope.Rshow = false;
            if ($scope.Lshow = true) {
                $scope.Lcolor = {
                    'color': '#63a'
                }
            } else {
                $scope.Lcolor = {
                    'color': 'black'
                }
            }
            $scope.Rcolor = {
                'color': 'black'
            }

        };
        $scope.Rclick = function () {
            $scope.Lshow = false;
            $scope.Rshow = true;
            if ($scope.Rshow = true) {
                $scope.Rcolor = {
                    'color': '#63a'
                }
            } else {
                $scope.Rcolor = {
                    'color': 'black'
                }
            }
            $scope.Lcolor = {
                'color': 'black'
            }
        };

        $ionicModal.fromTemplateUrl('templates/tab-modal123.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });

    })
    //最新课程
    .controller('LessonlistCtrl', function ($scope, courseLists) {
        //课程下拉的假数据
        $scope.courseListBtns = [
            {id: 0, btnName: "全部"},
            {id: 1, btnName: "UI"},
            {id: 2, btnName: "JAVA"},
            {id: 3, btnName: "Android"},
            {id: 4, btnName: "IOS"},
            {id: 5, btnName: "其它"}
        ];

        //价格下拉的假数据
        $scope.priceBtns = [
            {id: 0, btnName: "全部"},
            {id: 1, btnName: "免费"},
            {id: 2, btnName: "收费"}
        ];

        $scope.lesson = function () {
            $scope.Rshow = false;
            $scope.Lshow = !$scope.Lshow;
            $scope.Rcolor = {
                'color': 'black'
            }
            if ($scope.Lshow == true) {
                $scope.Lcolor = {
                    'color': '#63aafc'
                }
            } else {
                $scope.Lcolor = {
                    'color': 'black'
                }
            }

        };
        $scope.docu = function () {
            $scope.Lshow = false;
            $scope.Rshow = !$scope.Rshow;
            $scope.Lcolor = {
                'color': 'black'
            }
            if ($scope.Rshow == true) {
                $scope.Rcolor = {
                    'color': '#63aafc'
                }
            } else {
                $scope.Rcolor = {
                    'color': 'black'
                }
            }
        };

        /*列表假数据*/
        // $scope.courseList=courseLists.all();

        $scope.page = 1;

        $scope.loadmore = true;

        $scope.courseLists = courseLists.page($scope.page);

        $scope.loadMore = function () {
            $scope.page++;
            $scope.newArray = courseLists.page($scope.page);
            if ($scope.newArray.length == 0) {
                $scope.loadmore = false;
            }
            $scope.courseLists = $scope.courseLists.concat($scope.newArray);

            //添加数组
            console.log($scope.newArray);
            /*加载完成之后执行的代码*/
            $scope.$broadcast('scroll.infiniteScrollComplete');
        };


    })

    .controller('MyCourseCtrl', function ($scope, courseFirst, courseSecond) {
        $scope.courseFirsts = courseFirst.all();
        $scope.courseSeconds = courseSecond.all();
        console.log($scope.courseSeconds);
        $scope.mycourse = true;
        $scope.asd = false;
        $scope.myCourse = function () {
            $scope.mycourse = true;
            $scope.asd = false;

        };
        $scope.course = function () {
            $scope.asd = true;
            $scope.mycourse = false;

        };


        $scope.data = {
            showDelete: false
        };

        $scope.onItemDelete = function (item) {
            $scope.items.splice($scope.items.indexOf(item), 1);
        };


    })
    .controller('PersonalCtrl', function ($scope, $http, $rootscope) {


        $scope.tz_register = function () {
            alert(1);
            window.location = '#/tab/register';
            console.log(window.location)
        }
        // $scope.tz_information = function () {
        //     window.location = '#/tab/information'
        // }

        // 登录 真数据
        $scope.login = function (loginuser) {
            $scope.data = {

            };
            console.log($scope.data);
            $http.post($rootscope.URLAdmin + '/Handler/UserHandler.ashx?action=login', $scope.data)
                .success(function (response) {
                    if (response.err) {
                        alert(123)
                    } else {
                        window.location = '#/tab/register';
                    }
                })

        }


    })
    .controller('RegisterCtrl', function ($scope) {


    })
    .controller('InformationCtrl', function ($scope) {


    })



    /*  第一步：在控制器中注入  $http,$rootscope
     第二部:$http.post('后台请求地址'，'后台需要的数据')
     .succes(function(respon){
     response 返回后台数据
     })
     */





    /*底部tabs隐藏显示的指令*/
    /*驼峰命名*/
    .directive('hideTabs', function ($rootScope) {
        return {
            restrict: 'A', //A的含义
            link: function (scope, element, attributes) {
                scope.$on('$ionicView.beforeEnter', function () {
                    $rootScope.hideTabs = attributes.hideTabs;
                });
                //广播事件
                // 指令值等于true就隐藏
                //指令值等于false就显示

                scope.$on('$ionicView.beforeLeave', function () {
                    $rootScope.hideTabs = false;
                });
            }
        };
    });




