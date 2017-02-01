/**
 * Created by Vlad on 30.12.2016.
 */
(function(window) {
    document.addEventListener("DOMContentLoaded", () => {
        initializeLightening();
    });

    function initializeLightening() {
        // Grab the drop down list item element
        let assemblies = document.querySelectorAll(".assembly");
        let light = document.getElementById("light");

        GraphicObjectsProcessor.initialize(assemblies, light);
    }
})(window);