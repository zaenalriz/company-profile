<template>
    <div class="section_2">
        <h3>Layanan kami</h3>
        <div class="row-service">
            <div class="card-service">
                <img src="https://wanteknologi.com/w4nT3k-Sukses/storage/upload/layanan/1258_layanan.png" alt="">
                <h4>
                    User-Friendly Behaviour For Business mind people
                </h4>
                <p>Lorem ipsum dolor sit amet consecte adipiscing elit sed do eiusincidunt.</p>
            </div>
            <div class="card-service">
                <img src="https://wanteknologi.com/w4nT3k-Sukses/storage/upload/layanan/1258_layanan.png" alt="">
                <h4>
                    User-Friendly Behaviour For Business mind people
                </h4>
                <p>Lorem ipsum dolor sit amet consecte adipiscing elit sed do eiusincidunt.</p>
            </div>
            <div class="card-service">
                <img src="https://wanteknologi.com/w4nT3k-Sukses/storage/upload/layanan/1258_layanan.png" alt="">
                <h4>
                    User-Friendly Behaviour For Business mind people
                </h4>
                <p>Lorem ipsum dolor sit amet consecte adipiscing elit sed do eiusincidunt.</p>
            </div>
            <div class="card-service">
                <img src="https://wanteknologi.com/w4nT3k-Sukses/storage/upload/layanan/1258_layanan.png" alt="">
                <h4>
                    User-Friendly Behaviour For Business mind people
                </h4>
                <p>Lorem ipsum dolor sit amet consecte adipiscing elit sed do eiusincidunt.</p>
            </div>
            <div class="card-service">
                <img src="https://wanteknologi.com/w4nT3k-Sukses/storage/upload/layanan/1258_layanan.png" alt="">
                <h4>
                    User-Friendly Behaviour For Business mind people
                </h4>
                <p>Lorem ipsum dolor sit amet consecte adipiscing elit sed do eiusincidunt.</p>
            </div>
        </div>

    </div>
</template>
<style>
/* section 2 */
.section_2 {
    margin-top: 80px;
}

.section_2 h3 {
    font-weight: 900;
    font-size: 48px;
    line-height: 35px;
    color: #042181;
    margin-bottom: 30px;
    text-align: center;
}

.row-service {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
}

.card-service {
    text-align: start;
    min-height: 306px;
    padding: 30px 30px 0 30px;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.05);
    border-radius: 60px 0px 0px 0px;
    background: white;
    transition: all 0.5s ease;
    margin: 10px 10px;
}

.card-service img {
    width: 100px;
}

.card-service h4 {
    font-size: 18px;
    line-height: 30px;

    color: #343b4e;
}

.card-service p {
    font-weight: 400;
    color: #827f8d;
    margin: 0 0 10px 0;
}

@media screen and (max-width: 600px) {
    .row-service {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 10px;
    }
}
</style>