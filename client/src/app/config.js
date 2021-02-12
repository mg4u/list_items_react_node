export const API_URL= `http://localhost:${process.env.REACT_APP_SERVER_PORT || 8080}/api/v0/`
console.warn({API_URL: API_URL})
export const HEADERS= {
	'Content-Type': 'application/json',
	'Accept': 'application/json'
}
export const LoginAccount={
	"email":"test@test.com",
	"password":"123"
}
