module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.fakedomain.tld',
    title: 'Shuffle for Spotify',
    description: 'True randomized shuffle WITHOUT Spotify\'s weighted algorithm.',
    image: 'https://res.cloudinary.com/carlton-dev/image/upload/v1634504955/Shuffle-for-Spotify/og-image-01_tg9klo.png'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ]
}