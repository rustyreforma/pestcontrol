<?php 

add_action( 'init', 'custom_post_types' );
function custom_post_types()
{
    $types = [
        //  [Title, Plural Name, Singular Name, Supports, Icon]
            // Sample below.
            //['event', 'Events', 'Event', ['title', 'editor'],'dashicons-calendar-alt'],
            //['videos', 'Videos', 'Videos', ['title', 'thumbnail'],'dashicons-video-alt3'],
        ];

    // loop all values in the array.
    foreach ($types as $type) {
        register_post_type(
            $type[0], array(
              'labels'      => array('name' => __( $type[1] ), $type[2] => __( $type[0] ) ),
              'public'      => true,
              'has_archive' => true,
              'supports'    => $type[3],
              'menu_icon'   => $type[4],
              'taxonomies' => array('post_tag'),
            )
          );
    }
}

// function product_category() {
//     $taxonomies = [
//         //  [Title, Plural Name, Singular Name, Supports, Icon]
//             // Sample below.
//             //['slug', 'slug for type'],
//             ['product_cat', 'product', 'Product Categories'],
//             ['videos_cat', 'videos', 'Video Categories'],
//             //['category', 'post', 'Categories'],
//         ];
//     foreach ($taxonomies as $cat) {
//         register_taxonomy(
//             $cat[0],
//             $cat[1],
//             array(
//                 'label' => __( $cat[2] ),
//                 'public' => true,
//                 'rewrite' => true,
//                 'hierarchical' => true,
//             )
//         );
//     }
    
// }