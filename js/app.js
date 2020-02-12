'use strict';
console.log('hi1');

// $.ajax('./data/page-1.json', {method: 'GET', dataType: 'JSON',}).then(data => {

//   console.log('hi');
//   console.log(data);
//   data.forEach(mon => {
//     new HornMon(mon);
//   });
// });


const monsters = [];

function HornMon(mon){
  // eslint-disable-next-line camelcase
  this.image_url = mon.image_url;
  this.title = mon.title;
  this.description = mon.description;
  this.keyword = mon.keyword;
  this.horns = mon.horns;
  monsters.push(this);
}




$.ajax('../data/page-1.json', {method: 'GET', dataType: 'JSON',})
  .then(data => {
    data.forEach(value => new HornMon(value));
  });


console.log(monsters);

