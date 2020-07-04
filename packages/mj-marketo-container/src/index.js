import { BodyComponent } from 'mjml-core'

export default class MjMarketoContainer extends BodyComponent {
    static endingTag = true

    render() {
        return `
            <table 
                ${this.htmlAttributes({ 
                    'id': this.getAttribute('id'), 
                    class: 'mktoContainer'
                })}
            >
                ${this.renderChildren()}
            </table>
            `
    }
}