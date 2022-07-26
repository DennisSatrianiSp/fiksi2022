$(document).ready(function () {
  $('#ind').click(function () {
    $('#bahasa').text(
      'ini adalah halaman web bisnis atau halaman arahan milik klub interaktif smanda. Bisnis ini bergerak di bidang web development dan juga konsultan IT. Selain pengembangan website, kami juga menyediakan layanan berbasis desain grafis seperti poster dan desain karakter'
    );
    $('#bahasa2').text(
      'kami ekstrakurikuler dari smanda yang bergerak di bidang teknologi, namun selain sebagai sekolah, kami juga menjalankan bisnis seperti di bidang kami. Kami berdiri sejak tahun 2002, namun seiring dengan perkembangannya kami memiliki banyak divisi dan kemajuan, salah satunya adalah pengembangan website, kami ingin semua layanan di sekolah kami berbasis online. Bisnis kami bergerak di bidang pengembangan aplikasi dan desain grafis'
    );
    $('#bahasa3').text('Kami memiliki jasa pembuatan website, dalam hal ini kami membantu bisnis yang sedang berkembang untuk dapat memiliki website pribadi dengan harga yang murah');
    $('#bahasa4').text('Kami ingin membantu Anda menjalankan acara Anda dengan lancar. kami juga memiliki tim yang dapat memantau acara secara fulltime dan layanan tanya jawab yang fast respon');
    $('#bahasa5').text('bagi anda yang sibuk dan ingin mendesain, jangan khawatir kami hadir untuk menyelesaikannya, kami akan mendesain untuk anda, apapun desain anda akan kami penuhi');
    $('#bahasa6').text('Terkait pertanyaan tentang produk,layanan dan juga hal lainnya tentang kami silahkan tanyakan di forum kami, kami akan menjawab anda segera atau anda bisa hubungi kami via whatsapp');
    $('#bahasa7').text('Apapun Bisa Kamu Tanyakan Kepada Kami, Kami akan menjawab segera');
  });

  $('#ing').click(function () {
    $('#bahasa').text(
      'this is the business web page or landing page belonging to the smanda interactive club. This business is engaged in web development and also IT consultant. In addition to website development, we also provide graphic design-based services such as posters and character designs'
    );
    $('#bahasa2').text(
      'we are extracurricular from smanda which is engaged in technology, but apart from being a school, we also run a business like in our field. We were founded in 2002, but along with its development we have many divisions and progress, one of which is website development, we want all services at our school to be online based. Our business is engaged in app development and graphic design'
    );
    $('#bahasa3').text('We have website development services, in this case we help growing businesses to be able to have a personal website at a low price');
    $('#bahasa4').text('We want to help you run your event smoothly. we also have a team that can monitor the event full time and a fast response question and answer service');
    $('#bahasa5').text('for those of you who are busy and want to design, dont worry we are here to solve that, we will design for you, whatever your design we will fulfill');
    $('#bahasa6').text('Regarding questions about products, services and also other things about us, please ask in our forum, we will answer you immediately or you can contact us via whatsapp');
    $('#bahasa7').text('Anything You Can Ask Us, We Will Answer Immediately');
  });
  $('.nav-link').on('click', function () {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
  });
});
