# DEPRECATED - This package is deprecated in favor of: [react-scrollchor](https://github.com/bySabi/react-scrollchor)

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

Animate behavior can be customize per each `#hash link`.

Ex:

```
<HashLink to="#aboutus" animate={{ offset: 20, duration: 600 }} className="nav-link">Home</HashLink>
```

### default animation
```
{ offset: 0, duration: 400, easing: easeOutQuad }
```
This setting is equivalent to default jQuery.animate `easing: swing`

## Easing functions links

* [jQuery easings](http://api.jqueryui.com/easings/)
* [Robert Penner's Easing Functions](http://robertpenner.com/easing/)
* [Javascript source code](https://github.com/danro/jquery-easing/blob/master/jquery.easing.js)

# component `HashLinkHistory`
This component support browser [History](https://github.com/mjackson/history) #hash link navigation.

# LICENSE
MIT
