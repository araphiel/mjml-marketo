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
        const attrs = this.htmlAttributes({ 
            'id': this.getAttribute('id'), 
            'class': 'mktoContainer'
        })
        
        return this.renderMJML(`
                <table>
                    <tbody ${attrs}>
                        ${this.renderChildren()}
                    </tbody>
                </table>
            `)
    }
}

module.exports = MarketoContainer