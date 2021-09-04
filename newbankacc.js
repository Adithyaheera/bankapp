class Bank123 {
  createAccount() {
    let person_name = name.value;
    let account_name = acno.value;
    let balance = bal.value;
    let password = pwd.value;


    let user = {
      person_name, account_name, password, balance

    }

    localStorage.setItem(account_name, JSON.stringify(user))
    alert("account created successfully")
    location.href="newloginpage.html";
  }
  

  authenticate(){
    let account_name = acno.value;
    let password = pass1.value;
    if (account_name in localStorage){
      let user=JSON.parse(localStorage.getItem(account_name))
      if (user.password == password && user.account_name==account_name){
        alert("login success.welcome user page")
         location.href="homepage.html";
         sessionStorage.setItem(account_name,JSON.stringify(user))
      }
      else {
        alert("invalid credentials")
      }
    }

    else {
      alert("inavalid account number")
    }
  }
logout(){
  sessionStorage.clear();
  location.href="newloginpage.html"
}

balanceEnquiry(){
  let user=JSON.parse(sessionStorage.getItem(sessionStorage.key(0)))
  alert(`available balance is ${user.balance}`)


}
fundTransfer(){
  let to_acno= acno.value;
  let amount=amt.value;
  if(to_acno in localStorage){
    let user=JSON.parse(sessionStorage.getItem(sessionStorage.key(0)))
    if(user.balance>=amount){
      let user1=JSON.parse(localStorage.getItem(to_acno))
      let user2=JSON.parse(localStorage.getItem(user.account_name))
      user1.balance+=amount
      user2.balance-=amount
      localStorage.setItem(user1.account_name,JSON.stringify(user1))
      localStorage.setItem(user2.account_name,JSON.stringify(user2)) 
      user.balance-=amount
      sessionStorage.setItem(user.account_name,JSON.stringify(user))
    }
    else{
      alert("insufficient balance")
    }
  }
  else{
    alert("invalide transfer")
  }
}


}


var bank = new Bank123()




















