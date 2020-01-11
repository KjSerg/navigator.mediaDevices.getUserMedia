export default class Photo {
    constructor() {
        this.player = document.querySelector('.video');
        this.$button = $('.button');
        this.out = document.querySelector('#out');
        this.context = document.querySelector('#out').getContext('2d');
        this.init();
    }

    setPictureInPlayer() {
        const t = this;
        navigator.mediaDevices.getUserMedia({ video: true })
            .then((picture) => {
                t.player.srcObject = picture;
            }).catch(er=>{
                alert(er);
            });
    }

    savePhoto() {
        const t = this;
        t.$button.on('click', function (e) {
            e.preventDefault();
            const w = t.player.offsetWidth;
            const h = t.player.offsetHeight;

            t.out.width = w;
            t.out.height = h;

            t.context.drawImage(t.player, 0, 0, w, h);

            const link = document.createElement('a');

            link.setAttribute('download', 'photo ' + new Date());

            t.out.toBlob((blob)=>{
                link.setAttribute('href', URL.createObjectURL(blob));
                link.click();
            });

        })
    }

    init() {
        const t = this;

        t.setPictureInPlayer();
        t.savePhoto();
    }
}