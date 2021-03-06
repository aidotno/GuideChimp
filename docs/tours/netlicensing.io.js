var tour = [
    {
        element: '#live-demo a',
        title: 'NetLicensing FREE Demo',
        description: 'Get a closer look at NetLicensing and see how it can help you to monetize your digital products and services.',
        position: 'bottom',
    },
    {
        element: '#getting-started a',
        title: 'As easy as one, two, three!',
        description: 'NetLicensing makes setup and integration fast, safe and very simple. So you can get up and running in a few hours.',
        position: 'bottom',
    },
    {
        element: '#simplify-license-activation',
        title: 'Simplify license activation',
        description: 'NetLicensing allows you to deliver and activate product licenses to your customers 24x7x365, without customer support involvement. With NetLicensing, your licensing back-office can be completely automated.',
        position: 'left',
    },
    {
        element: '#maximize-revenue',
        title: 'Maximize revenue with flexible licensing models',
        description: 'With NetLicensing you have a choice of ready-to-use licensing models or customized licensing models may be created to suit your unique business needs and goals. NetLicensing has an open architecture that allows easy extension with new licensing models.',
        position: 'right',
    },
    {
        element: '#reduce-ecommerce-complexity',
        title: 'Reduce your e-Commerce complexity',
        description: 'NetLicensing integrated shop provides a seamless online purchase experience, aligned with the deployed licensing models.',
        position: 'left',
    },
    {
        element: '#automate-processes',
        title: 'Automate your processes',
        description: 'NetLicensing API gives you a full control over all existing licensing entities, so NetLicensing can be easily integrated into your business processes, ERP, CRM, e-Commerce or your IoT device.',
        position: 'right',
    },
];

// Load plugins before using them
/*
fetch('https://io.labs64.com/GuideChimp/docs/samples/bootstrap-plugins.js')
    .then(response => response.text())
    .then(text => eval(text));
*/

GuideChimp.extend(guideChimpPluginRemoveAttribution);

GuideChimp(tour).start();
