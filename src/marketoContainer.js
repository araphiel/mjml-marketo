const { BodyComponent } = require('mjml-core')
const { registerDependencies } = require('mjml-validator')

registerDependencies({
    'marketo-container': ['marketo-module'],
    'mj-body': ['marketo-container'],
})

class MarketoContainer extends BodyComponent {

    static allowedAttributes = {
        'id': 'string',
    }    

    render() {
        return `<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
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