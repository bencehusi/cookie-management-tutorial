<template>
    <main class="product">
        <div class="container">
            <div class="col col-sm-6 container__image">
                <h1 class="product__title heading-1">Off-Piste Thermo Extreme 3.0</h1>
            </div>
        </div> <!-- /.container -->
        <div class="container">
            <div class="col col-sm-6 product__image">
                <img class="product__image__img" src="~/assets/img/product__image.png" alt="Off-Piste Thermo Extreme 3.0 on a skier">
            </div> <!-- /.col .product__image -->
            <div class="col col-sm-6 product__details">
                <div class="container">
                    <div class="col col-sm-6 product__image">
                        <l-select
                            name="color"
                            label="Color"
                            :items="['Red', 'Blue', 'Black']"
                        />
                    </div>
                    <div class="col col-sm-6 product__image">
                        <l-select
                            name="size"
                            label="Size"
                            :items="['M', 'L', 'XL', 'XXL']"
                        />
                    </div>
                </div> <!-- /.container -->
                <div class="product__details-spacer"></div>
                <div class="container align-center">
                    <div class="col col-sm-6 product__price">
                        €476,90.-
                    </div>
                    <div class="col col-sm-6">
                        <button class="cta large primary">
                            Add to cart
                        </button>
                    </div>
                </div>  <!-- /.container -->
                <div class="container">
                    <div class="col">
                        <p>This premium quality jacket is the perfect choice for those seeking to embrace the extemes. It’s breathable fabric is suitable for intense movements while being waterproof and windproof.</p>
                    </div>
                </div>
            </div> <!-- /.col .product__details -->
        </div> <!-- /.container -->
        <div class="product__background">
            <img src="~/assets/img/product__background.jpg" alt="Snowy ski slope">
        </div>
    </main> <!-- /.product -->
</template>

<script>
export default {}
</script>
