<template>
    <div>
        <div class="container">
            <div class="portofolio">

                <h3> Portofolio Kami</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, praesentium hic. Culpa optio, quibusdam
                    alias
                    fuga ullam recusandae dolorem repellat.</p>
                <div class="search">
                    <input type="text" class="searchTerm" placeholder="Cari portfolio">
                    <button type="submit" class="searchButton">
                        Search
                    </button>
                </div>
                <CardPortfolio></CardPortfolio>
            </div>
        </div>
    </div>
</template>
<script>
import CardPortfolio from '@/components/Portfolio/CardPortfolio.vue';
export default {
    components: {
        CardPortfolio
    }
}
</script>

<style>
.search {
    width: 30%;
    position: relative;
    display: flex;
    margin: 15px 5px;
}

.searchTerm {
    width: 100%;
    border-right: none;
    padding: 10px;
    height: 20px;
    border-radius: 5px 0 0 5px;
    outline: none;
    color: #9DBFAF;
}



.searchButton {
    padding: 10px 10px 7px 10px;
    background: #858585;
    text-align: center;
    color: #fff;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    margin-top: 0;
    font-size: 20px;
    font-size: 17px;

}

.row-portofolio {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
}

.portofolio {
    margin-top: 10px;

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
</style>