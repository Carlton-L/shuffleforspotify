module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.fakedomain.tld',
    title: 'Shuffle for Spotify',
    description: 'True randomized shuffle WITHOUT Spotify\'s weighted algorithm.',
    image: 'https://res.cloudinary.com/carlton-dev/image/upload/v1634593368/Shuffle-for-Spotify/ShuffleForSpotify-og-01_rpa89w.jpg',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-BG0K10FJH3', // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: false,
          // Avoids sending pageview hits from custom paths
          exclude: ['/preview/**', '/do-not-track/me/too/'],
        },
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
  pathPrefix: '/shuffleforspotify',
};

// Measurement ID G-BG0K10FJH3
