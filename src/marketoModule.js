const { BodyComponent } = require('mjml-core')

class MarketoModule extends BodyComponent {
    static allowedAttributes = {
        'id': 'string',
        'mktoName': 'string',
        'mktoActive': 'string',
        'mktoAddByDefault': 'string',
    }

    render() {
        return `
            <tr ${this.htmlAttributes({ 
                class: 'mktoModule',
                'id': this.getAttribute('id'),
                'mktoName': this.getAttribute('mktoName'),
                'mktoActive': this.getAttribute('mktoActive'),
                'mktoAddByDefault': this.getAttribute('mktoAddByDefault')
            })}>
                ${this.renderChildren()}
            </tr>
            `
    }
}

module.exports = MarketoModule