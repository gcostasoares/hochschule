<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '6qD4IS$u&f/@iMyOIk4*G!*b(>#HM*{$C{#D/8,E@]&KQW6EgqR6f+5 nh(><dM@' );
define( 'SECURE_AUTH_KEY',   'Y>w77g=8>V9U&QMr?nU[SubMU#9_M0,J|n;dr56WdCi3piy?daCeceMCOh.!y?L>' );
define( 'LOGGED_IN_KEY',     'p)C%7F_!5MBXyNjk_MGl<s!*?V@)(>[$G-r|%TlbJ-nYv>b#qa~4Qe($l!4.A`==' );
define( 'NONCE_KEY',         '1&L8H{FWL%qV.lpqf|43g.?d%M0ztIVYTqa[N2RjQQB5![Wxz-2Q0,!oX8JkZW+O' );
define( 'AUTH_SALT',         '=UP|WxK;$>:v*vK{E*&5W?h`l]AEpZVt5;].u/AYP.ZR?A(L4+0/4QEzV@#sA}i-' );
define( 'SECURE_AUTH_SALT',  'hc:PIYS#oHtlnA:MipdQ0@}*`tYtK~!%6V*xZfk6V-!GNK.d763^XR](N>=|k&P}' );
define( 'LOGGED_IN_SALT',    '2c.MZWXEE(fm&O8RqJkUC}M8;|5(h>I @t6gJv.wwO9A-al?[u*)nm-r~hvv.wO$' );
define( 'NONCE_SALT',        'Kf=bS@u2lJk$ZL9V[LW _S([p!J,0P7-.5`UMS{:y-|>*ts1U1lhi6;3U_!NLDWK' );
define( 'WP_CACHE_KEY_SALT', ']>u$@,t24l79<:PXl~ofWQ}Gm%J^xy]qeyEduj1`9dpddhd<AT8R3zsuj[KPqQSp' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
