// This is a default configuration
var configDefault = {
    targetCountries: 'EU', // Possible values: 'EU', 'US', 'world'
    gdpr: true,
    ccpa: false,

    consentByScroll: false,
    perPurposeConsent: false,

    banner: {
        acceptButtonDisplay: false, // visibility of the Accept button
        rejectButtonDisplay: false, // visibility of the Reject button
        closeButtonDisplay: true, // visibility of the Close button
        closeButtonRejects: false, // clicking the Close button should accept (`false`) or reject (`true`) the consent
        title: 'Notice', // Text field that will change the displayed title of the banner
    }
};

// This is a working configuration that's changed by UI.
// Requirements: the data should be loaded from server in JSON format.
var config = {};
for (var i in configDefault) {
    config[i] = configDefault[i];
}

//----------------------------------------------------------------------------------------------------------------------
/**
 * Instead of real preview, this method prints the configuration itself.
 * Requirement: have a nicer output than it is now.
 */
function printConfig() {
    $('.preview-json').html(JSON.stringify(config));
}

function checkSections() {
    $('.widget input[name="gdpr"]').attr('checked', config.gdpr);
    $('.widget input[name="ccpa"]').attr('checked', config.ccpa);

    $('.widget input[name="targetCountries"][value="world"]').attr('checked', config.targetCountries == 'world');
    $('.widget input[name="targetCountries"][value="US"]').attr('checked', config.targetCountries == 'US');
    $('.widget input[name="targetCountries"][value="EU"]').attr('checked', config.targetCountries == 'EU');

    $('.widget input[name="consent-by-scroll"]').attr('checked', config.consentByScroll);
    $('.widget input[name="per-purpose-consent"]').attr('checked', config.perPurposeConsent);
}

$('.widget input[name="targetCountries"][value="world"]').click(function() {
    config.targetCountries = 'world';
    printConfig();
    checkSections();
});

$('.widget input[name="targetCountries"][value="US"]').click(function() {
    config.targetCountries = 'US';
    printConfig();
    checkSections();
});

$('.widget input[name="targetCountries"][value="EU"]').click(function() {
    config.targetCountries = 'EU';
    printConfig();
    checkSections();
});

$('.widget input[name="gdpr"]').click(function() {
    config.gdpr = this.checked;
    printConfig();
    checkSections();
});

$('.widget input[name="ccpa"]').click(function() {
    config.ccpa = this.checked;
    checkSections();
    printConfig();
});


$('.widget input[name="consent-by-scroll"]').click(function() {
    config.consentByScroll = this.checked;
    checkSections();
    printConfig();
});

$('.widget input[name="per-purpose-consent"]').click(function() {
    config.perPurposeConsent = this.checked;
    checkSections();
    printConfig();
});
//----------------------------------------------------------------------------------------------------------------------

// Save data on server
$('.save-data').submit(function(event) {
    var data = new FormData();

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/', true);
    xhr.onload = function () {
        console.log(this.responseText);
    };
    xhr.send(data);

    event.preventDefault();
});
