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