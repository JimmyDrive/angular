angular.module('starter.services', [])

    .factory('Chats', function () {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var chats = [{
            id: 0,
            name: 'Ben Sparrow',
            lastText: 'You on your way?',
            face: 'img/ben.png'
        }, {
            id: 1,
            name: 'Max Lynx',
            lastText: 'Hey, it\'s me',
            face: 'img/max.png'
        }, {
            id: 2,
            name: 'Adam Bradleyson',
            lastText: 'I should buy a boat',
            face: 'img/adam.jpg'
        }, {
            id: 3,
            name: 'Perry Governor',
            lastText: 'Look at my mukluks!',
            face: 'img/perry.png'
        }, {
            id: 4,
            name: 'Mike Harrington',
            lastText: 'This is wicked good ice cream.',
            face: 'img/mike.png'
        }];

        return {
            all: function () {
                return chats;
            },
            remove: function (chat) {
                chats.splice(chats.indexOf(chat), 1);
            },
            get: function (chatId) {
                for (var i = 0; i < chats.length; i++) {
                    if (chats[i].id === parseInt(chatId)) {
                        return chats[i];
                    }
                }
                return null;
            }
        };
    })





    //好评榜
    .factory("HomeGoodlistRow", function () {
        var homeGoodlistRows = [
            [{"id": 0, "title": "javaScript课程", "main": "good,good,非常棒！", "imgsrc": "shouye_02.png"},
                {"id": 1, "title": "UI/UE", "main": "UI,非常棒！", "imgsrc": "shouye_02.png"}],
            [{
                "id": 2, "title": "HTML5+CSS3", "main": "bangbangda,非常棒！", "imgsrc": "shouye_02.png"
            },
                {
                    "id": 3, "title": "jQuery", "main": "wuli jQuery,非常棒！", "imgsrc": "shouye_02.png"
                }]
        ];
        return {
            all: function () {
                return homeGoodlistRows;
            }
        };
    })



    //最新课程
    .factory("HomeNewLists", function () {
        var homeNewListRow = [
            [{"id": 0, "title": "javaScript课程", "main": "good,good,非常棒！", "imgsrc": "shouye_03.png"},
                {"id": 1, "title": "UI/UE", "main": "UI,非常棒！", "imgsrc": "shouye_03.png"}],
            [{"id": 2, "title": "HTML5+CSS3", "main": "bangbangda,非常棒！", "imgsrc": "shouye_03.png"},
                {"id": 3, "title": "jQuery", "main": "wuli jQuery,非常棒！", "imgsrc": "shouye_03.png"}]
        ];
        return {
            all: function () {
                return homeNewListRow;
            }
        };
    })




    //猜你喜欢
    .factory("HomechooseLists", function () {
        var homechooseList = [
            {
                "id": 0,
                "pic": "img/shouye_02.png",
                "title": "javaScript课程",
                "main": "good,good,非常棒！",
                "imgsrc": "shouye_02.png"
            },
            {
                "id": 1,
                "pic": "img/shouye_02.png",
                "title": "UI/UE",
                "main": "UI,非常棒！",
                "imgsrc": "shouye_02.png"
            },
            {
                "id": 2,
                "pic": "img/shouye_02.png",
                "title": "HTML5+CSS3",
                "main": "bangbangda,非常棒！",
                "imgsrc": "shouye_02.png"
            },
            {
                "id": 3,
                "pic": "img/shouye_02.png",
                "title": "jQuery",
                "main": "wuli jQuery,非常棒！",
                "imgsrc": "shouye_02.png"
            }
        ];
        return {
            all: function () {
                return homechooseList;
            }
        };
    })

    //课程列表页的假数据
    .factory('courseLists', function () {
        var chats = [{
            id: 0,
            titleEn: '1Ben Sparrow',
            price: 'You on your way?',
            imgsrc: 'img/ben.png'
        }, {
            id: 15,
            titleEn: '2Ben Sparrow',
            price: 'You on your way?',
            imgsrc: 'img/ben.png'
        }, {
            id: 15,
            titleEn: '3Ben Sparrow',
            price: 'You on your way?',
            imgsrc: 'img/ben.png'
        }, {
            id: 15,
            titleEn: '4Ben Sparrow',
            price: 'You on your way?',
            imgsrc: 'img/ben.png'
        }, {
            id: 15,
            titleEn: '5Ben Sparrow',
            price: 'You on your way?',
            imgsrc: 'img/ben.png'
        }, {
            id: 15,
            titleEn: '6Ben Sparrow',
            price: 'You on your way?',
            imgsrc: 'img/ben.png'
        }, {
            id: 15,
            titleEn: '7Ben Sparrow',
            price: 'You on your way?',
            imgsrc: 'img/ben.png'
        }, {
            id: 15,
            titleEn: '8Ben Sparrow',
            price: 'You on your way?',
            imgsrc: 'img/ben.png'
        }, {
            id: 15,
            titleEn: '9Ben Sparrow',
            price: 'You on your way?',
            imgsrc: 'img/ben.png'
        }, {
            id: 15,
            titleEn: '10Ben Sparrow',
            price: 'You on your way?',
            imgsrc: 'img/ben.png'
        }, {
            id: 15,
            titleEn: '11Ben Sparrow',
            price: 'You on your way?',
            imgsrc: 'img/ben.png'
        }, {
            id: 15,
            titleEn: '12Ben Sparrow',
            price: 'You on your way?',
            imgsrc: 'img/ben.png'
        }, {
            id: 15,
            titleEn: '13Ben Sparrow',
            price: 'You on your way?',
            imgsrc: 'img/ben.png'
        }, {
            id: 15,
            titleEn: '14Ben Sparrow',
            price: 'You on your way?',
            imgsrc: 'img/ben.png'
        }, {
            id: 15,
            titleEn: '15Ben Sparrow',
            price: 'You on your way?',
            imgsrc: 'img/ben.png'
        }, {
            id: 15,
            titleEn: '16Ben Sparrow',
            price: 'You on your way?',
            imgsrc: 'img/ben.png'
        }];


        return {
            page: function (page) {
                return chats.slice((page - 1) * 5, page * 5);
            },
            all: function () {
                return chats;
            },
            remove: function (chat) {
                chats.splice(chats.indexOf(chat), 1);
            },
            priceSearch: function (searchText) {
                return chats.splice(0, 2);
            },
            courseSearch: function (searchText) {
                return chats.splice(0, 2);
            }
        };
    })
    //我的课程页面我的课程的测试数据
    .factory("courseFirst", function () {
        var itemFir = [{
            id: 0,
            imgsrc: "img/ben.png",
            title: "标题1",
            num: "3节",
            nums: "15节"
        }, {
            id: 5,
            imgsrc: "img/ben.png",
            title: "标题1",
            num: "3节",
            nums: "15节"
        }, {
            id: 5,
            imgsrc: "img/ben.png",
            title: "标题2",
            num: "3节",
            nums: "15节"
        }, {
            id: 5,
            imgsrc: "img/ben.png",
            title: "标题3",
            num: "3节",
            nums: "15节"
        }, {
            id: 5,
            imgsrc: "img/ben.png",
            title: "标题4",
            num: "3节",
            nums: "15节"
        }, {
            id: 5,
            imgsrc: "img/ben.png",
            title: "标题6",
            num: "3节",
            nums: "15节"
        }];


        return {
            all: function () {
                return itemFir;
            }
        };
    })
    //我的课程页面收藏课程的测试数据
    .factory('courseSecond', function () {
        var itemSec = [{
            id: 0,
            imgsrc: "img/ben.png",
            title: "2标题1",
            num: "2节",
            nums: "15节"
        },
            /*省略部分内容*/
            {
                id: 5,
                imgsrc: "img/ben.png",
                title: "标题6",
                num: "3节",
                nums: "15节"
            }];


        return {
            all: function () {
                return itemSec;
            }
        };
    })
    //学习页面目录数据
    .factory('studyList',function() {
        var studymulu = [{
            title:"1-1photoshop修图效果效果制作",
            time:"15分钟"
        },
            {
                title:"1-2photoshop修图效果效果制作",
                time:"15分钟"
            },
            {
                title:"1-2photoshop修图效果效果制作",
                time:"15分钟"
            },
            {
                title:"1-2photoshop修图效果效果制作",
                time:"15分钟"
            },
            {
                title:"1-2photoshop修图效果效果制作",
                time:"15分钟"
            } ,
            {
                title:"1-2photoshop修图效果效果制作",
                time:"15分钟"
            }]

        return{
            all:function(){
                return studymulu;
            }
        }
    })

    .factory('pingjiaList',function() {

        var assesslist = [{
            pic: "img/study_tx.jpg",
            name: "李晓丽",
            title: "10分钟前",
            cont: "多谢大神指点",
        },
            {
                pic: "img/study_tx.jpg",
                name: "李晓丽",
                title: "10分钟前",
                cont: "多谢大神指点",
            },
            {
                pic:"img/study_tx.jpg",
                name: "李晓丽",
                title: "8分钟前",
                cont: "多谢大神指点",
            },
            {
                pic: "img/study_tx.jpg",
                name: "李晓丽",
                title: "刚刚",
                cont: "多谢大神指点",
            }]

        return{
            all:function(){
                return assesslist
            }
        }

    })
