<?php

function change_text($new_text){
    return "The tech sphere: " . $new_text;
}

add_filter('change_home_title', 'change_text', 999, 1);

?>