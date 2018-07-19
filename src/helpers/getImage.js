const images = [
  "https://fortunedotcom.files.wordpress.com/2018/04/wework.jpg",
  "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fs3-ap-northeast-1.amazonaws.com%2Fpsh-ex-ftnikkei-3937bb4%2Fimages%2F4%2F1%2F3%2F7%2F13437314-3-eng-GB%2F20180320-Wework-horizontal.jpg?source=nar-cms",
  "https://s3.amazonaws.com/architecture-org/files/modules/wework-national-building-006.jpg",
  "https://s3.amazonaws.com/btoimage/prism-thumbnails/articles/20180314-we-work-expansion.jpg-resize_then_crop-_frame_bg_color_FFF-h_1365-gravity_center-q_70-preserve_ratio_true-w_2048_.webp",
  "https://cms.qz.com/wp-content/uploads/2017/05/wework-space.jpg?quality=80&strip=all&w=3960",
  "https://thehustle.co/wp-content/uploads/2016/08/1-8-1.jpg",
  "https://images.adsttc.com/media/images/591a/4cc5/e58e/ce3e/3e00/0272/large_jpg/2_WeWork.jpg?1494895802",
  "https://sg.tepcdn.com/public/usr/1hrsv2/14970d-BLD-WEWORK-AT-BEACH-CENTRE-DEC2017-01-SIC.jpg",
  "https://assets.entrepreneur.com/images/misc/1506124021_westlake-tower-coworking-28.jpg",
  "http://brickell.com/wp-content/uploads/2016/10/Brickell-5th-Floor-Lounge-WeWork.jpg",
  "https://builtworlds.com/wp-content/uploads/2017/06/devonshire-square-coworking-16.jpg",
  "https://assets.entrepreneur.com/content/3x2/2000/20171106213135-Common-Space-WeWork-Promenade-LA-USA-Canada-crop.jpeg",
  "https://cms.qz.com/wp-content/uploads/2018/04/wework-e1524753551171.jpg?quality=80&strip=all",
  "https://i1.wp.com/www.thebubble.com/wp-content/uploads/2018/03/wework-mexico-coworking-space.jpg",
  "https://cms.qz.com/wp-content/uploads/2017/04/wework-chicago-press-kit-e1492635458578.jpg?quality=80&strip=all&w=3960",
  "https://images.ctfassets.net/e4m0suk6oqie/1XwFmzPXzCaWOMaW26SISU/b0e4581268319688dcfafd43df7cd3d1/20160128_HQ_Chelsea_NYC-12.jpg",
  "https://weare.guru/wp-content/uploads/2017/12/WeWork-Offices.jpg",
  "https://3xrowsd5xzn1nczoz32qcdku-wpengine.netdna-ssl.com/wp-content/uploads/2015/11/20150714-Moorgate-Interiors-Ground-Floor-5.jpg",
  "https://12bmfyt9rtm1n3szp3nm39kw-wpengine.netdna-ssl.com/wp-content/uploads/2017/02/We-Work-Southbank.jpg",
  "https://www.frameweb.com/media/files/285024",
  "https://blog.airtable.com/content/images/2017/09/c-29.jpeg",
  "https://cdn-images-1.medium.com/max/2000/1*gZJCkg8TD8PkEVXCvfu7Gg.jpeg",
  "http://www.itprotoday.com/sites/itprotoday.com/files/wework-hero_0.jpg",
  "https://images.axios.com/zmU-3PsCguLQNVVxjdBlhsdNi-k=/1920x1080/smart/2017/12/15/1513305113148.jpg",
  "https://creator-assets.wework.com/wp-content/uploads/2014/08/20140617-Park-South-39.jpg",
  "https://wi-images.condecdn.net/image/JaEKVzJKnbO/crop/2040/f/07-18-ftwework_06.jpg"
];

export default () => {
  const index = Math.floor(Math.random() * images.length);
  return images[index];
};