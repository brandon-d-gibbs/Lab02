'use strict';

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

HornMon.prototype.render = function() {
  let template = $('#photo-template').html();

  let $newSection = $('<section></section>');
  $newSection.html(template);
  $newSection.find('img').attr('src', this.image_url);
  $newSection.find('h2').text(this.title);
  $newSection.find('p').text(this.description);
  // $newSection.attr('keyword', this.keyword);
  // $newSection.attr('horns', this.horns);

  $('main').append($newSection);
};

$.ajax('../data/page-1.json', {method: 'GET', dataType: 'JSON',})
  .then(data => {data.forEach(value => {
    new HornMon(value).render();
    console.log('hi');
  });
  });

console.log(monsters);

$(function() {
  console.log('ready');
});

