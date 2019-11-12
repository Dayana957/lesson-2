# Homework

### exercise1 ###

    function getArguments() {
        for (var i = 0; i < arguments.length; i++) {
            console.log(arguments[i]);
        }
    };

### exercise2 ###

    function userInfo () {
        console.log (
            this.registered ? 
                `Дата регистрации: ${this.data.toLocaleString()}` :
                `Незарегистрированный пользователь: ${this.name}`
        );
    }

    var user1 = {
      name: "Piter", 
      registered: true, 
      data: new Date(), 
      getInfo: userInfo
    }

    var user2 = {
      name: "Charle", 
      registered: false, 
      data: new Date(), 
      getInfo: userInfo
    }

### exercise3 ###

    function getCurrentPostComments ( postId ) {
        var res = [];
        var commentsList = Object.values(comments);
        var usersList = Object.entries(users);
        for (var i = 0; i < commentsList.length; i++) {
            if (commentsList[i].postId === postId) {
                for (var j = 0; j < usersList.length; j++) {
                    if (usersList[j][0] === commentsList[i].author.toString()) {
                        res.push({
                            author: usersList[j][1].name,
                            text: commentsList[i].text
                        });
                    }
                }
            }
        }
          
        return res;
    };