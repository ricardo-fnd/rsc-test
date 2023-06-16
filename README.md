# Reproduce

- yarn install
- cd apps/web
- yarn run build && yarn run start
- go to `http://localhost:3000/lang/en`

# Test

Everytime you make a change, please run `yarn run build && yarn run start`

In the network tab you can see `page-xxx` being downloaded with 208kbs. (SVG + client side component <IntroButtons />)

If you comment the Header SVG in Intro.jsx, the page size is reduced to 8.6kbs (client side component only)

If you comment JUST IntroButtons (client side component) the page-xxx is not downloaded, even with the SVG inside it







