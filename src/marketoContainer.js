const { BodyComponent } = require('mjml-core')

class MarketoContainer extends BodyComponent {

    static allowedAttributes = {
        'id': 'string',
    }    

    render() {
        return `<table>
                    <tbody ${this.htmlAttributes({ 
                        'id': this.getAttribute('id'), 
                        'class': 'mktoContainer'
                    })}>
                        ${this.renderChildren()}
                    </tbody>
                </table>`
    }
}

module.exports = MarketoContainer