# magento2-module-open-all-external-links-in-a-new-tab


This Magento 2 module makes every external link automatically open in a new tab so your traffic can stay on your site. It comes with the options to:

i) iether have an exit popup (that prompts users to confirm they would like to leave your site and open an external link in a new tab) or,

ii) automatically set external links to open in a new tab silently in the background.

This will save you so much time as you will not have to manually set every external link to open in a new tab in your code. It also eliminates all room human error in this regard.

Istallation steps

1. Create a folder titled "Dacod" in your Magento root/app/code.

2. Under the folder above ("Dacod") create a folder titled "ExternalLinksInNewTab". All in all your folder structure from the Magento root folder should be /app/code/Dacod/ExternalLinksInNewTab.

3. Download the contents of this repository into the folder above ("ExternalLinksInNewTab").

4. From the Magento root folder, via the Command Line Interface run the following commands:


	A. `php bin/magento module:enable Dacod_ExternalLinksInNewTab`

	B. `php bin/magento setup:static-content:deploy -f`

	C. `php bin/magento module:enable cache:clean`

5. Go to Stores > Configuration > Dacod on the backend and configure the module.


License


MIT License

Copyright (c) 2020 Dacod Magagula

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
