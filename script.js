/**
 * Created by toks on 3/5/17.
 */
$(document).ready(
    function ()
    {
        initEvents();
        setBaseValidators();
    }
)
;

function setBaseValidators()
{
    addDateTimeValidators();
    /*
     * eventDateTime - customNotInFuture
     * eventDescription - required
     * contactPhoneNumber - required
     * contactEmail required customEmailEqualCheckValidator
     * contactEmailCheck required customEmailEqualCheckValidator


     no id

     * submitterFirstName required
     * submitterLastName required
     * submitterCitizenship required
     * submitterPIN (isikukood) required numeric
     * submitterTimeOfBirth required customNotInFuture
     */
    $('#eventDateTime').attr('data-parsley-datetimepicker', true)
    $('#eventdescription').attr('data-parsley-required', true)
    $('#contactphonenumber').attr('data-parsley-required', true)
    $('#contactEmail').attr('data-parsley-required', true)
    //$('#contactEmail').attr('custom numeric chcek', true)

    $('#contactemailcheck').attr('data-parsley-required', true)
    //$('#contactemailcheck').attr('parsley email verification', true)

    $('#submitterFirstName').attr('data-parsley-required', true)
    $('#submitterLastName').attr('data-parsley-required', true)
    $('#submitterCitizenship').attr('data-parsley-required', true)
    $('#submitterPIN').attr('data-parsley-required', true)
    //$('#submitterPIN').attr('custom numeric check', true)

    $('#submitterTimeOfBirth').attr('data-parsley-required', true)
    //$('#submitterTimeOfBirth').attr('custom not in future check', true)

}

function addDateTimeValidators()
{
    //custom datetimevalidator here
    //todo: fix date parse issues

    window.Parsley
        .addValidator('datetimepicker', {
            requirementType: 'string',
            validateString: function (value, requirement)
            {
                console.log(Date.parse(value).toString());
                var eventDateTime = Date.parse(value);
                var currentDateTime = new Date();
                console.log(value);
                console.log(eventDateTime);
                console.log(currentDateTime);
                return eventDateTime < currentDateTime;
            },
            messages: {
                en: 'Sündmuse aeg ei saa olla tulevikus!'
            }
        });

    window.Parsley
        .addValidator('datepicker', {
            requirementType: 'string',
            validateString: function (value, requirement)
            {
                console.log(Date.parse(value).toString());
                var eventDateTime = Date.parse(value);
                var currentDateTime = new Date();
                return eventDateTime < currentDateTime;
            },
            messages: {
                en: 'Sünniaeg ei saa olla tulevikus!'
            }
        });
    //retarded event handling because datetimepicker did not fire proper events

    $('#firstdatetimepicker').on('blur change click dblclick error focus focusin focusout hover keydown keypress keyup load mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup resize scroll select submit', function ()
    {
        $('#eventDateTime').parsley().validate();
    });
    $('#birthdatetimepicker').on('blur change click dblclick error focus focusin focusout hover keydown keypress keyup load mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup resize scroll select submit', function ()
    {
        $('#submitterTimeOfBirth').parsley().validate();
    });
}

function addSubmitterDataValidation()
{
    $('#submitterFirstName').attr('data-parsley-required', true);
    $('#submitterLastName').attr('data-parsley-required', true);
    $('#submitterCitizenship').attr('data-parsley-required', true);
    $('#submitterPIN').attr('data-parsley-required', true);
    $('#submitterTimeOfBirth').attr('data-parsley-required', true);
}
function removeSubmitterDataValidation()
{
    $('#submitterFirstName').attr('data-parsley-required', false);
    $('#submitterLastName').attr('data-parsley-required', false);
    $('#submitterCitizenship').attr('data-parsley-required', false);
    $('#submitterPIN').attr('data-parsley-required', false);
    $('#submitterTimeOfBirth').attr('data-parsley-required', false);
}

function submitForm()
{
    var formParsley = $('#mainForm').parsley();
    var confirmation = confirm("REPLACE ME LOL. Kas esitatud andmed on korrektsed?");
    if (confirmation)
    {
        formParsley.validate();
    }
}

function initEvents()
{
    $('.datepicker').datetimepicker({
        format: 'DD.MM.YYYY'
    });
    $('.datetimepicker').datetimepicker({
        format: 'DD.MM.YYYY HH:mm'
    });
    $('.countries').select2({
        allowClear: true,
        placeholder: "",
        data: ["Eesti Vabariik", "Määratlemata", "Afganistan", "Ahvenamaa", "Albaania", "Alžeeria", "Ameerika Samoa", "Ameerika Ühendriigid", "Andorra", "Angola", "Anguilla", "Antarktis", "Antigua ja Barbuda", "Aomen", "Araabia Ühendemiraadid", "Argentina", "Armeenia", "Aruba", "Aserbaidžaan", "Austraalia", "Austria", "Bahama", "Bahrein", "Bangladesh", "Barbados", "Belau", "Belgia", "Belize", "Benin", "Bermuda", "Bhutan", "Boliivia Paljurahvuseline Riik", "Bonaire, Sint Eustatius ja Saba", "Bosnia- ja Hertsegoviina", "Botswana", "Bouvet' saar", "Brasiilia", "Briti India ookeani ala", "Briti Neitsisaared", "Brunei Darussalam", "Bulgaaria", "Burkina Faso", "Burundi", "Colombia", "Cooki saared", "Costa Rica", "Curaçao", "Curaçao (Holl)", "Djibouti", "Dominica", "Dominikaani Vabariik", "Ecuador", "Egiptus", "Ekvatoriaal-Guinea", "El Salvador", "Elevandiluurannik", "Eritrea Riik", "Etioopia", "Falklandi (Malviini) saared", "Fidži", "Filipiini Vabariik", "Fääri saared", "Gabon", "Gambia", "Ghana", "Gibraltar", "Grenada", "Gruusia", "Gröönimaa", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guernsey (GBR)", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard ja McDonald", "Hiina", "Hispaania", "Holland", "Hollandi Antillid", "Honduras", "Hongkong", "Horvaatia", "Ida-Timori", "Ida-Timori", "Iirimaa", "Iisrael", "India", "Indoneesia", "Iraak", "Iraan", "Island", "Itaalia", "Jaapan", "Jamaica", "Jeemen", "Jersey", "JEY", "Jordaania", "Jugoslaavia", "Jõulusaar", "Kaimanisaared (GBR)", "Kambodža", "Kamerun", "Kanada", "Kasahstan", "Katar", "Kenya", "Kesk-Aafrika Vabariik", "Kiribati", "Komoori Liit", "Kongo", "Kongo DV", "Kookossaared (Keelingi saared)", "Korea RDV", "Korea Vabariik", "Kosovo", "Kreeka", "Kuuba", "Kuveit", "Kõrgõzstan", "Küpros", "Laos", "Leedu", "Lesotho", "Libeeria", "Liechtenstein", "Liibanon", "Liibüa", "Luksemburg", "Lõuna-Aafrika Vabariik", "Lõuna-Georgia ja Lõuna-Sandwich", "Lõuna-Sudaan", "Läti Vabariik", "Lääne-Sahara", "Madagaskar", "Makedoonia", "Malaisia", "Malawi", "Maldiivid", "Mali", "Malta", "Mani saar", "Maroko", "Marshalli Saared", "Martinique", "Mauritaania", "Mauritius", "Mayotte", "Mehhiko", "Mikroneesia", "Moldova", "Monaco", "Mongoolia", "Montenegro", "Montserrat", "Mosambiik", "Myanmar", "Namiibia", "Nauru", "Nepal", "Nicaragua", "Nigeeria", "Niger", "Niue", "Norfolki Saar", "Norra", "Omaan", "Paapua Uus-Guinea", "Pakistan", "Palestiina okupeeritud alad", "Panama", "Paraguay", "Peruu", "Pitcairn", "Poola", "Portugali", "Prantsuse Guajaana", "Prantsuse Lõunaalad", "Prantsuse Polüneesia", "Prantsusmaa", "Puerto Rico", "Põhja-Mariaanid", "Püha Tool (Vatikan)", "Réunion", "Riik teadmata", "Roheneemesaared", "Rootsi Kuningriik", "Rumeenia", "Rwanda", "Saalomoni Saared", "Saint Helena, Ascension ja Tristan da Cunha (GBR)", "Saint Kitts ja Nevis", "Saint Lucia", "Saint Pierre ja Miquelon", "Saint Vincent ja Grenadiinid", "Saint-Barthélemy (FRA)", "Saint-Martin (Prantsuse osa) (FRA)", "Saksamaa", "Sambia", "Samoa", "San Marino", "Sao Tomé ja Principe", "Saudi Araabia", "Seišellid", "Senegal", "Serbia", "Sierra Leone", "Singapur", "Sint Marteen (Hollandi osa)", "Slovakkia", "Sloveenia", "Somaali Vabariik", "Soome", "Sri Lanka", "Sudaan", "Suriname", "Suurbritannia", "Svaasimaa", "Svalbard ja Jan Mayen", "Süüria", "Šveits", "Zimbabwe", "Taani", "Tadžikistan", "Tai", "Taiwan", "Tansaania", "Togo", "Tokelau", "Tonga", "Trinidad ja Tobago", "Tšaad", "Tšehhi", "Tšiili", "Tuneesia", "Turks ja Caicos", "Tuvalu", "Türgi", "Türkmenistan", "Uganda", "Ukraina", "Ungari", "Uruguay", "USA Neitsisaared", "Usbekistan", "Uus-Kaledoonia", "Uus-Meremaa", "Valgevene", "Wallis ja Futuna", "Vanuatu", "Venemaa Föderatsioon", "Venezuela", "Vietnam", "Ühendriikide hajasaared", "Mujal nimetamata territooriumid"]
    });
    $('#without-id').click(function ()
    {
        /*
         * change the button color to indicate that the next press will submit*/
        $('#without-id').addClass('submit-button');
        var person = $('#person-information');
        if (person.hasClass("hidden"))
        {
            person.removeClass("hidden");
            addSubmitterDataValidation();
        } else
        {
            submitForm();
        }
    });
    $('#with-id').click(function ()
    {
        /*
         * if the no id card option was chosen before, hide the panel, remove attributes */
        removeSubmitterDataValidation();
        $('#person-information').addClass('hidden');
        $('#without-id').removeClass('submit-button');
        submitForm();

    });
    $('#add-witness').click(function ()
    {
        var witnessData = $('#witness-data')
            .clone()
            .removeClass('hidden')
            .removeAttr('id');
        witnessData.find('.remove-entry')
            .click(function (event)
            {
                console.log(event.target);
                $(event.target).parent().remove();
            });
        $("#witnesses").append(witnessData);
    });
    $('#add-criminal').click(function ()
    {
        var witnessData = $('#criminal-data')
            .clone()
            .removeClass('hidden')
            .removeAttr('id');
        witnessData.find('.remove-entry')
            .click(function (event)
            {
                console.log(event.target);
                $(event.target).parent().remove();
            });
        $("#criminals").append(witnessData);
    });
    $('#add-item').click(function ()
    {
        var witnessData = $('#item-data')
            .clone()
            .removeClass('hidden')
            .removeAttr('id');
        witnessData.find('.remove-entry')
            .click(function (event)
            {
                console.log(event.target);
                $(event.target).parent().remove();
            });
        $("#items").append(witnessData);
    });
}

/*
 * levels of validation
 * required
 * email verification
 * isikukood maxlen and numbers only
 *
 * */

/*
 * IDs and verification needed
 * eventDateTime - customNotInFuture
 * eventCountry
 * eventAddress
 * eventPlaceOfAction
 * eventDescription - required
 * eventDamageCost
 * eventSettlement
 * eventEmailInformationSendingConfirmation
 * eventInformationViaEToimik
 * contactPhoneNumber - required
 * contactAddress
 * contactEmail required customEmailEqualCheckValidator
 * contactEmailCheck required customEmailEqualCheckValidator
 *
 * if no id
 * submitterFirstName required
 * submitterLastName required
 * submitterCitizenship required
 * submitterJobTitle
 * submitterPIN (isikukood) required numeric
 * submitterTimeOfBirth required customNotInFuture
 *
 * item data related stuff (no way to assign id unless OOP stuff.
 * item name
 * item year of purchase
 * item approximate current value in euros
 * item was in a locked room
 * last date and time of possession of said item
 * date and time of moment that the item was declared lost
 * differentiating properties
 *
 * criminal data (person who did bad stuff)
 * criminal first name
 * criminal last name
 * criminal PIN
 * criminal date of birth
 * criminal citizenship
 * criminal job title
 * criminal phone number
 * criminal address
 * criminal email
 * criminal identifying features
 *
 *
 * Witness related data
 * witness first name
 * witness last name
 * witness PIN
 * witness time of birth
 * witness citizenship
 * witness job title
 * witness phone number
 * witness address
 * witness email
 *
 *
 *
 * */