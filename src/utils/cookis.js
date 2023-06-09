const setCooki = (name, value, day) => {
    const now = new Date();
    now.setTime((now.getTime() + day * 24 * 60 * 60 * 1000))
    const expiresDay = now;
    const cooki = `${name}=${value};path=/;expires=${expiresDay};`
    document.cookie = cooki;
}

const getCooki = (cookiName) => {
    const cookies = document.cookie;
    const cookiArray = cookies.split(';')
    const findSelectedCooki = cookiArray.filter(cooki => cooki.includes(cookiName))
    if (findSelectedCooki.length) {
        const result = findSelectedCooki[0].split('=')[1]
        return result;
    } else {
        return null
    }
}
const deleteCooki = (cookiName) => {
    const expiresDay = "Thu, 01 Jan 1970 00:00:01 GMT";
    const cooki = `${cookiName}='';path=/;expires=${expiresDay};`
    document.cookie = cooki;
}

export { setCooki, getCooki, deleteCooki }