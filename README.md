# react-router-hash-scroll
A `React` component for animate scroll to #hash `on page` link.

## Installation

```
$ npm install react-router-hash-scroll --save
```


## Usage

```
import { HashLink } from "react-router-hash-scroll";


export default (props) => (
  <Page>

    <Head />

    <div id="home" />

    <Navbar brand={brand} className="navbar-fixed-top">
      <NavItem><HashLink to="#home" className="nav-link">Home</HashLink></NavItem>
      <NavItem><HashLink to="#sample-code" className="nav-link">Sample</HashLink></NavItem>
      <NavItem><HashLink to="#features" className="nav-link">Features</HashLink></NavItem>
      <NavItem><HashLink to="#signup" className="nav-link">SignUp</HashLink></NavItem>
    </Navbar>

  ....
  <Section id="sample-code">
  ....
  </Section>

  <Section id="features">
  ....
  </Section>

  <Section id="signup">
  ....
  </Section>

</Page>
```

# Custom animation

Animation relay on jQuery CSS [animate](http://api.jquery.com/animate/)

Animate behavior can be customize per each `#hash link`.

Ex:

```
<HashLink to="#aboutus" animate={{ animate: {duration: 'fast', easing: 'easeOutElastic'} }} offset="100" className="nav-link">Home</HashLink>
```

### default animation
```
{animate: {duration: 'slow', easing: 'swing'}}
```

# component `HashLinkHistory`
This component support browser [History](https://github.com/mjackson/history) #hash link navigation.

# LICENSE
MIT
