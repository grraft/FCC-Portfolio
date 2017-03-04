import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

/**
 * init variables - move to top of js file in codepen
 */
const user = {
  email: 'kunal.v.mandalia@gmail.com',
  template: 'https://codepen.io/kunalmandalia/pen/oZgjZy?editors=0110',
  first_name: 'Kunal',
  last_name: 'Mandalia',
  title: 'Founder at grraft.com',
  img_url: 'https://media.licdn.com/mpr/mprx/0_1Jf4txArKviNGymscL-Y-L2rrEfAPpaJcH10QTAnts_lPrDVtL1R_Ql1ivmqGKDxNr1R-LrnK7fllDA0NtYB5kKKF7fAlDpMNtYVrxurtvY4lsSrN9mRssbG5r',
  description: `Learning the craft of full stack development through the web and books alone was hard. I made grraft.com to make it easy for people like me to find peer mentors. So if you're based in London and finding it tough to getting rolling with React and Node, I'm happy to help.`,
  social_links: [
    {
      name: 'LinkedIn',
      icon: 'fa fa-linkedin',
      url: 'https://www.linkedin.com/in/kunal-mandalia-developer/'
    },
    {
      name: 'Github / Personal ',
      icon: 'fa fa-github',
      url: 'https://github.com/kunal-mandalia/'
    },
    {
      name: 'Github / Grraft',
      icon: 'fa fa-github',
      url: 'https://github.com/grraft/'
    },
    {
      name: 'Stack Overflow',
      icon: 'fa fa-code',
      url: 'http://stackoverflow.com/users/2438257/kunal',
    },
    {
      name: 'CodeWars',
      icon: 'fa fa-code',
      url: 'https://www.codewars.com/users/kunal-mandalia',
    },
    {
      name: 'Twitter',
      icon: 'fa fa-twitter',
      url: 'https://twitter.com/MandaliaKunal'
    },
  ],
  tags: ['React.js', 'Redux', 'MongoDB', 'Node.js', 'Express', 'Grraft.com'],
}

const portfolio = [
  {
    title: 'LevelUp app',
    link: 'https://github.com/kunal-mandalia/levelup',
    img_url: 'https://s3.eu-west-2.amazonaws.com/img-repo/levelup-mobile.png',
    description: 'Productivity tracker built to keep ontop of goals and actions driving their success',
    tags: ['AngularJs', 'Node', 'MongoDB', 'Express', 'Heroku', 'Google Integration']
  }, 
  {
    title: 'Grraft.com',
    link: 'https://www.grraft.com',
    img_url: 'https://s3.eu-west-2.amazonaws.com/img-repo/grraft-mentors.png',
    description: `The platform powering professional peer mentorship (current startup)`,
    tags: ['React', 'Redux', 'Node.js', 'Mongoose', 'MongoDB', 'ES6', 'Stripe Payments', 'LinkedIn Integration', 'Webpack', 'Mocha']
  }, 
  {
    title: 'Sudoku Solver',
    link: 'https://kunal-mandalia.github.io/SudokuSolver/',
    img_url: 'https://s3.eu-west-2.amazonaws.com/img-repo/sudokusolver.png',
    description: 'Use the power of bits to solve Sudoku puzzles. Can’t solve all problems though',
    tags: ['TDD', 'JavaScript', 'Algorithms', 'CSS']
  }, 
  {
    title: 'Profile ID',
    link: 'http://www.brettmartin.com/en-gb/daylight-systems/daylight-systems-profile-finder.aspx',
    img_url: 'https://s3.eu-west-2.amazonaws.com/img-repo/profilefinder.png',
    description: 'JavaScript library powering SVG roof profile drawings for the construction industry',
    tags: ['SVG', 'Math', 'JavaScript', 'HTML5', 'Bootstrap', 'C#', 'Asp.net']
  },
];

const credits = [
  {
    name: 'Lionel Gustave (image)',
    url: 'http://lionelgustave.com',
  },
  {
    name: 'Yoann Boyer (image)',
    url: 'https://unsplash.com/@yoannboyer'
  },
  {
    name: 'Galymzhan Abdugalimov (image)',
    url: 'https://unsplash.com/@naffiq',
  },
  {
    name: 'FreeCodeCamp, for inspiring me',
    url: 'https://www.freecodecamp.com/grraft'
  }
];

ReactDOM.render(
  <App user={user} portfolio={portfolio} credits={credits} />,
  document.getElementById('root')
);
