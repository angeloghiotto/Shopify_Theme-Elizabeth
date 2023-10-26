        $(document).ready(function () {
            var arr = [addOne, substractOne];
            var ran = Math.floor(Math.random() * 4) + 1
            let viewing_amount = getRandomInt(15, 20)
            $('.total_ppl_viewing').html(viewing_amount);

            setInterval(function () {
                viewing_amount = parseInt($('.total_ppl_viewing').html());

                if (viewing_amount == 1) {
                    viewing_amount = 2;
                }


                var plusOrMinus = Math.random() < 0.5 ? -1 : 1;

                if (plusOrMinus == 1) {
                    viewing_amount = addOne(viewing_amount);
                } else {
                    viewing_amount = substractOne(viewing_amount);
                }
                $('.total_ppl_viewing').html(viewing_amount);








            }, 10000);

        });


        function addOne(number) {

            return number + 1;
        }

        function substractOne(number) {

            return number - 1;
        }


        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
        }
