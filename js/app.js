// <form class="inputForm" action="index.html" method="post"> <!--change action tag?-->
//   <label for="firstName">First Name: <input type="text" name="firstName" id="firstName">
//   </input></label>
//   <label for="lastName">Last Name: <input type="text" name="lastName" id="lastName">
//   </input></label>
//   <label for="reachOut">Reach out every <input type="text" name="reachOut" id="reachOut">
//   </input> days</label>
//   <label for="topic">Topics <textarea type="text" name="topic" id="topic">
//   </textarea></label>
//   <label for="contactPhoto">Photo <input type="file" name="contactPhoto" id="contactPhoto">
//   </input></label>
//   <input type="submit" name="addContact" value="Add Contact"></input>
// </form>

document.getElementById('submitButtonId').addListener('click',addContactFromForm);

function addContactFromForm(event) {
  event.preventDefaultAction();
}
