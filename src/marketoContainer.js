import { BodyComponent } from 'mjml-core'
import { registerDependencies } from 'mjml-validator'

registerDependencies({
    'mj-marketo-container': ['mj-marketo-module'],
    'mj-body': ['mj-marketo-container'],
})

export default class MjMarketoContainer extends BodyComponent {

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