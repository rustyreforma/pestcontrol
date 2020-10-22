<?php
/**
 * The template for displaying the home/index page.
 * This template will also be called in any case where the Wordpress engine 
 * doesn't know which template to use (e.g. 404 error)
 */

get_header(); // This fxn gets the header.php file and renders it ?>

<?php include 'components/banner.php'; ?>
<?php include 'components/how-it-works.php'; ?>
<?php include 'components/why-work-with-us.php'; ?>
<?php include 'components/cta.php'; ?>
<?php include 'components/carousel.php'; ?>
<?php include 'components/faq.php'; ?>
<?php include 'components/form.php'; ?>

<?php get_footer(); // This fxn gets the footer.php file and renders it ?>