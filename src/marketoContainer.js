const { BodyComponent } = require('mjml-core')
const { registerDependencies } = require('mjml-validator')

registerDependencies({
    'mj-marketo-container': ['marketo-module'],
    'mj-body': ['marketo-container'],
})

class MarketoContainer extends BodyComponent {

    static allowedAttributes = {
        'id': 'string',
    }    

    render() {
        return `
            <table 
                ${this.htmlAttributes({ 
                    'id': this.getAttribute('id'), 
                    'class': 'mktoContainer'
                })}
            >
                ${this.renderChildren(this.props.children, {
                    rawXML: true,
                    renderer: component => component.render,
                })}
            </table>
            `
    }
}

module.exports = MarketoContainer