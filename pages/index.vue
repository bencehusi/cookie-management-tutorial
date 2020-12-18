<template>
    <main class="product">
        <div class="container">
            <div class="col col-sm-6 container__image">
                <h1 class="product__title heading-1">Extreme jackets</h1>
            </div>
        </div> <!-- /.container -->
        <div class="container">
            <div class="col col-12">
                <div class="product__grid">
                    <nuxt-link to="/off-piste-thermo-extreme-3" class="product__item">
                        <div class="product__item__inner">
                            <img class="product__thumb" src="~/assets/img/product__thumb.png" alt="Product picture">
                            <div class="product__item__title">Off-piste thermo extreme 3.0 Red</div>
                        </div>
                    </nuxt-link>
                    <div class="product__item">
                        <div class="product__item__inner">
                            <img class="product__thumb" src="~/assets/img/product__thumb--variant-blue.png" alt="Product picture">
                            <div class="product__item__title">Off-piste thermo extreme 3.0 Sky</div>
                        </div>
                    </div>
                    <div class="product__item">
                        <div class="product__item__inner">
                            <img class="product__thumb" src="~/assets/img/product__thumb--variant-teal.png" alt="Product picture">
                            <div class="product__item__title">Off-piste thermo extreme 3.0 Teal</div>
                        </div>
                    </div>
                </div>
            </div> <!-- /.col -->
        </div> <!-- /.container -->
        <div class="container">
            <div class="col col-12">
                <a href='https://www.freepik.com/photos/tree'>Tree photo created by freepic.diller - www.freepik.com</a>
            </div>
        </div> <!-- /.container -->
        <div class="product__background">
            <img src="~/assets/img/product__background.jpg" alt="Snowy ski slope">
        </div>
    </main> <!-- /.products -->
</template>

<script>
export default {}
</script>
