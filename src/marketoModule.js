import { BodyComponent } from 'mjml-core'
import { registerDependencies } from 'mjml-validator'

registerDependencies({
    'mj-marketo-container': ['mj-marketo-module'],
    'mj-marketo-module': ['mj-section'],
})

export default class MjMarketoModule extends BodyComponent {
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
                ${this.renderChildren()}
            </tr>
            `
    }
}