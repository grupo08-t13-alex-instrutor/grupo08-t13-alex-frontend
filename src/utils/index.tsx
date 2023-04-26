

const siglaNameUtils = async (name: string) => {

    let response = ""

    if (name.includes(" ")) {
        const siglaNameSplit = name.split(" ")
        response += siglaNameSplit[0][0] + siglaNameSplit[1][1]

    } else {
        response += name[0]
    }

    return response
}


export { siglaNameUtils }