module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.fakedomain.tld',
    title: 'Shuffle for Spotify',
    description: 'True randomized shuffle WITHOUT Spotify\'s weighted algorithm.',
    image: 'https://res.cloudinary.com/carlton-dev/image/upload/v1634593368/Shuffle-for-Spotify/ShuffleForSpotify-og-01_rpa89w.jpg'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
  pathPrefix: "/shuffleforspotify",
}