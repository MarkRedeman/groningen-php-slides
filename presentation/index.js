// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Layout,
  Fill,
  Fit
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  logo: require("../assets/groningen-php-logo.png"),
};

preloader(images);

const lightGreen = "#619b45";
const darkGreen = "#4c7520";
const blue = "#107caa";
const red = "#c8272a";

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
    /* secondary: red,*/
  tertiary: red, //"#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const meetup = {
    name: "GroningenPHP",
    date: "02-03-2017",
    talk: {
        title: "Practical IoT for webdevelopers",
        speaker: "Elze Kool"
    },
    talks: [
        {
            title: "Let's Encrypt",
            speaker: "Yannick Forget"
        },
        {
            title: "Grav CMS",
            speaker: "Steffen Witvliet"
        },
        {
            title: "Improving code quality with static analysis tools",
            speaker: "Mark Redeman"
        }
    ],
    location: "Launch Café Groningen",
    // List upcoming meetups nearby Groningen,
    // meetups with no talks have not yet listed the talk on meetup
    nearby: [
        {
            name: "Php.frl",
            date: "21-03-2017",
            talks: [],
            location: "Friesland"
        },
        {
            name: "HardenbergPHP",
            date: "18-03-2017",
            talks: [],
            location: "Hardenberg"
        },
        {
            name: "ZwollePHP",
            date: "30-03-2017",
            talks: [
            ],
            location: "Zwolle"
        },
        {
            name: "EmmenPHP",
            date: "01-03-2017",
            talks: [
                {
                    title: "Scrum, customer interests first ",
                    speaker: "Jeroen Boersma",
                    language: "dutch"
                }
            ] ,
            location: "Prima Professionals - Emmen"
        },
        {
            name: "GroningenPHP",
            date: "02-03-1017",
            talks: [
                {
                    title: "Enough suffering, fix your architecture!",
                    speaker: "Luís Cobucci",
                    language: "english"
                }
            ],
            location: "Launch Café - Groningen"
        }
    ]
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={250} theme={theme}>
        <Slide bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="tertiary">
              GroningenPHP
          </Heading>
          <Image src={images.logo.replace("/", "")} height="200px"/>
          <Heading size={3} lineHeight={1} textColor="quartenary">
              {meetup.date}
          </Heading>
          <List>
              <ListItem><strong>19:30 - 20:00</strong> : Welcome drinks</ListItem>
              <ListItem><strong>20:00 - 21:00</strong> : Talks & Questions</ListItem>
              <ListItem><strong>21:00 - ??</strong> : Social & drinks</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={2} fit lineHeight={1} textColor="tertiary">
              Meetups next month
          </Heading>
          <List>
            {meetup.nearby.map((meetup) => {
                 return <ListItem margin="0.5em 0">
                     <span>{meetup.date}</span> - {meetup.name}
                     <List margin="0 1em">
                         {meetup.talks.map((talk) => {
                              return <ListItem textSize=".5em">
                                  {talk.title} - by {talk.speaker}
                              </ListItem>
                          })}
                     </List>
                 </ListItem>
             })}
          </List>
        </Slide>
        {meetup.talks.map((talk) => {
             return <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
                 <BlockQuote>
                     <Quote>{talk.title}</Quote>
                     <Cite textColor="#D7EAC9">{talk.speaker}</Cite>
                 </BlockQuote>
             </Slide>
         })}
      </Deck>
    );
  }
}
