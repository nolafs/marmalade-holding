import $ from 'jquery'
import ScrollMagic from "scrollmagic/scrollmagic/minified/ScrollMagic.min";
import animations from "../util/animations";
import Rellax from "rellax/rellax.min";

export default {
    init() {

    },
    finalize() {
        // JavaScript to be fired on all pages, after page specific JS is fire
        const rellax = new Rellax('.rellax');
    },
};
