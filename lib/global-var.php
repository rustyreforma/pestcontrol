<?php 

    if( function_exists('acf_add_options_page') ) {
        acf_add_options_page('Theme Options');
    }

    // Google Map KEY
    function my_acf_google_map_api( $api ){
        
        $api['key'] = '';
        
        return $api;
        
    }
    add_filter('acf/fields/google_map/api', 'my_acf_google_map_api');