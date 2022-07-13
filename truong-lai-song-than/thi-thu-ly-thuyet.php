<?php @include('header.php'); ?>
<main>
<section class="slide-mains">
        <div class="banner-mains swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="items-banner__mains">
                        <a href="#" title="">
                        <img src="theme/assets/images/banner-mains-1.jpg" alt="">
                        </a>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="items-banner__mains">
                        <a href="#" title="">
                        <img src="theme/assets/images/banner-mains-1.jpg" alt="">
                        </a>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="items-banner__mains">
                        <a href="#" title="">
                        <img src="theme/assets/images/banner-mains-1.jpg" alt="">
                        </a>
                    </div>
                </div>
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-pagination"></div>
        </div>
        <div class="group-btns__showss">
            <div class="showss-button-prev"> <i class="fa fa-angle-left" aria-hidden="true"></i> </div>
            <div class="showss-button-next"> <i class="fa fa-angle-right" aria-hidden="true"></i> </div>
        </div>
    </section>
    <section class="container mb-10s">
        <ul class="breadcrumb">
            <li><a href="index.php" title="">Trang chủ</a></li>
            <li><a href="dao-tao.php" title="" >Đào Tạo</a></li>
            <li><a href="thi-thu-ly-thuyet.php" title="" class="active">Thi Thử Lý Thuyết </a></li>
        </ul>
    </section>
    <section class="page__review">
        <div class="review__container">
            <div class="title-mains__alls titles-center__alls mb-30s">
                <h1 class="fs-30s titles-bold__alls titles-trans__alls">
                    Chương trình thi thử lý thuyết sát hạch lái xe hạng a1, a2, B1, B2, C
                </h1>
            </div>
            
            <div class="title__form">
                Vui lòng nhập thông tin của bạn trước khi Thi Thử Lý Thuyết:
            </div>
            <form action="">
                <div class="input__box">
                    <p>Họ & tên:*</p>
                    <input type="text" name="" id="" class="input__review  name">
                </div>
                <div class="input__box">
                    <p>Số điện thoại: *</p>
                    <input type="text" name="" id="" class="input__review sbd">
                </div>
                <div class="input__box">
                    <p>Hạng GPLX: *</p>
                    <select name="" id="" class="input__review-select">
                        <option value="">Hạng A1</option>
                        <option value="">Hạng A2</option>
                        <option value="">Hạng B1</option>
                        <option value="">Hạng B2</option>
                        <option value="">Hạng C</option>
                    </select>
                </div>
                <div class="input__box">
                    <p>Chọn đề thi: </p>
                    <select name="" id="" class="input__review-select">
                        <option value="">Đề số1</option>
                        <option value="">Đề số2</option>
                    </select>
                </div>
            </form>
            <a href="bai-thi.php" type="" class="btn__next">Tiếp tục</a>
        </div>
    </section>
</main>
<?php @include('footer.php'); ?>