

const siglaNameUtils = async (name: string) => {

    if (name.includes(" ")) {
        const siglaNameSplit = name.split(" ")
        return siglaNameSplit[0][0] + siglaNameSplit[1][0]
    } else {
        return name[0]
    }
}


export { siglaNameUtils }