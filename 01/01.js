// to loop through all the properties of the object
function setObjectAsAttribute(element_, object) {
    for (const element in object) {
        element_.setAttribute(element, object[element])
    }
}

// to generate <tag attribute="property">title</tag>
function createTitle(tag, title, attribute) {
    let titleElemet = document.createElement(tag)
    titleElemet.innerHTML = title
    setObjectAsAttribute(titleElemet, attribute)
    return titleElemet
}

// to style body tag
const main = document.getElementsByTagName("body")[0]
setObjectAsAttribute(main, { "style": "background-color: #f4f4f4;" })

// to create and add differnt heading tags to div with id 'app'
const app = document.getElementById("app")

app.append(
    createTitle("h1", "This is H1.", { "style": "color: red", "title": "This is H1" }),
    createTitle("h2", "This is H2.", { "style": "color: green", "title": "This is H2" }),
    createTitle("h3", "This is H3.", { "style": "color: blue", "title": "This is H3" }),
    createTitle("h4", "This is H4.", { "style": "color: pink", "title": "This is H4" }),
    createTitle("h5", "This is H5.", { "style": "color: yellow", "title": "This is H5" }),
    createTitle("h6", "This is H6.", { "style": "color: lightblue", "title": "This is H6" })
)