function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}


ready(function () {

    const propButton =  document.getElementById('properties-button');
    const prop =  document.getElementById('properties');

    propButton.addEventListener('click', () => {   
        prop.scrollIntoView({behavior: "smooth"})
    });
});