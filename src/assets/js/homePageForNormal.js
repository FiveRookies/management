
function fmtDate(obj){
    var date =  new Date(obj);
    var y = 1900+date.getYear();
    var m = "0"+(date.getMonth()+1);
    var d = "0"+date.getDate();
    return y+"/"+m.substring(m.length-2,m.length)+"/"+d.substring(d.length-2,d.length);
};

function f1(){
    $(function(){
        // console.log(leftCarousel.carouselData);
        console.log(this.$refs.mycarousel);
        $('#rightIntro span').text(this.$refs.mycarousel.carouselData[0].content);
        $('#leftCarousel').carousel({
            interval: 1000
        });
        $('#leftCarousel').on('slid.bs.carousel', function () {
            // console.log(this.carouselData);
            // console.log(leftCarousel.cur);
            leftCarousel.cur = (leftCarousel.cur + 1)%leftCarousel.carouselData.length;
            $('#rightIntro span').text(leftCarousel.carouselData[leftCarousel.cur].content);
        })
    })
};

export default {fmtDate,f1}