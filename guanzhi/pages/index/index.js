//index.js
import {books} from '../../data/data.js';
import {randInt} from '../../utils/util.js';

//获取应用实例
const app = getApp()

function pickSection(){
  let book_idx = randInt(0, books.length);
  let book = books[book_idx];
  let chap_idx = randInt(0, book.chapters.length);
  let chap = book.chapters[chap_idx];
  let content = chap.content[randInt(0, chap.content.length)];

  return {
    title: book.title,
    chapter: chap.name,
    content: content,
    book_idx: book_idx,
    chap_idx: chap_idx
  };
}

Page({
  data: {
    title: '',
    desc: '',
    body: '',

    book_idx: -1,
    chap_idx: -1
  },

  onLoad: function (options) {
    let rst = pickSection();
    this.setData({
      title: rst.title,
      desc: rst.chapter,
      body: rst.content,

      book_idx: rst.book_idx,
      chap_idx: rst.chap_idx
    });
  },

  refresh: function(options){
    let rst = pickSection();
    this.setData({
      title: rst.title,
      desc: rst.chapter,
      body: rst.content,

      book_idx: rst.book_idx,
      chap_idx: rst.chap_idx
    });
  },

  more: function(options){
    let content = books[this.data.book_idx].chapters[this.data.chap_idx].content;
    let txt = content.join('\n\n');
    this.setData({
      body: txt
    })
  }

})
