{
    // static
    // eita hocche class er close / premium jinis eita dile then eita call korte gele class er nam dia call korte hobe

    class Counter {
        static count = 0;

        static increase (){
           return Counter.count += 1;
        }

        static decrease () {
           return Counter.count -= 1;
        }
    }

    console.log(Counter.increase());
    console.log(Counter.increase());
    console.log(Counter.increase());
    console.log(Counter.decrease());
    console.log(Counter.increase());
    console.log(Counter.increase());
}