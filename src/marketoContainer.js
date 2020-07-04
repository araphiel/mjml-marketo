import { BodyComponent } from 'mjml-core'
import { registerDependencies } from 'mjml-validator'

registerDependencies({
    // Tell the validator which tags are allowed as our component's children
    'mj-marketo-container': [
      'mj-section',
      'mj-wrapper',
    ],
    // Now tell the validator which tags are allowed as our component's parent
    'mj-body': ['mj-marketo-container'],
  })

export default class MjMarketoContainer extends BodyComponent {
    static endingTag = true

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
                ${this.renderChildren(this.props.children)}
            </table>
            `
    }
}