// This file will be use on the client and on the server
import React, { Component } from 'react';
import { IndexRoute, Route, Link } from 'react-router';
import { ReactRouterSSR } from 'meteor/reactrouter:react-router-ssr';
import App from './both/scenes/app';
import Home from './both/scenes/home';
import Another from './both/scenes/another';
import ReactHelmet from 'react-helmet';
import ReactCookie from 'react-cookie';
/// Collections
Items = new Mongo.Collection('items');

// const {Link} = ReactRouter;

/// Components
// App = React.createClass({
// class App extends Component {
//   // getInitialState() {
//   //   ItemsSub = Meteor.subscribe("items", () => {
//   //     this.setState({isReady: true});
//   //   });
//   //
//   //   return {
//   //     isReady: false,
//   //   };
//   // }
//
//   render() {
//     return (
//       <div>
//         <header>ini header</header>
//
//         {this.props.children}
//
//         <footer>ini Footer</footer>
//       </div>
//     );
//   }
// // });
// }
//
// class Another extends Component {
//   constructor() {
//     super();
//   }
//
//   render() {
//     return <div>
//     Title
//     </div>
//   }
// }
//
// class Home extends Component{
//
//   // mixins: [ReactMeteorData],
//   //
//   // getMeteorData() {
//   //   return {
//   //     items: Items.find().fetch()
//   //   };
//   // },
//   //
//   // getInitialState: function() {
//   //   return {};
//   // },
//   //
//   // _addOne() {
//   //   Items.insert({title: `test ${Math.round(Math.random()*100)}`})
//   //   console.log('new')
//   // },
//   //
//   // _remove(ev) {
//   //   Items.remove(ev.target.id)
//   //   console.log('remove '+ev.target.id)
//   // },
//
//   render() {
//     return <div>
//       <h2>Title</h2>
//       <p>
//       Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting.
//       Lorem Ipsum telah menjadi standar contoh teks sejak tahun 1500an,
//       saat seorang tukang cetak yang tidak dikenal mengambil sebuah kumpulan teks dan mengacaknya untuk menjadi sebuah buku contoh huruf.
//       Ia tidak hanya bertahan selama 5 abad,
//       tapi juga telah beralih ke penataan huruf elektronik,
//       tanpa ada perubahan apapun.
//       Ia mulai dipopulerkan pada tahun 1960 dengan diluncurkannya lembaran-lembaran Letraset yang menggunakan kalimat-kalimat dari Lorem Ipsum,
//       dan seiring munculnya perangkat lunak Desktop Publishing seperti Aldus PageMaker juga memiliki versi Lorem Ipsum.
//       </p>
//
//     </div>
//   }
// }

/// Isomorphic Router

// const {Route, Router} = ReactRouter;

//import ga from 'ga-react-router';

Meteor.startup( function() {
  AppRoutes = (
    // <Router  >
      <Route component={App}>
        <Route path="/" component={Home} />
        <Route path="another" component={Another} />
      </Route>
    // </Router>
  );

  ReactRouterSSR.Run(AppRoutes, {
  props: {
    onUpdate() {
      // Notify the page has been changed to Google Analytics
      // ga('send', 'pageview');
    },
  }
}, {
  htmlHook(html) {
    const head = ReactHelmet.rewind();
    return html.replace('<head>', '<head>' + head.title + head.base + head.meta + head.link + head.script);
  },
  preRender: function(req, res) {
    ReactCookie.plugToRequest(req, res);
  }
});
});
