# HTML + CSS

  What are some ways your using Responsive Design?

    In CSS we are changing flex direction from row to column at different breakpoints.
    We have breakpoints for mobile, tablet, and desktop.
    We adjust the sizing of our text although our text is based off of ems and is standard at 1em.
    We are using multiple icon sizes for bookmarking on iOS.
    We are using percentages in a lot of our container elements which translates well when adjusting the screen.

  Is your project using CSS Transitions?

    Yes, both on the Loading.. component and on the Accordion.

  Are there any vendor prefixes being used?

    No. We have not used them yet. but have looked at using the blur property in css which in that case we would start to use prefixes.

  Are there any fonts being imported?

    Comfortaa - Local import being used on the logo. Imported in CSS.
    Gotham - Local import being used on the some header tags. Imported in CSS.

    Source Sans Pro - H2 and lower. Google font import in index.html.

  Font size unit of measurements.

    Only using ems.

  What is the importance of the HTML `<meta>` tag?

    This gives the browser more information about how to render the document it is reading. The viewport meta tag tells it to look at the device width and if it is on a mobile device to scale appropriately.

  How are you defining media queries? With min-width or max-width?

    We are using both min-width and max-width. We started writing our css with max-width as we are designing it mobile first.

    min-width requires that the devices browser size must be at least the specified width in the media query to display the css defined in that media query.

    
