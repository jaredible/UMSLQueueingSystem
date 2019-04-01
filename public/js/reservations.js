// The Browser API key obtained from the Google API Console.
// Replace with your own Browser API key, or your own key.
var developerKey = 'AIzaSyCU1ys6nFARm3JTdfHNW1127oyaV5CKG6s';

// The Client ID obtained from the Google API Console. Replace with your own Client ID.
var clientId = "535555661326-bucebbfmova3s3iq1ioq7oj9a7klr1c2.apps.googleusercontent.com"

// Replace with your own project number from console.developers.google.com.
// See "Project number" under "IAM & Admin" > "Settings"
var appId = "535555661326";

// Scope to use to access user's Drive items.
var scope = ['https://www.googleapis.com/auth/drive'];

var pickerApiLoaded = false;
var oauthToken;

// Use the Google API Loader script to load the google.picker script.
function loadPicker() {
  console.log('loadPicker')
  gapi.load('auth', {
    'callback': onAuthApiLoad
  });
  gapi.load('picker', {
    'callback': onPickerApiLoad
  });
}

function onAuthApiLoad() {
  window.gapi.auth.authorize({
      'client_id': clientId,
      'scope': scope,
      'immediate': false
    },
    handleAuthResult);
}

function onPickerApiLoad() {
  pickerApiLoaded = true;
  createPicker();
}

function handleAuthResult(authResult) {
  if (authResult && !authResult.error) {
    oauthToken = authResult.access_token;
    createPicker();
  }
}

// Create and render a Picker object for searching images.
function createPicker() {
  if (pickerApiLoaded && oauthToken) {
    var view = new google.picker.View(google.picker.ViewId.DOCS);
    view.setMimeTypes("image/png,image/jpeg,image/jpg");
    var picker = new google.picker.PickerBuilder()
      .enableFeature(google.picker.Feature.NAV_HIDDEN)
      .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
      .setAppId(appId)
      .setOAuthToken(oauthToken)
      .addView(view)
      .addView(new google.picker.DocsUploadView())
      .setDeveloperKey(developerKey)
      .setCallback(pickerCallback)
      .build();
    picker.setVisible(true);
  }
}

// A simple callback implementation.
function pickerCallback(data) {
  if (data.action == google.picker.Action.PICKED) {
    var fileId = data.docs[0].id;
    alert('The user selected: ' + fileId);
  }
}

var dropboxButton = Dropbox.createChooseButton({
  // Required. Called when a user selects an item in the Chooser.
  success: function(files) {
    alert("Here's the file link: " + files[0].link)
  },

  // Optional. Called when the user closes the dialog without selecting a file
  // and does not include any parameters.
  cancel: function() {},

  // Optional. "preview" (default) is a preview link to the document for sharing,
  // "direct" is an expiring link to download the contents of the file. For more
  // information about link types, see Link types below.
  linkType: "direct", // or "direct"

  // Optional. A value of false (default) limits selection to a single file, while
  // true enables multiple file selection.
  multiselect: true, // or true

  // Optional. This is a list of file extensions. If specified, the user will
  // only be able to select files with these extensions. You may also specify
  // file types, such as "video" or "images" in the list. For more information,
  // see File types below. By default, all extensions are allowed.
  extensions: ['images'],

  // Optional. A value of false (default) limits selection to files,
  // while true allows the user to select both folders and files.
  // You cannot specify `linkType: "direct"` when using `folderselect: true`.
  folderselect: false, // or true

  // Optional. A limit on the size of each file that may be selected, in bytes.
  // If specified, the user will only be able to select files with size
  // less than or equal to this limit.
  // For the purposes of this option, folders have size zero.
  sizeLimit: 1024 * 1024 * 1024, // or any positive number
});

$(function() {
  $('#calendar').fullCalendar({
    editable: true
  });

  $('#btn-dropbox').append(dropboxButton);
});
