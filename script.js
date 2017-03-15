$(document).ready(
    function ()
    {
        initEvents();
        setBaseValidators();
    }
);

function setBaseValidators()
{
    addDateTimeValidators();

    $('#eventDateTime').attr('data-parsley-datetimepicker', true);
    $('#eventDateTime').attr('data-parsley-error-message', 'Sündmuse aeg ei saa olla tulevikus!');

    $('#eventDescription').attr('data-parsley-required', true);
    $('#eventDescription').attr('data-parsley-required-message', 'Sündmuse kirjeldus on kohustuslik!');

    $('#contactPhoneNumber').attr('data-parsley-required', true);
    $('#contactPhoneNumber').attr('data-parsley-required-message', 'Telefoninumber on kohustuslik!');
    $('#contactPhoneNumber').attr('data-parsley-error-message', 'Telefoninumber on vigane!');

    $('#contactEmail').attr('data-parsley-required', true);
    $('#contactEmail').attr('data-parsley-required-message', 'Email on kohustuslik!');
    $('#contactEmail').attr('data-parsley-error-message', 'Email on vigane!');

    $('#contactEmailCheck').attr('data-parsley-required', true);
    $('#contactEmailCheck').attr('data-parsley-required-message', 'Email on kohustuslik!');
    $('#contactEmailCheck').attr('data-parsley-error-message', 'Email on vigane!');

}

function addDateTimeValidators()
{
    window.Parsley
        .addValidator('datetimepicker', {
            requirementType: 'string',
            validateString: function (value, requirement)
            {
                var eventDateTime = moment(value, 'DD.MM.YYYY HH:mm').toDate();
                var currentDateTime = new Date();

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
                var eventDateTime = moment(value, 'DD.MM.YYYY').toDate();
                var currentDateTime = new Date();
                return eventDateTime < currentDateTime;
            },
            messages: {
                en: 'Sünniaeg ei saa olla tulevikus!'
            }
        });

    $('#firstdatetimepicker').on('dp.change', function ()
    {
        $('#eventDateTime').parsley().validate();
    });
    $('#birthdatetimepicker').on('dp.change', function ()
    {
        $('#submitterTimeOfBirth').parsley().validate();
    });

}

function addSubmitterDataValidation()
{

    $('#submitterFirstName').attr('data-parsley-required', true);
    $('#submitterFirstName').attr('data-parsley-required-message', 'Esitaja eesnimi on kohustuslik!');

    $('#submitterLastName').attr('data-parsley-required', true);
    $('#submitterLastName').attr('data-parsley-required-message', 'Esitaja perekonnanimi on kohustuslik!');

    $('#submitterCitizenship').attr('data-parsley-required', true);
    $('#submitterCitizenship').attr('data-parsley-required-message', 'Esitaja kodakondsus on kohustuslik!');

    $('#submitterPIN').attr('data-parsley-required', true);
    $('#submitterPIN').attr('data-parsley-required-message', 'Esitaja isikukood on kohustuslik!');

    $('#submitterTimeOfBirth').attr('data-parsley-required', true);
    $('#submitterTimeOfBirth').attr('data-parsley-required-message', 'Esitaja sünniaeg on kohustuslik!');

}
function removeSubmitterDataValidation()
{

    $('#submitterFirstName').attr('data-parsley-required', false);
    $('#submitterFirstName').attr('data-parsley-required-message', 'Esitaja eesnimi on kohustuslik!');

    $('#submitterLastName').attr('data-parsley-required', false);
    $('#submitterLastName').attr('data-parsley-required-message', 'Esitaja perekonnanimi on kohustuslik!');

    $('#submitterCitizenship').attr('data-parsley-required', false);
    $('#submitterCitizenship').attr('data-parsley-required-message', 'Esitaja kodakondsus on kohustuslik!');

    $('#submitterPIN').attr('data-parsley-required', false);
    $('#submitterPIN').attr('data-parsley-required-message', 'Esitaja isikukood on kohustuslik!');

    $('#submitterTimeOfBirth').attr('data-parsley-required', false);
    $('#submitterTimeOfBirth').attr('data-parsley-required-message', 'Esitaja sünniaeg on kohustuslik!');

}

function submitForm()
{
    var valid = null;
    var formParsley = $('#mainForm').parsley();

    while (valid === null) {
        valid = formParsley.validate();
    }
    if (!valid) {
        return;
    } else {
        openDialog();
    }
}

function openDialog() {
    document.getElementById('animated').open();
}

function closeDialog() {
    document.getElementById('animated').close();
}

function initDatepickers(obj) {
    function validateDate(e)
    {
        $(e.target).find('input').parsley().validate();
    };

    obj.find('.datepicker').datetimepicker({
        format: 'DD.MM.YYYY'
    }).on('dp.change', validateDate);
    obj.find('.datetimepicker').datetimepicker({
        format: 'DD.MM.YYYY HH:mm'
    }).on('dp.change', validateDate);
}

var counters = {}

function initEvents()
{
    initDatepickers($(document));

    $('.countries').select2({
        allowClear: true,
        placeholder: "",
        data: ["Eesti Vabariik", "Määratlemata", "Afganistan", "Ahvenamaa", "Albaania", "Alžeeria", "Ameerika Samoa",
        "Ameerika Ühendriigid", "Andorra", "Angola", "Anguilla", "Antarktis", "Antigua ja Barbuda", "Aomen",
        "Araabia Ühendemiraadid", "Argentina", "Armeenia", "Aruba", "Aserbaidžaan", "Austraalia", "Austria", "Bahama",
        "Bahrein", "Bangladesh", "Barbados", "Belau", "Belgia", "Belize", "Benin", "Bermuda", "Bhutan",
        "Boliivia Paljurahvuseline Riik", "Bonaire, Sint Eustatius ja Saba", "Bosnia- ja Hertsegoviina", "Botswana",
        "Bouvet' saar", "Brasiilia", "Briti India ookeani ala", "Briti Neitsisaared", "Brunei Darussalam", "Bulgaaria",
        "Burkina Faso", "Burundi", "Colombia", "Cooki saared", "Costa Rica", "Curaçao", "Curaçao (Holl)", "Djibouti",
        "Dominica", "Dominikaani Vabariik", "Ecuador", "Egiptus", "Ekvatoriaal-Guinea", "El Salvador",
        "Elevandiluurannik", "Eritrea Riik", "Etioopia", "Falklandi (Malviini) saared", "Fidži", "Filipiini Vabariik",
        "Fääri saared", "Gabon", "Gambia", "Ghana", "Gibraltar", "Grenada", "Gruusia", "Gröönimaa", "Guadeloupe",
        "Guam", "Guatemala", "Guernsey", "Guernsey (GBR)", "Guinea", "Guinea-Bissau", "Guyana", "Haiti",
        "Heard ja McDonald", "Hiina", "Hispaania", "Holland", "Hollandi Antillid", "Honduras", "Hongkong", "Horvaatia",
        "Ida-Timori", "Ida-Timori", "Iirimaa", "Iisrael", "India", "Indoneesia", "Iraak", "Iraan", "Island", "Itaalia",
        "Jaapan", "Jamaica", "Jeemen", "Jersey", "JEY", "Jordaania", "Jugoslaavia", "Jõulusaar", "Kaimanisaared (GBR)",
        "Kambodža", "Kamerun", "Kanada", "Kasahstan", "Katar", "Kenya", "Kesk-Aafrika Vabariik", "Kiribati",
        "Komoori Liit", "Kongo", "Kongo DV", "Kookossaared (Keelingi saared)", "Korea RDV", "Korea Vabariik", "Kosovo",
        "Kreeka", "Kuuba", "Kuveit", "Kõrgõzstan", "Küpros", "Laos", "Leedu", "Lesotho", "Libeeria", "Liechtenstein",
        "Liibanon", "Liibüa", "Luksemburg", "Lõuna-Aafrika Vabariik", "Lõuna-Georgia ja Lõuna-Sandwich",
        "Lõuna-Sudaan", "Läti Vabariik", "Lääne-Sahara", "Madagaskar", "Makedoonia", "Malaisia", "Malawi", "Maldiivid",
        "Mali", "Malta", "Mani saar", "Maroko", "Marshalli Saared", "Martinique", "Mauritaania", "Mauritius",
        "Mayotte", "Mehhiko", "Mikroneesia", "Moldova", "Monaco", "Mongoolia", "Montenegro", "Montserrat", "Mosambiik",
        "Myanmar", "Namiibia", "Nauru", "Nepal", "Nicaragua", "Nigeeria", "Niger", "Niue", "Norfolki Saar", "Norra",
        "Omaan", "Paapua Uus-Guinea", "Pakistan", "Palestiina okupeeritud alad", "Panama", "Paraguay", "Peruu",
        "Pitcairn", "Poola", "Portugali", "Prantsuse Guajaana", "Prantsuse Lõunaalad", "Prantsuse Polüneesia",
        "Prantsusmaa", "Puerto Rico", "Põhja-Mariaanid", "Püha Tool (Vatikan)", "Réunion", "Riik teadmata",
        "Roheneemesaared", "Rootsi Kuningriik", "Rumeenia", "Rwanda", "Saalomoni Saared",
        "Saint Helena, Ascension ja Tristan da Cunha (GBR)", "Saint Kitts ja Nevis", "Saint Lucia",
        "Saint Pierre ja Miquelon", "Saint Vincent ja Grenadiinid", "Saint-Barthélemy (FRA)",
        "Saint-Martin (Prantsuse osa) (FRA)", "Saksamaa", "Sambia", "Samoa", "San Marino", "Sao Tomé ja Principe",
        "Saudi Araabia", "Seišellid", "Senegal", "Serbia", "Sierra Leone", "Singapur", "Sint Marteen (Hollandi osa)",
        "Slovakkia", "Sloveenia", "Somaali Vabariik", "Soome", "Sri Lanka", "Sudaan", "Suriname", "Suurbritannia",
        "Svaasimaa", "Svalbard ja Jan Mayen", "Süüria", "Šveits", "Zimbabwe", "Taani", "Tadžikistan", "Tai", "Taiwan",
        "Tansaania", "Togo", "Tokelau", "Tonga", "Trinidad ja Tobago", "Tšaad", "Tšehhi", "Tšiili", "Tuneesia",
        "Turks ja Caicos", "Tuvalu", "Türgi", "Türkmenistan", "Uganda", "Ukraina", "Ungari", "Uruguay",
        "USA Neitsisaared", "Usbekistan", "Uus-Kaledoonia", "Uus-Meremaa", "Valgevene", "Wallis ja Futuna", "Vanuatu",
        "Venemaa Föderatsioon", "Venezuela", "Vietnam", "Ühendriikide hajasaared", "Mujal nimetamata territooriumid"]
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
            person.addClass('fade-color');
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

    function bindAdding(name) {
        counters[name] = 0;
        $("#add-" + name).click(function ()
        {
            var id = name + counters[name];
            counters[name] += 1;
            var data = $("#" + name + "-data")
                .clone()
                .removeClass('hidden')
                .attr('id', id);
            data.find('.remove-entry')
                .click(function (event)
                {
                    console.log(event.target);
                    $(event.target).parent().remove();
                });
            $("#" + name + "s").append(data);
            initDatepickers(data);
            data.find('.datepicker, .datetimepicker').each(function(index, value) {
                var el = $(value),
                    errorsContainter =  "#" + id + " ." + el.data("errors-class");
                console.log(errorsContainter, el.find("input"));
                el.find("input").attr("data-parsley-errors-container", errorsContainter);
            });

            data.addClass("fade-color");
        });
    }

    bindAdding("witness");
    bindAdding("criminal");
    bindAdding("item");
}
