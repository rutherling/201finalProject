5/31/16
Create Contact Data Flow Process
1. User enters data on form. At this point, that is on form.html
2. IDs on each field feed into object constructor (literal) to create a new contact object.
3. Contact object goes to localStorage.

In the next phase, we'll also have a 4th step wherein a new "bubble" for a contact is written to he DOM by
(local storage? user form?)

Actual results:
I navigated to form.html from the URL bar in live-server.
I entered data into each field EXCEPT attach a file.
I hit submit and was redirected to index.html, except it was totally blank.
LocalStorage didn't have anything. Console didn't have anything.

Other issues:
form.html is so ugly. Probably don't style it for spacing until it's in the final position, but srsly, it's so hideous.

Issue source:
form.html does not have a <script> tag linking it to the model.js and app.js.

Confirm first and last name are required fields
1. Leave first name blank. you should see an error message.
Leave last name blank. You should see an error message.
