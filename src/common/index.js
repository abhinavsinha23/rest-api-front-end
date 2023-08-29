export const writeCookie = (key, value, days) => {
    // Key = name of the cookie
    // Value = jwt_token
    // Days = how long until the cookie expires

    let date = new Date()
    days = days || 365

    // Setting the date plus the number of days we want the cookie to last for
    date.setDate(date.getDate() + days)

    let cookie = document.cookie = key + "=" + value + "; expires=" + date.toGMTString() + "; path=/"
    console.log(cookie)
}

export const getCookie = (cookieName) => {
    const re = new RegExp(`(?<=${cookieName}=)[^;]*`) // pattern to find a cookie
    try {
        let cookie = document.cookie.match(re)[0] // .match returns a two-value array
        console.log(cookie)
        return cookie
    } 
    catch (error) {
        return false
    }
}