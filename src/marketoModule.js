const { BodyComponent } = require('mjml-core')
const { registerDependencies } = require('mjml-validator')

registerDependencies({
    'marketo-container': ['marketo-module'],
    'marketo-module': ['mj-section'],
})

class MarketoModule extends BodyComponent {
    static allowedAttributes = {
        'id': 'string',
        'mktoName': 'string',
        'mktoActive': 'string',
        'mktoAddByDefault': 'string',
    }

    render() {
        return `
            <tr 
                ${this.htmlAttributes({ 
                    class: 'mktoModule',
                    'id': this.getAttribute('id'),
                    'mktoName': this.getAttribute('mktoName'),
                    'mktoActive': this.getAttribute('mktoActive'),
                    'mktoAddByDefault': this.getAttribute('mktoAddByDefault')
                })}
            >
                ${this.renderChildren(this.props.children, {
                    rawXML: true,
                    renderer: component => component.render,
                })}
            </tr>
            `
    }
}

module.exports = MarketoModule