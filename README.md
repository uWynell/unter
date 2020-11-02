# Universal router (in devepopment)

The usage is really simple so far:

```javascript
const { Unter } = require('unter');
// or
import { Unter } from 'unter';

const unter = new Unter();
unter.on('/example', (path, ...args) => {
  console.log(path, ...args);
});

unter.dispatch('/example', 1, 2, 3);
/* Console:
  /example 1 2 3
*/
```
