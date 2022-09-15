import { initReactQueryAuth } from "react-query-auth"; 
import { EMAILANDPWD, USER } from "types";

async function loadUser() {
  return null
}

async function loginFn(data: EMAILANDPWD) {

}

async function logoutFn() {

}

async function registerFn(data: EMAILANDPWD) {

}


const authConfig = {
	loadUser,
	loginFn,
	logoutFn,
	registerFn
}

const {AuthProvider, useAuth} = initReactQueryAuth(authConfig)

export {AuthProvider, useAuth}
