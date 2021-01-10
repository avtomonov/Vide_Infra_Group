import $ from 'jquery';
import { initPlugins, destroyPlugins } from './lib/plugins';
import './components/buttonFade';
import './components/formValidate';
import './components/lazyLoad';
import './components/showBlock';




$(() => {
    initPlugins();
    // destroyPlugins();
    // initPlugins();
    // destroyPlugins();
    // initPlugins();
});

