export const currentUser={
    userData: {},
    authenticated:false
};

export function setCurrentUser(user,auth){
    currentUser.userData=user;
    currentUser.authenticated=auth;
}


export function emptyCurrentUser(){
    currentUser.userData={};
    currentUser.authenticated=false;
}