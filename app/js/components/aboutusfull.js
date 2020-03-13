app.component('aboutUsFull', {
    // This is the HTML
    template:
        `<div class="c-about-us-full" ng-init="initAboutUsFullController()">
            <div class="custom-container">
                <div class="c-about-us-full-container">
                    <img src="/assets/images/about-us-full-image.png" alt="About Us Image">
                    <div class="c-about-us-full-description-placeholder">
                        <p><strong>PT. NASI SAMBEL SIREM CAKBOYO</strong> merupakan kependekan bahasa Jawa, "kalih"
                            yang artinya dua dan "ayo" yang berarti ajakan. Mengajak pelanggan untuk tidak hanya
                            membeli satu namun dua. Tidak hanya datang sekali namun dua kali.........Dan
                            kami bersyukur banyak pelanggan tidak puas jika hanya datang dua kali. Ada yang sudah
                            datang belasan kali... puluhan kali... bahkan ada yg ratusan kali. Hah ? Ciyus ?? Yup...
                            Bahkan kami yakin diantara mereka itu adalah
                            Anda sendiri... iya kan ?</p>
                        <p> Bagi yang penasaran silakan buktikan. Kami memiliki banyak koleksi masakan bebek dan
                            ayam yang nikmat tiada bandingnya. Disajikan dengan nasi panas beralas daun pisang
                            lengkap dengan pilihan sambal merah, sambal cabe ijo, sambal
                            rica, sambal sori, sambal cetar, dll. Masing-masing sambal sangat unik.....bahkan
                            beberapa sangat egois ingin paling dominan menunjukkan “keperkasaan” pedasnya. Saran
                            kami berhati-hatilah dengan mereka.</p>
                        <p> Sesuai misi kami yaitu "Menjadi Berkat bagi Banyak Orang", kami menyadari bahwa bebek
                            uenak ini seharusnya bukan untuk kami nikmati sendiri. Seluruh rakyat Indonesia harus
                            turut menikmati kelezatannya tanpa memandang kelas
                            ekonomi bahkan suku, ras, dan agama. Untuk itulah kami memilih memposisikan Bebek Kaleyo
                            sebagai Rumah Makan yang terjangkau dan nyaman untuk semua kalangan. </p>
                        <p>Akhir kata, kami mohon maaf jika harga di tempat kami terlalu murah. Tidak ada maksud
                            apa-apa selain bersyukur bisa berbagi kegemaran makan enak (dan murah) dengan Anda
                            semua... Terima kasih.</p>
                    </div>
                </div>
            </div>
        </div>`,
    // This is for props
    bindings: {

    },
    // This is for the controller
    controller: aboutUsFullController
})
//Please try to write in ES 9 version if possible
//Declaring main module functions in 'function' is easier to read than lambda expressions
//Try not to use too much nested loop or nested if/else statement, chances are the code logic have issues
//Try to revise the code logic. For else if statement, use switch case statement instead
//Endpoint is at header script
aboutUsFullController.$inject = ['$scope', 'HTTPService', 'LoadingService', 'AppConstant', '$timeout'];
function aboutUsFullController($scope, HTTPService, LoadingService, AppConstant, $timeout) {
    // This is the state
    $scope.aboutUsFull = {};

    $scope.initAboutUsFullController = () => {
        console.log("About Us Full Loaded");
    }
}