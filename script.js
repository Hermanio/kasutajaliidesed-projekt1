/**
 * Created by toks on 3/5/17.
 */
var firstName;
$(document).ready(
    function () {
        firstName = $('#firstName').parsley();
        $('#firstName').attr('data-parsley-maxlength', 4);
        checkIfIsValid();
        firstName.on('field:success', function() {
            // In here, `this` is the parlsey instance of #some-input
            console.log('first name field is valid')
        });
        firstName.on('field:error', function() {
            // In here, `this` is the parlsey instance of #some-input
            console.log('first name field is NOT VALID')
        });
    }
)
;

function checkIfIsValid() {
    console.log(firstName.isValid());
}