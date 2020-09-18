# MJML for Marketo

Custom components needed to turn your MJML emails into editable Marketo templates.

## Usage

```javascript
const mjml2html = require("mjml")
const { registerComponent } = require('mjml-core');
const { MarketoContainer, MarketoModule } = require('mjml-marketo');

registerComponent(MarketoContainer)
registerComponent(MarketoModule)

const template = `
<mjml>
    <mj-body>
        <marketo-container id="base">
            <marketo-module id="generalTextRow" mktoName="General Text Row">
                <mj-section>
                    <mj-column>
                        <mj-text>
                            <span id="foobar" mktoName="Text Block" class="mktoText">
                                hello
                            </span>
                        </mj-text>
                    </mj-column>
                </mj-section>
            </marketo-module>
        </marketo-container>
    </mj-body>
</mjml>
`;

const result = mjml2html(template)

console.log(result)
```
