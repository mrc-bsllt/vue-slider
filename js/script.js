const sliderBlock = new Vue (
  {
    el: ".wrapper",
    data: {
      indexImage: 0,
      images: ["img/img00.jpg", "img/img01.jpg", "img/img02.jpg", "img/img03.jpg", "img/img04.jpg", "img/img05.jpg"]
    },
    created: function() {
      setInterval(this.nextImage, 2000);
    },
    methods: {
      prevImage: function() {
        this.indexImage--;
        if (this.indexImage == -1) {
          this.indexImage = (this.images.length -1);
        }
      },
      nextImage: function() {
        this.indexImage++;
        if (this.indexImage == this.images.length) {
          this.indexImage = 0;
        }
      }
    }
  }
);
