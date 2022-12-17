import websites from "./websites.js"

const media = {
    discord: "578533097293873162",
    github: "MrEzerYT",
    replit: "MrEzerYT",
    stackOverflow: "19758208/elias",
    email: "ezer@mrezer.fun"
}

const proxy = {
    get(target, name) {
        if (name === "emailRaw") 
            return target.email

        return `${websites[name] ?? ""}${target[name]}`
    }
}

export default new Proxy(media, proxy);
export const discordTag = "ЗОВУТ МАКСИМ#9999"
