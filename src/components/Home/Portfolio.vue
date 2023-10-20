<template>
    <div class="portofolio">
        <h3> Portofolio Kami</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, praesentium hic. Culpa optio, quibusdam alias
            fuga ullam recusandae dolorem repellat.</p>
        <div class="row-portofolio">
            <div class="card-portofolio">
                <img src="https://themesflat.co/html/grabyinsur/images/project/img-08.jpg" alt="">
                <div class="card-portofolio-description">
                    <h4>
                        User-Friendly Behaviour For Business mind people
                    </h4>
                    <div>
                        <p><span>Clients: </span>Radithka</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="read-more">
            <a href="">Lihat lebih banyak</a>
        </div>
    </div>
</template>

<style>
.portofolio {
    margin-top: 80px;

}

.portofolio h3 {
    margin: auto;
    font-family: 'Raleway', sans-serif;
    font-weight: 900;
    font-size: 48px;
    line-height: 70px;
    color: #042181;
    margin-bottom: 15px;
    text-align: center;
}

.portofolio p {
    font-weight: 900;
    font-size: 14px;
    line-height: 20px;
    color: #4F556A;
    max-width: 680px;
    margin: auto;
    margin-top: 14px;
    margin-bottom: 25px;
    text-align: center;
}

.portofolio p span {
    color: gray;
}

.row-portofolio {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
}

.card-portofolio {
    text-align: start;
    min-height: 306px;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.05);
    border-radius: 60px 0px 0px 0px;
    background: white;
    transition: all 0.5s ease;
    margin: 10px 10px;
}

.card-portofolio img {
    max-width: 100%;
    height: auto;
}

.card-portofolio-description {
    padding: 0 20px 20px 20px;
}

.card-portofolio h4 {
    margin-top: 10px;
    font-weight: 900;
    font-size: 30px;
    line-height: 35px;
    margin-bottom: 0;
    color: #042181;
}

@media screen and (max-width: 600px) {
    .row-portofolio {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 10px;
    }
}
</style>