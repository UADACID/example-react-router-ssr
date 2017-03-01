import React, { Component } from 'react';
export default class Home extends Component{

  // mixins: [ReactMeteorData],
  //
  // getMeteorData() {
  //   return {
  //     items: Items.find().fetch()
  //   };
  // },
  //
  // getInitialState: function() {
  //   return {};
  // },
  //
  // _addOne() {
  //   Items.insert({title: `test ${Math.round(Math.random()*100)}`})
  //   console.log('new')
  // },
  //
  // _remove(ev) {
  //   Items.remove(ev.target.id)
  //   console.log('remove '+ev.target.id)
  // },

  render() {
    return <div>
      <h2>Title</h2>
      <p>
      Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting.
      Lorem Ipsum telah menjadi standar contoh teks sejak tahun 1500an,
      saat seorang tukang cetak yang tidak dikenal mengambil sebuah kumpulan teks dan mengacaknya untuk menjadi sebuah buku contoh huruf.
      Ia tidak hanya bertahan selama 5 abad,
      tapi juga telah beralih ke penataan huruf elektronik,
      tanpa ada perubahan apapun.
      Ia mulai dipopulerkan pada tahun 1960 dengan diluncurkannya lembaran-lembaran Letraset yang menggunakan kalimat-kalimat dari Lorem Ipsum,
      dan seiring munculnya perangkat lunak Desktop Publishing seperti Aldus PageMaker juga memiliki versi Lorem Ipsum.
      </p>

    </div>
  }
}
