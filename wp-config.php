<?php
define('WP_AUTO_UPDATE_CORE', 'minor');// Ce paramètre est requis pour garantir le bon traitement des mises à jour WordPress dans WordPress Toolkit. Supprimez cette ligne si ce site Web WordPress n'est plus géré par WordPress Toolkit.
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp_4jig4' );

/** MySQL database username */
define( 'DB_USER', 'wp_snghk' );

/** MySQL database password */
define( 'DB_PASSWORD', 'XRjbz0F!25' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost:3306' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', 'M&w%[09J(]8&h48a/)fj;tt8WN(p5y[[r&Sa~U9j4v~48AW[(A6BG)&8q8oT)78W');
define('SECURE_AUTH_KEY', '1u*/GtQTO858%5bllH*Z%13Vp4:Z&2-OM):39)&xR@Ov9EI8B28Rc@5q2%-x9q6|');
define('LOGGED_IN_KEY', '4N/9N7x3!wr7N9K865yQKf@GN23eB2&+3VWo(nfxDn2!6#(4s@%baR2AnO2PF1g3');
define('NONCE_KEY', 'roS4h8CgQ3Ue9i@ExJ]73neP)p7FF3/9l|FZS7V2UBl&3p6J_1Nb58hlaVu:vO@i');
define('AUTH_SALT', '%Fs+8Fb_4*j~u[88nQP/9FB8a9i;rZ+hV@1b_zL2+OjjEXQA933KOX@:j00&)TxC');
define('SECURE_AUTH_SALT', ']MDkZ0jEnFw@M9dL13@Ifx|c)9%[r[qS&3w)fm!3y+vd&ZER@P691dH77v47%m2v');
define('LOGGED_IN_SALT', 'dI[~di:96~Q1|nzLd%hJ80#h6p|7w5G+NE4W(eO-6*eJAX4~w6GrawP~04xb#9yL');
define('NONCE_SALT', 'sTD+)gHY+rm99EGKs*9H0Hm35OJ2w4)|8M]:l[8cl)Q-G~IfT&0v0#27|~z)&aKY');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'dRN9I_';


define('WP_ALLOW_MULTISITE', true);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) )
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
